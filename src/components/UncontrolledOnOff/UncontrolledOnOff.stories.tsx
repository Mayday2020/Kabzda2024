import type {Meta} from '@storybook/react';
import React from "react";
import UncontrolledOnOff from "./UncontrolledOnOff";

const meta: Meta<typeof  UncontrolledOnOff> = {
    component: UncontrolledOnOff
}
export default meta;


export const OnModeChanging = () => {
    return <UncontrolledOnOff defaultValue={true}/>
}
export const OffModeChanging = () => {
    return <UncontrolledOnOff defaultValue={false}/>
}