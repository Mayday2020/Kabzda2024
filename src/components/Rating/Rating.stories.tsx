import type {Meta} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Rating from "./Rating";
import React, {useState} from "react";
import {RatingValueType} from "../../App";

const meta: Meta<typeof  Rating> = {
    component: Rating
}
export default meta;

const onChangeHandler = action('onChange')

export const EmptyRating = () => {
    return <Rating value={0} onClick={onChangeHandler}/>
}
export const Rating1 = () => {
    return <Rating value={1} onClick={onChangeHandler}/>
}
export const Rating2 = () => {
    return <Rating value={2} onClick={onChangeHandler}/>
}
export const Rating3 = () => {
    return <Rating value={3} onClick={onChangeHandler}/>
}
export const Rating4 = () => {
    return <Rating value={4} onClick={onChangeHandler}/>
}
export const Rating5 = () => {
    return <Rating value={5} onClick={onChangeHandler}/>
}
export const ChangeRating = () => {
    const [value, setValue] = useState<RatingValueType>(0)
    return <Rating value={value} onClick={setValue}/>
}