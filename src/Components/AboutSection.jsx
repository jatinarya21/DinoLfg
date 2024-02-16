import React from 'react'
import top_section from '../Assets/Images/Webp/AboutSection-bg-top.webp'


const AboutSection = () => {
    return (
        <div className='relative -mt-4'>

            <img className='absolute top-[-5px] md:top-[-15px] h-[90px] md:h-[120px] lg:-top-7 xl:-top-5  w-full' src={top_section} alt="" />
            <section id='about' className='aboutSecton-bg relative'>
                <div className="container z-[1] container-main mx-auto px-4 relative md:pt-[70px] lg:pt-[60px] xl:pt-[80px]">
                    <div data-aos="zoom-in-up" className='flex justify-center gap-2 md:gap-[22px] pt-20 md:pt-12 xl:pt-20 2xl:pt-32 '>
                        <h1 className='text-white ff-chewy font-normal text-3xl md:text-[64px]'>About</h1>
                        <h1 className='ff-lucky text-4xl md:text-[70px]   [text-shadow:0px_2.3px_0px_#fff] '>
                            <span className='text-[#FBA11D]'>D</span>
                            <span className='text-[#23AAAC]'>I</span>
                            <span className='text-[#D45B07]'>N</span>
                            <span className='text-[#8EC627]'>O</span>
                            <span className='text-[#FCCA2B] '>L</span>
                            <span className='text-[#8F78D2]'>F</span>
                            <span className='text-[#8EC627]'>G</span>
                        </h1>
                    </div>
                    <div data-aos="zoom-in-up" className='md:pt-7 xl:pb-12 lg:pt-12 flex flex-col justify-center items-center '>
                        <p className='text-white ff-balsamiq text-base sm:text-lg md:text-2xl font-normal text-center pb-[18px]'>$DINO is a meme coin with very strong utility.</p>
                        <p className='text-white ff-balsamiq text-base sm:text-lg md:text-2xl font-normal text-center pb-[10px] md:w-[80%] lg:w-[65%] xl:w-[50%]'>Biggest problem of meme coins is lack of utility and usecase, <span className='text-[#8EC627]' >$</span>
                            <span className='text-[#FBA11D]' >D</span>
                            <span className='text-[#23AAAC]' >I</span>
                            <span className='text-[#D45B07]' >N</span>
                            <span className='text-[#FB5352]' >O</span> is going to fix it.</p>
                        <p className='text-white ff-balsamiq text-base sm:text-lg md:text-2xl font-normal text-center pb-[14px] md:w-[80%] lg:w-[65%] xl:w-[50%]'>We want to bring a lot of usecases and utility to $DINO holders, just sit back and relax.</p>
                        <p className='text-white ff-balsamiq text-base sm:text-lg md:text-2xl font-normal text-center md:w-[80%] lg:w-[65%] xl:w-[50%]'>In $DINO, we want to build a very strong community, that’s why we are going to have a lot of games and crypto tips in our Telegram and Twitter.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutSection