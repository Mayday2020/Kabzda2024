import React from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";

function App() {
  return (
    <div className="App">
        <Accordion titleValue={'Menu'} collapsed={false}/>
        <Accordion titleValue={'Users'} collapsed={true}/>
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        <OnOff mode={false}/>
        <OnOff mode={true}/>
    </div>
  );
}



export default App;
