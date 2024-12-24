import React from 'react'
import ban from "../assets/ban.png"
const Banner = () => {
    
  return (
   <div className="">
     <section className=' relative dark:bg-[#131419] py-[300px] bg-[#FFF8F3]'>
        <div className='md:max-w-container lg:max-w-container max-w-container mx-auto'>
            <h4 className='font-open font-semibold text-[45px] dark:text-[orange]'>Hi, I  am</h4>
            <h1 className='font-open dark:text-[#FD6E0A] font-bold text-[85px]'>Mary Hardy</h1>
            <p className='w-[585px] font-open font-regular text-[#757575] text-[18px] pt-[20px] pb-[30px]'>Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
            <div className='w-[395px] flex justify-between'>
                <a className='font-open dark:shadow-4xl dark:bg-[transparent] relative z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:w-[55%] after:h-full after:z-[-1] after:rounded-[5px]  after:bg-[#FD6E0A] font-bold text-[20px] px-[34px] py-[18.5px] bg-[#FD6E0A] rounded-[5px] text-white after:ease-linear after:duration-700 dark:hover:after:w-[100%]'>Download CV</a>
                <a className=' text-[#FD6E0A]  dark:shadow-4xl dark:border-none font-open font-bold text-[20px] py-[18.5px] px-[40.5px] border border-[#FD6E0A] rounded-[5px]'>Contact</a>
            </div>
        </div>
        <div className='absolute top-[150px] right-0'>
            <img className='w-full h-full' src={ban}></img>
        </div>
        
    </section>
   </div>
  )
}

export default Banner