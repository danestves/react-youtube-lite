// Dependencies
import * as React from "react";
import clsx from "clsx";

// Internals
import { addPrefetch } from "../utils/add-prefetch";
import { getYouTubeId } from "../utils/get-youtube-id";
import type { ReactYouTubeLiteProps } from "../types";

function RenderReactYouTubeLite(
  {
    url,
    customThumbnail,
    iframeProps,
    noCookie,
    playlist,
    poster,
    title,
  }: ReactYouTubeLiteProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  let [preconnected, setPreconnected] = React.useState(false);
  let [iframe, setIframe] = React.useState(false);

  let videoId = encodeURIComponent(getYouTubeId(url));
  let posterUrl =
    typeof customThumbnail === "string"
      ? customThumbnail
      : `https://i.ytimg.com/vi/${videoId}/${poster}.jpg`;
  let youtubeUrl = noCookie
    ? "https://www.youtube-nocookie.com"
    : "https://www.youtube.com";
  let iframeSrc = !playlist
    ? `${youtubeUrl}/embed/${videoId}?autoplay=1`
    : `${youtubeUrl}/embed/videoseries?list=${videoId}`;

  const warmConnections = () => {
    if (preconnected) return;

    // The iframe document and the majority of its subresources are all taken directly from youtube.com.
    addPrefetch("preconnect", "https://www.youtube-nocookie.com");
    // The botguard script can be found on google.com.
    addPrefetch("preconnect", "https://www.google.com");

    // These ad-related domains may or may not be on the critical path. Domain-specific throttling could be used to confirm.
    addPrefetch("preconnect", "https://googleads.g.doubleclick.net");
    addPrefetch("preconnect", "https://static.doubleclick.net");

    setPreconnected(true);
  };

  const addIframe = () => {
    if (iframe) return;

    setIframe(true);
  };

  return (
    <div
      onPointerOver={warmConnections}
      onClick={addIframe}
      className={clsx()}
      data-title={title}
      data-ryl-active={iframe}
      ref={ref}
      style={{
        backgroundImage: `url(${posterUrl})`,
      }}
    >
      <iframe
        width={560}
        height={315}
        title={title}
        src={iframeSrc}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        {...iframeProps}
      ></iframe>
    </div>
  );
}

const ReactYouTubeLite = React.forwardRef(RenderReactYouTubeLite);

export { ReactYouTubeLite };
