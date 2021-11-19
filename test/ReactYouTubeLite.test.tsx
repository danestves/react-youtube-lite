// Dependencies
import React from 'react';
import * as ReactDOM from 'react-dom';

// Internals
import { Default as ReactYouTubeLite } from '../stories/ReactYouTubeLite.stories';

describe('ReactYouTubeLite', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <ReactYouTubeLite url="https://www.youtube.com/watch?v=DVQTGidS1yk" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
