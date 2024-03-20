import React from 'react'

type ItemType = {
    title: string
    value: number
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: Array<ItemType>
    onClick: ()=> void
}
type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}
type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: () => void
}
const Accordion = (props: AccordionPropsType) => {
    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
        {props.collapsed ?  <p>-</p> : <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}
function AccordionTitle (props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h3>
}
function AccordionBody (props: AccordionBodyPropsType) {
    return <div>
        <ul>
            {props.items.map( item => <li key={item.value} onClick={props.onClick}>{item.title}</li>)}
        </ul>
    </div>
}
export default Accordion