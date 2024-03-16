import React, {useState} from 'react'

type UncontrolledAccordionPropsType = {
    defaultValue?: boolean
}
type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean)=> void
}

const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(props.defaultValue ? props.defaultValue : false)

    return <div>
        <AccordionTitle title={"Menu"} setCollapsed={setCollapsed} collapsed={collapsed}/>
        {collapsed ?  <p>-</p> : <AccordionBody />}
    </div>
}
function AccordionTitle (props: AccordionTitlePropsType) {
    return <h3 onClick={() => {props.setCollapsed(!props.collapsed)}}>{props.title}</h3>
}
function AccordionBody () {
    return <div>
        <ul>
            <li>New game</li>
            <li>Multiplayer</li>
            <li>Options</li>
        </ul>
    </div>
}
export default UncontrolledAccordion