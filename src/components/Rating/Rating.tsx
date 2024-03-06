import React from "react";

type StarProps = {
    selected: boolean
}
function Star(props: StarProps) {
    if(props.selected){
     return <span style={{fontWeight: 'bold'}}>Star </span>
    } else {
        return <span style={{fontWeight: 'normal'}}>Star </span>
    }


}

type RatingProps = {
    value: number
}
const Rating = (props: RatingProps) => {
    let value = props.value
    if (value > 6 || value < 0) value = 5
        return <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
}

export default Rating