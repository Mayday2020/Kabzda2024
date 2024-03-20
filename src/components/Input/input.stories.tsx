import React, {ChangeEvent, useRef, useState} from 'react'

export default {
    title: 'input'
}

export const UncontrolledInput = () => {
    return <div>
        <input />
    </div>
}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <div>
        <input /> {value}
    </div>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const InputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = InputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <div>
        <input ref={InputRef}/>
        <button onClick={save}>Get</button>
        value: {value}
    </div>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <div>
        <input value={parentValue} onChange={ onChange }/>
    </div>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <div>
        <input checked={parentValue} onChange={onChange} type='checkbox'/>
    </div>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <div>
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            <option value="1">Minsk</option>
            <option value="2">Moscow</option>
            <option value="3">Kiev</option>
        </select>
    </div>
}
