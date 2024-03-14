import React from 'react'

type OnOffPropsType = {
    value: boolean
    setOn: (value: boolean) => void
}

function UncontrolledOnOff(props: OnOffPropsType) {

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        marginBottom: '2px',
        padding: "2px",
        backgroundColor: props.value ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        marginBottom: '2px',
        padding: "2px",
        backgroundColor: !props.value ? "red" : "white"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.value ? "green" : "red"
    }

    return <div>
        <div style={onStyle} onClick={ () => {props.setOn(true)} }>On</div>
        <div style={offStyle} onClick={ () => {props.setOn(false)} }>Off</div>
        <div style={indicatorStyle}> </div>
    </div>
}

export default UncontrolledOnOff