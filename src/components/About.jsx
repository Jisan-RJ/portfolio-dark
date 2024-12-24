import React from 'react'

const About = () => {
        
  return (
    <div className="">
        <section className='relative py-[130px] dark:bg-[#131419]'>
        <div className='lg:max-w-container md:max-w-container max-w-container mx-auto'>
            <div className='bg-[#FFF8F3] rounded-[40px] hover:rounded-[150px] ease-linear duration-700 dark:bg-[transparent] dark:border dark:border-[#FD6E0A] dark:border-dashed py-[131px] md:px-[136.5px] px-[156.5px] dark:shadow-4xl'>
                <h3 className='text-center font-open font-bold text-[35px] dark:text-[#FD6E0A]'>About Me</h3>
                <p className='lg:text-center md:text-center md:text-[15px] font-open font-normal text-[#757575] lg:text-[18px] py-[30px]'>I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me. Delivering work within time and budget which meets clients requirements in our mata.</p>
                <div className='flex justify-between md:gap-[15px]'>
                    <div className='dark:shadow-4xl md:px-[20px] md:py-[10px] lg:px-[21px] lg:py-[10px]'>
                        <h5 className='lg:text-center font-open font-normal md:text-[17px] lg:text-[20px] text-[#757575]'>Name:</h5>
                        <a className='lg:text-center font-open font-bold md:text-center md:text-[9px] lg:text-[18px] dark:text-[#FD6E0A]'>Mary Hardy</a>
                    </div>
                    <div className='dark:shadow-4xl md:px-[20px] lg:px-[10px] lg:py-[10px]'>
                        <h5 className='lg:text-center font-open font-normal md:text-[17px] lg:text-[20px] text-[#757575]'>Email:</h5>
                        <a className='lg:text-center font-open font-bold md:text-center md:text-[9px] lg:text-[18px] dark:text-[#FD6E0A]'>info@gmail.com</a>
                    </div>
                    <div className='dark:shadow-4xl md:px-[20px] lg:px-[10px] lg:py-[10px]'>
                        <h5 className='lg:text-center font-open font-normal md:text-[15px] lg:text-[20px] text-[#757575]'>Date of birth</h5>
                        <a className='lg:text-center font-open font-bold md:text-center md:text-[9px] lg:text-[18px] dark:text-[#FD6E0A]'>11 November 1987</a>
                    </div>
                    <div className='dark:shadow-4xl md:px-[20px] lg:px-[10px] lg:py-[10px]'>
                        <h5 className='lg:text-center font-open font-normal md:text-[17px] lg:text-[20px] text-[#757575]'>From</h5>
                        <a className='lg:text-center font-open font-bold md:text-center md:text-[9px] lg:text-[18px] dark:text-[#FD6E0A]'>Los Angeles, USA</a>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    </div>
  )
}

export default About