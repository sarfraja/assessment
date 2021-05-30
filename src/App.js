import React, { Fragment } from 'react';
import Content from './components/Content'

import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
import './App.css';

function App() {
  return (
    <Fragment>
    <BackgroundVideo />
    <Content />
    </Fragment>
  );
}

export default App;
