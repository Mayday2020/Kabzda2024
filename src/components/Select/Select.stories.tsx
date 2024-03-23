import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import React, {useState} from "react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
    component: Select
}
export default meta;

const onChangeHandler = action('onChange')
const onClickCallback = action('some item was clicked')
const dataObject = [
    {title: 'Start', value: 1},
    {title: 'Option', value: 2},
    {title: 'Exit', value: 3}
]

export const collapsedSelect = () => {
    return <Select setCollapsed={onChangeHandler}
                   items={dataObject}
                   titleValue={'none'}
                   collapsed={true}
                   setSelectValue={() => {}}

    />
}
export const openSelect = () => {
    return <Select setCollapsed={onChangeHandler}
                   items={dataObject}
                   titleValue={'none'}
                   collapsed={false}
                   setSelectValue={() => {}}

    />
}
export const selectedFirstOption = () => {
    return <Select setCollapsed={onChangeHandler}
                   items={dataObject}
                   titleValue={dataObject[0].title}
                   collapsed={true}
                   setSelectValue={() => {}}

    />
}
export const freeSelect = () => {
    const [collapsed, setCollapsed] = useState(true)
    const [titleValue, setTitleValue] = useState('none')
    return <Select setCollapsed={setCollapsed}
                   items={dataObject}
                   titleValue={titleValue}
                   collapsed={collapsed}
                   setSelectValue={setTitleValue}

    />
}