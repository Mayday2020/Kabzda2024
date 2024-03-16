import type {Meta} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React, {useState} from "react";
import OnOff from "./OnOff";

const meta: Meta<typeof  OnOff> = {
    component: OnOff
}
export default meta;

const onChangeHandler = action('onChange')

export const OnMode = () => {
    return <OnOff value={true} setOn={onChangeHandler} />
}
export const OffMode = () => {
    return <OnOff value={false} setOn={onChangeHandler} />
}
export const ChangingMode = () => {
    let [value, setValue] = useState(true)
    return <OnOff value={value} setOn={setValue} />
}