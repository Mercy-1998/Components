import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : 'secondary'
    let className1 = props.primary ? 'primary1' : 'secondary1'
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheets</h1>
            <h1 className={`${className1} font-xl`}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheet
