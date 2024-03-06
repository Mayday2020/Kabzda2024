import React from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <div className="App">
      this is app component
        <Accordion/>
        <Rating value={0}/>
        <Rating value={3}/>
        <Rating value={5}/>
        <Rating value={6}/>
    </div>
  );
}



export default App;
