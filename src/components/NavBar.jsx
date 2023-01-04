import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSquareCaretUp } from '@fortawesome/free-regular-svg-icons'
import { faCircleHalfStroke, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'


const changeMode = () => {
    document.querySelector('#day-night-btn').classList.toggle('rotate-180');

    // add theme changing code 

}

const toggleHoverNav = () => {
    document.querySelector('#menu-btn').classList.toggle('rotate-180');
    document.querySelector('#hover-nav').classList.toggle('hidden');

    // add animation for smooth effects
}



const NavBar = () => {
    return (
        <div className='w-full top-0 left-0 right-0 fixed'>
            <div className='bg-gray-800 p-5 px-6 shadow-md shadow-black'>
                <div className='justify-items-start items-center flex gap-2 justify-between'>
                    <div className='hover:text-2xl justify-items-start items-center flex gap-2 '>
                        <FontAwesomeIcon className='px-1' icon={faUserAstronaut} size='2x' color='white' />
                        <h1 className='hover:text-2xl text-white font-serif text-xl'>
                            Bedead
                        </h1>
                    </div>

                    <div className='justify-items-end text-center flex gap-5 md:gap-14' >
                        <button id='day-night-btn' className='text-[12px] rotate-180 hover:shadow-md' onClick={() => changeMode()} >
                            <FontAwesomeIcon icon={faCircleHalfStroke} size='2x' color='white' />
                        </button>
                        <button id='menu-btn' onClick={() => toggleHoverNav()} className='text-xl md:hidden lg:hidden rounded-md hover:shadow-md hover:shadow-black' >
                            <FontAwesomeIcon icon={faSquareCaretUp} color='white' size='2x' />
                        </button>

                        <ul className='hidden md:flex lg:flex items-center text-white md:gap-14 lg:gap-20'>
                            <li className='hover:text-yellow-500 cursor-pointer '>
                                <a>Home</a>
                            </li>
                            <li className='cursor-pointer hover:text-yellow-500'>
                                <a>Projects</a>
                            </li>
                            <li className='cursor-pointer hover:text-yellow-500'>
                                <a>Contact</a>
                            </li>
                            <li className='cursor-pointer hover:text-yellow-500 font-semibold rounded-tr-sm rounded-bl-sm rounded-br-3xl rounded-tl-3xl bg-slate-500 p-2 px-3'>
                                <a>Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id='hover-nav' className='hidden top-24 rounded-lg right-6 bg-slate-700 h-fit w-fit p-5 absolute items-center'>
                    <ul className='text-center items-center text-white'>
                        <li className='cursor-pointer hover:text-yellow-500 py-1'>
                            <a>Home</a>
                        </li>
                        <li className='cursor-pointer hover:text-yellow-500 py-1'>
                            <a>Projects</a>
                        </li>
                        <li className='cursor-pointer hover:text-yellow-500 py-1'>
                            <a>Contact</a>
                        </li>
                        <li className=' hover:text-yellow-500 cursor-pointer font-semibold rounded-tr-sm rounded-bl-sm rounded-br-3xl rounded-tl-3xl bg-slate-500 p-2 px-3'>
                            <a>Resume</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default NavBar