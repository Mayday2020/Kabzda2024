import React, {useState} from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import Select from "./components/Select/Select";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
const dataObject = [
    {title: 'Start', value: 1},
    {title: 'Option', value: 2},
    {title: 'Exit', value: 3}
]

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [on, setOn] = useState<boolean>(true)
    const [selectCollapsed, setSelectCollapsed] = useState<boolean>(true)
    const [selectValue, setSelectValue] = useState<string>('none')
    return (
        <div className="App">
            <Accordion titleValue={'Menu'} collapsed={collapsed} setCollapsed={setCollapsed} items={[]}/>
            <UncontrolledAccordion />
            <Select collapsed={selectCollapsed}
                    setCollapsed={setSelectCollapsed}
                    titleValue={selectValue}
                    setSelectValue={setSelectValue}
                    items={dataObject}
            />
            <Rating value={ratingValue} onClick={setRatingValue} />
            <pre/>
            <UncontrolledRating />
            <OnOff value={on} setOn={setOn} />
            <UncontrolledOnOff />
        </div>
    );
}

export default App;
