import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/image/CatwikiLogo.svg";


const NavLogo = () => {
    return (
        <div className='z-50'>
            <Link to="/" className='fixed gap-2 bg-white w-full top-0 left-4 lg:left-64  ' >
                <img src={logo} alt="" className='w-[200px] text-white py-10' />
            </Link>
        </div>
    )
}

export default NavLogo