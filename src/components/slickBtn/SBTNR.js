import React from "react";
import './slickbtn.css'
export default function SamplePrevArrow(props) {
    const {
        className,
        style,
        onClick
    } = props;
    return ( 
        <div className = { `btns btnsprev ${className}` }
            style = {
            { ...style,
                display: "block",
                background: "green"
            }
            }
        onClick = { onClick }/>
    );
}