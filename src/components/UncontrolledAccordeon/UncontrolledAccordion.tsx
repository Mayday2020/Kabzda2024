import React, {useState} from 'react'

type AccordionPropsType = {
    titleValue: string
}
type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean)=> void
}

const UncontrolledAccordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(true)

    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
        {collapsed ?  <p>-</p> : <AccordionBody />}
    </div>
}
function AccordionTitle (props: AccordionTitlePropsType) {
    return <h3 onClick={() => {props.setCollapsed(!props.collapsed)}}>{props.title}</h3>
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
export default UncontrolledAccordion