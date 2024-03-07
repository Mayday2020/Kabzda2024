import React from 'react'

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
type AccordionTitlePropsType = {
    title: string
}
type AccordionBodyPropsType = {

}
const Accordion = (props: AccordionPropsType) => {
    return <div>
        <AccordionTitle title={props.titleValue}/>
        {props.collapsed ?  <p>-</p> : <AccordionBody />}
    </div>
}
function AccordionTitle (props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>
}
function AccordionBody (props: AccordionBodyPropsType) {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}
export default Accordion