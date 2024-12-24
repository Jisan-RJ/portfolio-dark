import React from 'react'
import logo from "../assets/logo.png"
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiUbisoftSun } from "react-icons/gi";
import "./script.js"
import "./header.css"

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`${darkMode && "dark"}`}>
        <section className='fixed top-0 left-0 w-full z-[1] dark:bg-[#131419]  bg-[#FFF8F3] nav'>
        <div className='max-w-container mx-auto'>
            <div className='flex justify-between h-[100px]  items-center'>
                <div className='w-[30%]'>
                    <a className=''>
                        <img className='dark:shadow-4xl' src={logo}></img>
                    </a>
                </div>
                <div className='w-[40%]'>
                    <ul className='flex gap-[67px]'>
                        <li><a className='font-open dark:text-white font-light text-[20px]'>Portfolio</a></li>
                        <li><a className='font-open font-normal dark:text-white text-[20px]'>Blog</a></li>
                        <li><a className=' dark:shadow-4xl dark:bg-[transparent] relative z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:w-[55%] after:h-full after:z-[-1] after:rounded-[5px] after:bg-[#FD6E0A] font-open py-[18px] px-[36px] text-[20px] text-white rounded-[5px] bg-[#FD6E0A] after:ease-linear after:duration-700 dark:hover:after:w-[100%]'>Hire Me</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <button className='fixed w-16 h-16 text-center mx-auto text-[50px]  left-16 top-[200px] z-[1]  rounded-full text-black dark:text-white' onClick={toggleDarkMode}>
        {darkMode ? <GiUbisoftSun />
            : <BsFillMoonStarsFill  />}
        </button>
    </section>
    </div>
  )
}

export default Header