// Dependencies
import type * as YouTube from 'youtube-player/dist/types';

type GetSrcSearchProps = {
  isPlaylist?: boolean;
  url: string;
  videoId: string;
  opts?: YouTube.Options['playerVars'];
};

function getSrcSearch({ url, videoId, isPlaylist, opts }: GetSrcSearchProps) {
  let options: YouTube.Options['playerVars'] = {
    ...(!isPlaylist
      ? {
          autoplay: 1,
        }
      : {
          list: videoId,
        }),
    ...opts,
  };
  // @ts-ignore: we can use numbers on the values
  let params = new URLSearchParams(options);

  return `${url}?${params.toString()}`;
}

export type { GetSrcSearchProps };
export { getSrcSearch };
