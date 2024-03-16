import type {Meta} from '@storybook/react';
import UncontrolledRating from "./UncontrolledRating";
import React from "react";

const meta: Meta<typeof  UncontrolledRating> = {
    component: UncontrolledRating
}
export default meta;


export const ChangeRating1 = () => {
    return <UncontrolledRating defaultValue={1}/>
}
export const ChangeRating2 = () => {
    return <UncontrolledRating defaultValue={2}/>
}
export const ChangeRating3 = () => {
    return <UncontrolledRating defaultValue={3}/>
}
export const ChangeRating4 = () => {
    return <UncontrolledRating defaultValue={4}/>
}
export const ChangeRating5 = () => {
    return <UncontrolledRating defaultValue={5}/>
}
export const ChangeRating0 = () => {
    return <UncontrolledRating defaultValue={0}/>
}