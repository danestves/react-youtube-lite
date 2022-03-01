// Dependencies
import * as React from 'react';

// Internals
import { StyledAspectRatio, StyledYouTubeIcon } from './react-youtube-lite.styles';
import { addPrefetch } from '../../utils/add-prefetch';
import { getYouTubeId } from '../../utils/get-youtube-id';
import type { ReactYouTubeLiteProps } from '../../types';
import { getSrcSearch } from '../../utils/get-src-search';

function RenderReactYouTubeLite(
  {
    url,
    aspectRatio = 16 / 9,
    css,
    customThumbnail,
    iframeProps,
    noCookie,
    playerParameters,
    playlist,
    poster,
    title,
    ...props
  }: ReactYouTubeLiteProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  let [preconnected, setPreconnected] = React.useState(false);
  let [iframe, setIframe] = React.useState(false);

  let videoId = encodeURIComponent(getYouTubeId(url));
  let posterUrl =
    typeof customThumbnail === 'string' ? customThumbnail : `https://i.ytimg.com/vi/${videoId}/${poster}.jpg`;
  let youtubeUrl = noCookie ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com';
  let iframeSrc = !playlist ? `${youtubeUrl}/embed/${videoId}` : `${youtubeUrl}/embed/videoseries`;

  const warmConnections = () => {
    if (preconnected) return;

    // The iframe document and the majority of its subresources are all taken directly from youtube.com.
    addPrefetch('preconnect', 'https://www.youtube-nocookie.com');
    // The botguard script can be found on google.com.
    addPrefetch('preconnect', 'https://www.google.com');

    // These ad-related domains may or may not be on the critical path. Domain-specific throttling could be used to confirm.
    addPrefetch('preconnect', 'https://googleads.g.doubleclick.net');
    addPrefetch('preconnect', 'https://static.doubleclick.net');

    setPreconnected(true);
  };

  const addIframe = () => {
    if (iframe) return;

    setIframe(true);
  };

  return (
    <StyledAspectRatio
      css={{
        backgroundImage: `url(${posterUrl})`,
        ...css,
      }}
      onPointerOver={warmConnections}
      onClick={addIframe}
      data-title={title}
      ref={ref}
      ratio={aspectRatio}
      {...props}
    >
      <StyledYouTubeIcon />
      {iframe ? (
        <iframe
          width={560}
          height={315}
          title={title}
          src={getSrcSearch({
            url: iframeSrc,
            videoId,
            isPlaylist: playlist,
          })}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          {...iframeProps}
        ></iframe>
      ) : null}
    </StyledAspectRatio>
  );
}

const ReactYouTubeLite = React.forwardRef(RenderReactYouTubeLite);

export default ReactYouTubeLite;
