import React from 'react'
import anim_profile from '../images/img3-bg.png'
import { motion as m } from 'framer-motion'

const Hero = () => {
    return (

        <div
            className='px-6 pt-6 lg:pb-5 block md:flex items-center justify-center'>
            <div className='self-center'  >
                <m.div
                    initial={{
                        scale: 0
                    }} transition={{
                        duration: 0.8,
                        type: "tween",
                    }} animate={{
                        scale: 1
                    }}
                    className='flex items-center justify-center md:justify-items-start '>
                    <div
                        className='w-auto h-auto lg:w-max bg-gradient-to-tr from-slate-800 to-gray-900 rounded-circle shadow-2xl shadow-black'>
                        <img src={anim_profile} className='rounded-circle shadow-2xl shadow-black' />
                    </div>
                    <svg className='rounded-circle relative right-12 top-20' viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><title>Nellie Bly</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" fill="#FFFFFF" rx="72"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#ffad08"></rect><rect x="0" y="0" width="36" height="36" transform="translate(8 8) rotate(118 18 18) scale(1.1)" fill="#1e293b" rx="6"></rect><g transform="translate(4 4) rotate(-8 18 18)"><path d="M13,20 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path><rect x="11" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect><rect x="23" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect></g></g></svg>
                </m.div>
            </div>
            <div className='md:skew-y-12 shadow-inner m-5 md:shadow-lg md:shadow-black md:m-8 flex self-center rounded-lg bg-gradient-to-tr from-slate-800 to-gray-900'>
                <m.div
                    initial={{
                        scale: 0
                    }} transition={{
                        duration: 0.8,
                        type: "tween",
                    }} animate={{
                        scale: 1
                    }}
                    className="">
                    <div className="px-6 py-4">
                        <div className="font-bold text-white text-2xl mb-2">I am Satyam Mishra</div>
                        <p className="text-white text-base">
                            Student of B.Tech Computer Science.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 text-white">
                        <span className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#Web</span>
                        <span className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#Software</span>
                        <span className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#Android</span>
                    </div>
                </m.div>
            </div>
        </div>
    )
}

export default Hero