import React from 'react'
import {
    Link
} from 'react-router-dom'

function Error() {
    return ( <
        div >
        <
        div className = 'divder'
        style = {
            {
                height: "56.5vh",
                backgroundColor: "#fff",
                width: "95%",
                margin: "1rem auto",
                display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }
        } >
        <
        h1 className = 'heading' > Error < /h1> <
        p className = 'text-content' > GO back < Link style = {
            {
                textDecoration: "underline"
            }
        }
        to = "/" > Home < /Link> Or</p >
        <
        div style = {
            {
                display: "flex",
                justifyContent: "space-evenly",
                margin: "1rem auto",
                backgroundColor: "lightgreen",
                color: "#fff",
                padding: "1rem",
                width: "100%"
            }
        } >
        <
        Link to = "/products" > products < /Link> <
        Link to = "/contact" > contact < /Link> <
        Link to = "/gallery" > gallery < /Link> <
        Link to = "/customization" > customization < /Link> <
        Link to = "/about" > about < /Link> <
        Link to = "/products-details" > products - details < /Link> <
        Link to = "/place-order" > place - order < /Link> <
        Link to = "/checkout" > checkout < /Link> <
        Link to = "/success" > success < /Link> <
        /div>

        <
        /div> <
        /div>
    )
}

export default Error