import type {Meta} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Accordion from "./Accordion";
import React, {useState} from "react";

const meta: Meta<typeof  Accordion> = {
    component: Accordion
}
export default meta;
const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'}
                      collapsed={true}
                      setCollapsed={onChangeHandler}
    />
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'}
                      collapsed={false}
                      setCollapsed={onChangeHandler}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion titleValue={'Accordion'}
                      collapsed={collapsed}
                      setCollapsed={setCollapsed}
    />
}