import React from 'react'
import '../styles/About.css'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'

function About() {
    return ( <
        >
        <
        div className = 'about-container boxshadow' >
        <
        div className = 'about-img' >
        <
        img src = {
            about1
        }
        alt = 'img' > < /img> <
        /div> <
        div className = 'about-text' >
        <
        h1 > So, who are we ? < /h1> <
        p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum placerat quam sit amet mi scelerisque tempor.Ut tincidunt sem lorem.Integer volutpat lobortis ligula, sed bibendum urna rutrum non.Vivamus elementum consequat lacinia.Aliquam tempor lorem in orci accumsan finibus. < /p> <
        p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum placerat quam sit amet mi scelerisque tempor.Ut tincidunt sem lorem.Integer volutpat lobortis ligula, sed bibendum urna rutrum non.Vivamus elementum consequat lacinia.Aliquam tempor lorem in orci accumsan finibus. < /p> <
        /div> <
        /div> <
        div className = 'about-container boxshadow two-about' >
        <
        div className = 'about-img' >
        <
        img src = {
            about2
        }
        alt = 'img' > < /img> <
        /div> <
        div className = 'about-text' >
        <
        h1 > What we do ? < /h1> <
            p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum placerat quam sit amet mi scelerisque tempor.Ut tincidunt sem lorem.Integer volutpat lobortis ligula, sed bibendum urna rutrum non.Vivamus elementum consequat lacinia.Aliquam tempor lorem in orci accumsan finibus. < /p> <
            p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum placerat quam sit amet mi scelerisque tempor.Ut tincidunt sem lorem.Integer volutpat lobortis ligula, sed bibendum urna rutrum non.Vivamus elementum consequat lacinia.Aliquam tempor lorem in orci accumsan finibus. < /p> <
            /div> <
            /div> <
            />
    )
}

export default About