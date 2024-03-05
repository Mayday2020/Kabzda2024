import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      this is app component
    </div>
  );
}

function Rating() {
    return <div>
        <div>star</div>
        <div>star</div>
        <div>star</div>
        <div>star</div>
        <div>star</div>
    </div>
}

function Accordion() {
  return <div>
      <h3>title</h3>
      <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
      </ul>
  </div>
}

export default App;
