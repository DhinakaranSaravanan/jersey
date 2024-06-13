import React from "react";
import './slickbtn.css'

export default function SampleNextArrow(props) {
    const {
        className,
        style,
        onClick
    } = props;
    return ( 
        <div className = { `btns btnsnext ${className}` }
            style = {
            { ...style,
                display: "block",
                background: "red"
            }}
             onClick = { onClick } > hi </div>
    );
}