import React from 'react';
import './Header.css'
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">Login</a>
            </div>
        </div>
    );
};

export default Header;