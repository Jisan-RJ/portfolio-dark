import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <section className='py-[130px] bg-[#FFF8F3] dark:bg-[#131419]'>
        <div className='lg:max-w-container md:max-w-container max-w-container mx-auto'>
            <div className='flex justify-between'>
                <div className='md:w-[45%] lg:w-[45%]'>
                    <h3 className='font-open font-bold text-[35px] dark:text-[#FD6E0A]'>Lets Connect</h3>
                    <p className='font-open font-normal text-[16px] pb-[30px] text-[#474747]'>Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.</p>
                    <ul className='flex gap-[15px]'>
                        <li><a className='text-[27px] text-[#FD6E0A]'><FaFacebook /></a></li>
                        <li><a className='text-[27px] text-[#FD6E0A]'><FaTwitter /></a></li>
                        <li><a className='text-[27px] text-[#FD6E0A]'><AiFillInstagram /></a></li>
                    </ul>
                </div>
                <div className='md:w-[45%] lg:w-[45%]'>
                    <div className='flex flex-col gap-[24px]'>
                    <h3 className='dark:text-[#FD6E0A] font-open font-bold text-[35px] pb-[28px]'>Let's Message Me</h3>
                    <input className='md:w-[361px] lg:w-[461px] h-[64px] shadow-2xl dark:shadow-4xl dark:bg-[transparent] dark:border dark:border-dashed dark:border-[#FD6E0A] dark:text-[#FD6E0A] dark:outline-[#FD6E0A] outline-[#FD6E0A] pl-[30px]' placeholder='Your Name'></input>
                    <input className='md:w-[361px] lg:w-[461px] h-[64px] shadow-2xl dark:shadow-4xl dark:bg-[transparent] dark:border dark:border-dashed dark:border-[#FD6E0A] dark:text-[#FD6E0A] dark:outline-[#FD6E0A] outline-[#FD6E0A] pl-[30px]' placeholder='Your Email'></input>
                    <textarea className='md:w-[361px] lg:w-[461px] shadow-2xl dark:shadow-4xl dark:bg-[transparent] dark:border dark:border-dashed dark:border-[#FD6E0A] dark:text-[#FD6E0A] dark:outline-[#FD6E0A] outline-[#FD6E0A] h-[180px] pl-[30px] pt-[22px]' placeholder='Message'></textarea>
                    <div className='w-[200px] mt-[24px]'>
                    <a className='font-open dark:shadow-4xl dark:bg-[transparent] relative z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:w-[55%] after:h-full after:z-[-1] after:rounded-[5px] after:bg-[#FD6E0A] font-bold text-[20px] px-[34px] py-[18.5px] bg-[#FD6E0A] rounded-[5px] text-white after:ease-linear after:duration-700 dark:hover:after:w-[100%]'>Submit</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer