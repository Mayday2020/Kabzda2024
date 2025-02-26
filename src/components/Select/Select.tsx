import React from 'react'

type ItemType = {
    title: string
    value: number
}
type SelectPropsType = {
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    titleValue: string
    setSelectValue: (value: string) => void
    items: Array<ItemType>
}
type SelectTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}
type SelectBodyPropsType = {
    items: ItemType[]
    selectItem: (value: string)=> void
    setCollapsed: (collapsed: boolean) => void
}
const Select = (props: SelectPropsType) => {
    return <div>
        <SelectTitle title={props.titleValue}
                     collapsed={props.collapsed}
                     setCollapsed={props.setCollapsed}/>
        {props.collapsed ? <p>-</p> : <SelectBody items={props.items}
                                                  selectItem={props.setSelectValue}
                                                  setCollapsed={props.setCollapsed}/>}
    </div>
}
/////
const SelectTitle = (props: SelectTitlePropsType) => {
    return <h3 onClick={() => props.setCollapsed(!props.collapsed)}>
        {props.title}
    </h3>
}
const SelectBody = (props: SelectBodyPropsType) => {
    const onSelected = (value: string)=> {
        props.selectItem(value)
        props.setCollapsed(true)
    }
    return <ul>
        {props.items.map( el => {
            return <li key={el.value} onClick={() => onSelected(el.title)}>{el.title}</li>
        })}
    </ul>
}
export default Select