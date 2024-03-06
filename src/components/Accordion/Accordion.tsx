import React from 'react'

const Accordion = () => {
    return <div>
        <AccordionTitle />
        <AccordionBody />
    </div>
}
function AccordionTitle () {
    return <h3>Menu</h3>
}
function AccordionBody () {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}
export default Accordion