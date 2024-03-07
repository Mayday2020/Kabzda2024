import React from 'react'
import s from './OnOff.module.css'

type OnOffPropsType = {
    mode: boolean
}

function OnOff(props: OnOffPropsType) {
    return <div className={s.buttons}>
        <div className={props.mode ? s.on : s.none}>On</div>
        <div className={!props.mode ? s.off : s.none}>Off</div>
        <span className={props.mode ? s.radioGreen : s.radioRed}>  </span>
    </div>
}

export default OnOff