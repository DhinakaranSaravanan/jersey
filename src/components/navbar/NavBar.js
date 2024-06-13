import React from 'react'
import './navbar.css'
import { obj } from '../../helper/sideBarData'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
import { AiOutlineShoppingCart } from 'react-icons/ai';

function NavBar() {
    return ( 
    <div className = 'navbar-container' >
        <div className = 'logo-container' >
            <img src = { logo } alt = "img" > </img> 
        </div> 
        <div className = 'nav-links' > {
            obj.map((data) => {
                return (
                    <NavLink to = { data.route }
                        data-title = { data.menu_name }
                        end className = {({ isActive }) => isActive ? 'selected nav-link' : 'nav-link'
                        } key = { data.id } > { /* {data.icon} */ } <span className = 'menu-name' > { data.menu_name } </span>
                    </NavLink>)
            })
            } 
        </div> 
        <div className = 'nav-cart'>
            <AiOutlineShoppingCart />
        </div>
    </div>
    )
}

export default NavBar