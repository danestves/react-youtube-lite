# react-youtube-lite

A responsive react component to render YouTube videos in a lazyload mode to get a high speed load website.

Demo: https://codesandbox.io/s/react-youtube-lite-uikk9n?file=/src/App.js

## 📊 Comparison

| YouTube iframe                                                                                                                              | `react-youtube-lite`                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Initial load of youtube iframe](https://user-images.githubusercontent.com/31737273/156228816-f6f80dff-eaba-443e-9834-785cf8b8fe8c.png)    | ![Initial load of react-youtube-lite](https://user-images.githubusercontent.com/31737273/156228959-7b3a2c8e-8794-40e7-8a76-3baf72771cb1.png)    |
| ![Network fetch from youtube iframe](https://user-images.githubusercontent.com/31737273/156229073-177dd07e-02d2-473e-8416-21d6e10e3179.png) | ![Network fetch from react-youtube-lite](https://user-images.githubusercontent.com/31737273/156229143-a8740655-9628-437c-b86b-de5462456e23.png) |

## 👨‍💻 Installation

npm:

```bash
npm add react-youtube-lite
```

yarn:

```bash
yarn add react-youtube-lite
```

pnpm:

```bash
pnpm add react-youtube-lite
```

## 📚 Usage

```tsx
import { ReactYouTubeLite } from 'react-youtube-lite';

// Full URL
const App = () => {
  return (
    <ReactYouTubeLite
      url="https://www.youtube.com/watch?v=DVQTGidS1yk"
      title='React and the Music Industry | Jameyel "J. Dash" Johnson'
    />
  );
};

// Short URL
const App = () => {
  return (
    <ReactYouTubeLite
      url="https://youtu.be/DVQTGidS1yk"
      title='React and the Music Industry | Jameyel "J. Dash" Johnson'
    />
  );
};

// ID
const App = () => {
  return <ReactYouTubeLite url="DVQTGidS1yk" title='React and the Music Industry | Jameyel "J. Dash" Johnson' />;
};
```

## 🎨 Use your own styles

Since with use Stitches to style the component you can make use of any of the properties that already supported by them.

![Props example of css prop](https://user-images.githubusercontent.com/31737273/156232642-1c13ea1f-021d-4f33-a3ba-3e34027a9b3b.png)

This only apply to the main container, if you want to override styles for the iframe element you can do it like this 👇

![Props example of the css prop inside the frameProps attribute](https://user-images.githubusercontent.com/31737273/156233437-d5f89019-3dc2-45c8-94e3-c0ba2f8a61d5.png)

## 📝 Props

- `url`: YouTube video URL or ID
- `adNetwork`: Preconnect the adnetwork of Google. Default is `false`.
- `aspectRatio`: Aspect ratio of the video, you can pass any ratio using numbers. Default is `16/9`.
- `css`: We use Stitches to style the component, you can pass your own CSS values.
- `customThumbnail`: Custom thumbnail URL instead of the default one.
- `iframeProps`: Props to pass to the `iframe` element.
- `noCookie`: Connect to YouTube via the Privacy-Enhanced Mode. Default is `true`.
- `playerParameters`: Parameters to pass to the YouTube player. Full list of parameters can be found [here](https://developers.google.com/youtube/player_parameters#Parameters).
- `playlist`: If the video URL contains a playlist.
- `poster`: The different quality to show the poster. Default is `hqdefault`.
- `title`: Is used for a11y and we must always provide a title. Default is `React YouTube Lite`.

Also you can pass any other props since it will render a `div` element.

![Props of the div element](https://user-images.githubusercontent.com/31737273/156232297-271024b2-cf52-4b37-ada5-2329a7e11a11.png)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
Feel free to check [issues page](https://github.com/danestves/react-youtube-lite/issues). You can also take a look at the [contributing guide](https://github.com/danestves/react-youtube-lite/blob/main/CONTRIBUTING.md).

## License

[MIT License](LICENSE) Copyright (c) 2020 [Daniel Esteves](https://danestves.com/).
