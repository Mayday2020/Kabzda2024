import React, {useState} from 'react'

type UncontrolledOnOffPropsType = {
    defaultValue?: boolean
}
function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {
    let [on, setOn] = useState(props.defaultValue ? props.defaultValue : false)

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        marginBottom: '2px',
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        marginBottom: '2px',
        padding: "2px",
        backgroundColor: !on ? "red" : "white"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    return <div>
        <div style={onStyle} onClick={ () => {setOn(true)} }>On</div>
        <div style={offStyle} onClick={ () => {setOn(false)} }>Off</div>
        <div style={indicatorStyle}> </div>
    </div>
}

export default UncontrolledOnOff