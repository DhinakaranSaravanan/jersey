import React from 'react'
import './footer.css'
import logo from '../../assets/logo/logo.png'
import { obj } from '../../helper/sideBarDat'
import { NavLink } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';
import { BiPhone } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';

function Footer() {
    return ( 
        <div className = 'footer-container' >
            <div className = 'logo-footer' >
                <img src = { logo } alt = "img" > </img>
            </div> 
            <br/>
            <div className = 'footer-links' >
            <h1> Quick Links </h1> {
                obj.map((data) => {
                    return (
                        <NavLink to = { data.route } data-title = { data.menu_name } end className = { ({ isActive }) => isActive ? 'selected nav-link' : 'nav-link' } key = { data.id } > { /* {data.icon} */ } <span className = 'menu-name' > { data.menu_name } </span>
                        </NavLink>)
                    })
                } 
            </div> 
            <br/>
            <div className = 'footer-address' >
                <div className = 'svg' >
                    <FiMapPin/>
                    <p> 54, Chester Road, Tweed Heads South, New South Wales, Australia 2486 </p>
                </div>
                <div>
                    <BiPhone />
                    <p> +61 6282864942 </p> 
                </div> 
                <div>
                    <MdOutlineEmail />
                    <p> Example @jurseykulture.com </p> 
                </div>
            </div>
        </div>
    )
}

export default Footer