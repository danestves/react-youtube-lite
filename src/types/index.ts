// Dependencies
import type * as React from 'react';
import type * as Stitches from '@stitches/react';

interface ReactYouTubeLiteProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * This can be either an url to a video or a video ID.
   */
  url: string;
  /**
   * The aspect ratio of the video.
   *
   * @default 16/9
   */
  aspectRatio?: number;
  /**
   * It’s like the style attribute, but it supports tokens, media queries, nesting and token-aware values.
   */
  css?: Stitches.CSS;
  /**
   * A custom thumbnail image url to show instead of the original youtube thumbnail
   *
   * @default false
   */
  customThumbnail?: string;
  /**
   * Properties of the iframe element.
   */
  iframeProps?: React.ComponentPropsWithoutRef<'iframe'>;
  /**
   * If you use GDPR and don't want YouTube cookies enable this option
   *
   * @default false
   */
  noCookie?: boolean;
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
  poster?: 'maxresdefault' | '0' | '1' | '2' | '3' | 'default' | 'hqdefault' | 'mqdefault' | 'sddefault';
  /**
   * The `data-title` to insert in the `iframe`
   *
   * @default "React YouTube Lite"
   */
  title?: string;
}

export { ReactYouTubeLiteProps };
