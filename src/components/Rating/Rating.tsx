import React from "react";
import {RatingValueType} from "../../App";

type StarProps = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}
type RatingProps = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Star(props: StarProps) {
    return <span onClick={() => props.onClick(props.value)}>
        {
            props.selected ? <b>Star </b> : 'Star '
        }
    </span>
}

const Rating = (props: RatingProps) => {
        return <div>
            <Star selected={props.value > 0} onClick={ props.onClick } value={1}/>
            <Star selected={props.value > 1} onClick={ props.onClick } value={2}/>
            <Star selected={props.value > 2} onClick={ props.onClick } value={3}/>
            <Star selected={props.value > 3} onClick={ props.onClick } value={4}/>
            <Star selected={props.value > 4} onClick={ props.onClick } value={5}/>
        </div>
}
export default Rating