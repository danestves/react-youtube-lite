import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactYouTubeLite } from '../.';

const App = () => {
  return (
    <div>
      <ReactYouTubeLite url="https://www.youtube.com/watch?v=DVQTGidS1yk" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
