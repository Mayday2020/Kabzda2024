import React, {useState} from "react";

type StarProps = {
    selected: boolean
    setValue: (value: number)=> void
    starValue: number
}

function Star(props: StarProps) {
    return <span onClick={() => props.setValue(props.starValue)}>
        {
            props.selected
                ? <span style={{fontWeight: 'bold'}}>Star </span>
                : <span style={{fontWeight: 'normal'}}>Star </span>
        }
    </span>
}

const UncontrolledRating = () => {
    let [value, setValue] = useState(0)

    return <div>
        <Star selected={value > 0} setValue={setValue} starValue={1}/>
        <Star selected={value > 1} setValue={setValue} starValue={2}/>
        <Star selected={value > 2} setValue={setValue} starValue={3}/>
        <Star selected={value > 3} setValue={setValue} starValue={4}/>
        <Star selected={value > 4} setValue={setValue} starValue={5}/>
    </div>
}
export default UncontrolledRating