import React from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordeon/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";

function App() {
  return (
    <div className="App">
        <UncontrolledAccordion titleValue={'Menu'}/>
        <Accordion titleValue={'Users'} collapsed={true}/>
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        <pre/>
        <UncontrolledRating />
        <OnOff />
        <OnOff />
    </div>
  );
}



export default App;
