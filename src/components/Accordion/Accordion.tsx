import React from 'react'

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}
type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

const Accordion = (props: AccordionPropsType) => {
    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
        {props.collapsed ?  <p>-</p> : <AccordionBody />}
    </div>
}
function AccordionTitle (props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h3>
}
function AccordionBody () {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}
export default Accordion