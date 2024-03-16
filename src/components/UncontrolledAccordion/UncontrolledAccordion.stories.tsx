import type {Meta} from '@storybook/react';
import React from "react";
import UncontrolledAccordion from "./UncontrolledAccordion";

const meta: Meta<typeof UncontrolledAccordion> = {
    component: UncontrolledAccordion
}
export default meta;

export const AccordionDemoOpen = () => {
    return <UncontrolledAccordion defaultValue={false}/>
}
export const AccordionDemoCollapsed = () => {
    return <UncontrolledAccordion defaultValue={true}/>
}