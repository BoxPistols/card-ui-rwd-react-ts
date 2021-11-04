import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.scss';

const App: React.VFC = () => {
  return (
    <div>
      <Hello />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};

render(<App />, document.getElementById('root'));
