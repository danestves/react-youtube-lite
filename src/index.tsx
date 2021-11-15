// Dependencies
import * as React from 'react';

// Styles
import './styles/styles.css';

export interface Props {
  /**
   * If `https://static.doubleclick.net` is enabled or not
   *
   * @default true
   */
  adNetwork?: boolean;
  /**
   * The URL of the video in any format like youtube.com or youtu.be
   * we take care of get the ID of the video
   */
  url: string;
  /**
   * If the video URL contains a playlist or not
   *
   * @default false
   */
  playlist?: boolean;
  /**
   * The different quality to show the poster
   * see: https://developers.google.com/youtube/v3/docs/thumbnails
   * for more information
   *
   * @default "hqdefault"
   */
  poster?:
    | 'maxresdefault'
    | '0'
    | '1'
    | '2'
    | '3'
    | 'default'
    | 'hqdefault'
    | 'mqdefault'
    | 'sddefault';
  /**
   * The `data-title` to insert in the `iframe`
   *
   * @default "React YouTube Lite"
   */
  title?: string;
  /**
   * If you use GDPR and don't want YouTube cookies enable this option
   *
   * @default false
   */
  noCookie?: boolean;
  /**
   * The class used to hide the elements when the iframe is already renderer
   *
   * @default "lty-playbt"
   */
  activatedClass?: string;
  /**
   * Default classes to put iframe responsive
   *
   * @default "embed-reponsive-item"
   */
  iframeClass?: string;
  /**
   * Class for youtube play button
   *
   * @default "lty-playbtn"
   */
  playerClass?: string;
  /**
   * Default classes to put container responsive
   *
   * @default "ryt-lite embed-responsive"
   */
  wrapperClass?: string;
  /**
   * Implements a `padding-bottom` to generate the size of the iframe
   *
   * - `aspect-ratio-none`: 0
   * - `aspect-ratio-square`: 100%
   * - `aspect-ratio-16/9`: 56.25%
   * - `aspect-ratio-4/3`: 75%
   * - `aspect-ratio-21/9`: 42.86%
   *
   * @default "aspect-ratio-16/9"
   */
  aspectRatio?:
    | 'aspect-ratio-none'
    | 'aspect-ratio-square'
    | 'aspect-ratio-16/9'
    | 'aspect-ratio-4/3'
    | 'aspect-ratio-21/9';
}

/**
 * Returns the ID of the youtube video url provided
 *
 * @param url - The URL of the video (we take care of )
 */
export function getYoutubeId(url: string): string {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[7].length === 11 ? match[7] : '';
}

/**
 * Render faster YouTube videos to get a high score page render
 */
export const ReactYouTubeLite = ({
  adNetwork = true,
  url = '',
  playlist = false,
  poster = 'hqdefault',
  title = 'React YouTube Lite',
  noCookie = false,
  activatedClass = 'lyt-activated',
  iframeClass = 'embed-responsive-item',
  playerClass = 'lty-playbtn',
  wrapperClass = 'ryt-lite embed-responsive',
  aspectRatio = 'aspect-ratio-16/9',
}: Props): JSX.Element => {
  const [preconnected, setPreconnected] = React.useState(false);
  const [iframe, setIframe] = React.useState(false);
  const videoId = encodeURIComponent(getYoutubeId(url));
  const videoTitle = title;
  const posterUrl = `https://i.ytimg.com/vi/${videoId}/${poster}.jpg`;
  const ytUrl = noCookie
    ? 'https://www.youtube-nocookie.com'
    : 'https://www.youtube.com';
  const iframeSrc = !playlist
    ? `${ytUrl}/embed/${videoId}?autoplay=1`
    : `${ytUrl}/embed/videoseries?list=${videoId}`;

  /**
   * Preload google `link` in header
   */
  const warmConnections = () => {
    if (preconnected) return;

    setPreconnected(true);
  };

  /**
   * Set iframe as active if already active, return.
   */
  const addIframe = () => {
    if (iframe) return;

    setIframe(true);
  };

  return (
    <>
      <link rel="preload" href={posterUrl} as="image" />
      <>
        {preconnected && (
          <>
            <link rel="preconnect" href={ytUrl} />
            <link rel="preconnect" href="https://www.google.com" />
            {adNetwork && (
              <>
                <link rel="preconnect" href="https://static.doubleclick.net" />
                <link
                  rel="preconnect"
                  href="https://googleads.g.doubleclick.net"
                />
              </>
            )}
          </>
        )}
      </>
      <div
        onPointerOver={warmConnections}
        onClick={addIframe}
        className={`${wrapperClass} ${aspectRatio} ${
          iframe ? activatedClass : ''
        }`}
        data-title={videoTitle}
        style={{ backgroundImage: `url(${posterUrl})` }}
      >
        <div className={playerClass}></div>
        {iframe && (
          <iframe
            className={iframeClass}
            title={videoTitle}
            width="560"
            height="315"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={iframeSrc}
          ></iframe>
        )}
      </div>
    </>
  );
};
