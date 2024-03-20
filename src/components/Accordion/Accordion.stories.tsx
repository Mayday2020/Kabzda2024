import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Accordion from "./Accordion";
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion
}
export default meta;

const onChangeHandler = action('onChange')
const onClickCallback = action('some item was clicked')
const dataObject = [
    {title: 'Start', value: 1},
    {title: 'Option', value: 2},
    {title: 'Exit', value: 3}
]
export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'}
                      collapsed={true}
                      setCollapsed={onChangeHandler}
                      items={dataObject}
                      onClick={onClickCallback}
    />
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'}
                      collapsed={false}
                      setCollapsed={onChangeHandler}
                      items={dataObject}
                      onClick={onClickCallback}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion titleValue={'Accordion'}
                      collapsed={collapsed}
                      setCollapsed={setCollapsed}
                      items={dataObject}
                      onClick={onClickCallback}
    />
}