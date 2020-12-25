# React YouTube Lite

<p align="center">
  <a href="https://www.npmjs.org/package/react-youtube-lite">
    <img src="https://img.shields.io/npm/v/react-youtube-lite/latest.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.org/package/react-youtube-lite">
    <img src="https://img.shields.io/npm/dm/react-youtube-lite.svg" alt="Monthly download on NPM" />
  </a>
  <a href="https://circleci.com/gh/danestves/react-youtube-lite" target="_blank">
    <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/danestves/react-youtube-lite">
  </a>
  <a href="fffff" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/danestves" target="_blank">
    <img alt="Twitter: danestves" src="https://img.shields.io/twitter/follow/danestves.svg?style=social" />
  </a>
</p>

A responsive react component to render YouTube videos in a lazyload mode to get a high speed load website.

You can see a [demo here](https://danestves.github.io/react-youtube-lite/?path=/story/component-react-youtube-lite--default)

## ⏳ Installation

```bash
# npm
npm install react-youtube-lite

# yarn
yarn add react-youtube-lite
```

## ✏️ Usage

```tsx
// index.tsx
import * as React from 'react';
import { ReactYouTubeLite } from 'react-youtube-lite';

const App = (): JSX.Element => {
  return <ReactYouTubeLite url="https://www.youtube.com/watch?v=DVQTGidS1yk" />;
};
```

```jsx
// index.jsx
import React from 'react';
import { ReactYouTubeLite } from 'react-youtube-lite';

const App = () => {
  return <ReactYouTubeLite url="https://www.youtube.com/watch?v=DVQTGidS1yk" />;
};
```

## 🔗 Props

| Name             | Type      | Default                     | Description                                                                                                                                                                                                                           | Re quired |
| ---------------- | --------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `adNetwork`      | `boolean` | `true`                      | If `https://static.doubleclick.net` is enabled or not                                                                                                                                                                                 | No        |
| `url`            | `string`  |                             | The URL of the video in any format like youtube.com or youtu.be we take care of get the ID of the video                                                                                                                               | Yes       |
| `playlist`       | `boolean` | `false`                     | If the video URL contains a playlist or not                                                                                                                                                                                           | No        |
| `poster`         | `string`  | `hqdefault`                 | The different quality to show the poster see: https://developers.google.com/youtube/v3/docs/thumbnails for more information. Available options: `maxresdefault`, `0`, `1`, `2`, `3`, `default`, `hqdefault`, `mqdefault`, `sddefault` | No        |
| `title`          | `string`  | `React YouTube Lite`        | The `data-title` to insert in the `iframe`                                                                                                                                                                                            | No        |
| `noCookie`       | `boolean` | `false`                     | If you use GDPR and don't want YouTube cookies enable this option                                                                                                                                                                     | No        |
| `activatedClass` | `string`  | `lty-playbt`                | The class used to hide the elements when the iframe is already renderer                                                                                                                                                               | No        |
| `iframeClass`    | `string`  | `embed-reponsive-item`      | Default classes to put iframe responsive                                                                                                                                                                                              | No        |
| `playerClass`    | `string`  | `lty-playbtn`               | Class for youtube play button                                                                                                                                                                                                         | No        |
| `wrapperClass`   | `string`  | `ryt-lite embed-responsive` | Default classes to put container responsive                                                                                                                                                                                           | No        |
| `aspectRatio`    | `string`  | `aspect-ratio-16/9`         | Implements a `padding-bottom` to generate the size of the iframe. Available options: `aspect-ratio-none`, `aspect-ratio-square`, `aspect-ratio-16/9`, `aspect-ratio-4/3`, `aspect-ratio-21/9`                                         | No        |

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/danestves/react-youtube-lite/issues). You can also take a look at the [contributing guide](https://github.com/danestves/react-youtube-lite/blob/main/CONTRIBUTING.md).

## License

[MIT License](LICENSE.md) Copyright (c) 2020 [Daniel Esteves](https://danestves.com/).
