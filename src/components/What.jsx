import React from 'react'
import vanila from "../assets/vanila.png"
import node from "../assets/node.png"
import mongo from "../assets/mongo.png"
const What = () => {
  return (
    <section className='dark:bg-[#131419] py-[135px]'>
        <div className='lg:max-w-container md:max-w-container max-w-container mx-auto'>
            <h3 className='text-center font-open font-bold text-[35px] dark:text-[#FD6E0A]'>What I do</h3>
            <p className='font-open font-normal text-[#757575] text-[18px] text-center w-[909px] mx-auto pt-[30px] pb-[50px]'>I have more than 10 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies i use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
            <div className='flex justify-between md:gap-[20px] lg:gap-[24px]'>
                <div className='md:flex md:flex-col  lg:flex lg:flex-row lg:gap-[24px] md:gap-[30px]'>
                <div className='md:w-full md:flex lg:gap-[20px] md:justify-between'>
                <div className=' md:w-[45%] lg:w-[240px] shadow-2xl dark:shadow-4xl px-[30px] py-[30px] text-center hover:translate-x-[-50px] ease-linear duration-700'>
                    <img className='mx-auto' src={vanila}></img>
                    <h4 className='font-open font-bold text-[20px] pb-[20px] dark:text-[#FD6E0A] pt-[30px]'>Vanilla JavaScript</h4>
                    <p className='font-open font-normal text-[#757575] md:text-[14px] text-[16px]'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>


                <div className= ' md:w-[45%] lg:w-[240px] shadow-2xl dark:shadow-4xl px-[30px] py-[30px] text-center hover:translate-y-[50px] ease-linear duration-700'>
                <img className='mx-auto' src={mongo}></img>
                <h4 className='font-open font-bold text-[20px] pb-[20px] dark:text-[#FD6E0A] pt-[30px]'>React</h4>
                <p className='font-open md:text-[14px] font-normal text-[#757575] text-[16px]'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
                </div>


                <div className='md:w-full md:flex lg:justify-between lg:gap-[20px] md:justify-between'>
                <div className=' md:w-[45%] lg:w-[240px] shadow-2xl dark:shadow-4xl px-[30px] py-[30px] text-center hover:translate-y-[-50px] ease-linear duration-700'>
                <img className='mx-auto' src={node}></img>
                <h4 className='font-open font-bold text-[20px] pb-[20px] dark:text-[#FD6E0A] pt-[30px]'>Node.js</h4>
                <p className='font-open md:text-[14px] font-normal text-[#757575] text-[16px]'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>


                <div className='md:w-[45%] lg:w-[240px] shadow-2xl dark:shadow-4xl px-[30px] py-[30px] text-center hover:translate-x-[50px] ease-linear duration-700'>
                <img className='mx-auto' src={mongo}></img>
                <h4 className='font-open font-bold text-[20px] pb-[20px] dark:text-[#FD6E0A] pt-[30px]'>MongoDB</h4>
                <p className='font-open md:text-[14px] font-normal text-[#757575] text-[16px]'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
                </div>

                </div>

            </div>
        </div>
    </section>
  )
}

export default What