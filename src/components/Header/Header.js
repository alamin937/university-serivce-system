import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import img from '../Header/Bangladesh-University-of-Business-and-Technology.png'

const Header = () => {
    const style = {
        textDecoration:'none',
        marginLeft:'30px',
        fontSize:'20px',
        fontWeight:'700'
    }
    return (
        <div className='header-style'>
            <div className='header'>
                <img src={img} alt="" />
                <div className='input-area'>
                    <h2>Search Your Services</h2>
                    <input placeholder='Search Text' type="text" />
                </div>
            </div>
           <div style={{textAlign:'left', marginTop:'20px'}}>
           <NavLink to='/home' style={style}>Home</NavLink>
            <NavLink to='/about' style={style}>About</NavLink>
            <NavLink to='/services' style={style}>Services</NavLink>
            <NavLink to='/contact' style={style}>Contact</NavLink>
           </div>
        </div>
    );
};

export default Header;