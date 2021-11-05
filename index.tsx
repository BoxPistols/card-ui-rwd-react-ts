import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './src/components/Hello';
import Test from './src/components/Test';
import './style.scss';

const App: React.VFC = () => {
  return (
    <div className="card__layout">
      <h2>The Cards</h2>
      <Test />
      <ul className="cards">
        <Hello />
        <Hello />
        <Hello />
      </ul>
    </div>
  );
};

render(<App />, document.getElementById('root'));
