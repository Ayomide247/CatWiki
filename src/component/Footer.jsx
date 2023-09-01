import React from 'react';
import { FaCat, FaRegCopyright, FaSearch } from 'react-icons/fa';
import logo from "../assets/image/CatwikiLogo.svg";



const Footer = () => {
    return (
        <section className='mt-12'>
            <div className='bg-[#000000] w-full text-sky-100 p-2 md:p-5 rounded-t-2xl md:flex  justify-between'>
                <img src={logo} alt="" className='w-[200px] invert' />
                <div className='flex my-5 text-sm gap-2'>
                    <FaRegCopyright className='my-auto' />
                    <div className='flex'>
                        <p>created by  </p>
                        <p></p>
                        <span> Trusthec</span>
                        <span>-</span>
                        <p>devChallenge.io</p>
                        <p>2021</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer