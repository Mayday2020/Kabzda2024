import React, {useState} from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordeon/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [on, setOn] = useState<boolean>(true)
    return (
        <div className="App">
            <UncontrolledAccordion titleValue={'Menu'}/>
            <Accordion titleValue={'Users'} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <pre/>
            <UncontrolledRating/>
            <OnOff/>
            <UncontrolledOnOff value={on} setOn={setOn}/>
        </div>
    );
}


export default App;
