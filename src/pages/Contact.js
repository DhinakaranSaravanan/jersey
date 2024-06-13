import React from 'react'
import '../styles/Contact.css'
import Input from '../components/input/Input'

function Contact() {
    return ( <
        >
        <
        div className = 'contact-container' >
        <
        div className = 'contact-info' >
        <
        div className = 'divder' >
        <
        h1 className = 'heading' > Get in < span style = {
            {
                color: "#22A39F"
            }
        } > touch < /span> </h
        1 > { /* <p className='text-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id.</p> */ } <
        /div> <
        Input type = "text"
        placeholder = "Contact name" / >
        <
        Input type = "text"
        placeholder = "Street" / >
        <
        div className = 'input-divider' >
        <
        Input type = "text"
        placeholder = "City" / > < Input type = "text"
        placeholder = "Postcode" / >
        <
        /div> <
        Input type = "text"
        placeholder = "Contact Phone" / >
        <
        Input type = "email"
        placeholder = "E-mail" / >
        <
        textarea rows = {
            6
        } > < /textarea> <
        button > Submit < /button> <
        /div> <
        div className = 'contact-map boxshadow' >
        <
        iframe title = 'map'
        className = 'boxshadow'
        width = "90%"
        height = "100%"
        src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248755.79476670703!2d80.0442020970255!3d13.047807807068425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1688365438118!5m2!1sen!2sin"
        allowFullScreen = ""
        loading = "lazy"
        referrerPolicy = "no-referrer-when-downgrade" > < /iframe> <
        /div> <
        /div> <
        />
    )
}

export default Contact