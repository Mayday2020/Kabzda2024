import React from "react";

type StarProps = {
    selected: boolean
}
type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function Star(props: StarProps) {
    return <span>
        {
            props.selected
                ? <span style={{fontWeight: 'bold'}}>Star </span>
                : <span style={{fontWeight: 'normal'}}>Star </span>
        }
    </span>
}

const Rating = (props: RatingProps) => {
    let value = props.value
        return <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
}
export default Rating