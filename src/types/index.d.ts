interface ReactYouTubeLiteProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * This can be either an url to a video or a video ID.
   */
  url: string;
  /**
   * The class used to hide the elements when the iframe is already renderer
   *
   * @default "lty-playbt"
   */
  activatedClass?: string;
  /**
   * If `https://static.doubleclick.net` is enabled or not
   *
   * @default true
   */
  adNetwork?: boolean;
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
    | "aspect-ratio-none"
    | "aspect-ratio-square"
    | "aspect-ratio-16/9"
    | "aspect-ratio-4/3"
    | "aspect-ratio-21/9";
  /**
   * A custom thumbnail image url to show instead of the original youtube thumbnail
   *
   * @default false
   */
  customThumbnail?: string;
  iframeProps?: React.ComponentPropsWithoutRef<"iframe">;
  /**
   * If you use GDPR and don't want YouTube cookies enable this option
   *
   * @default false
   */
  noCookie?: boolean;
  /**
   * Class for youtube play button
   *
   * @default "lty-playbtn"
   */
  playerClass?: string;
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
    | "maxresdefault"
    | "0"
    | "1"
    | "2"
    | "3"
    | "default"
    | "hqdefault"
    | "mqdefault"
    | "sddefault";
  /**
   * The `data-title` to insert in the `iframe`
   *
   * @default "React YouTube Lite"
   */
  title?: string;
  /**
   * Default classes to put container responsive
   *
   * @default "ryt-lite embed-responsive"
   */
  wrapperClass?: string;
}

export { ReactYouTubeLiteProps };
