import React, { useState } from 'react'
import header_logo from '../Assets/Images/Webp/header-logo.webp'
import twitter from '../Assets/Images/Svg/twitter-icon.svg'
import discord from '../Assets/Images/Svg/discord-icon.svg'
import Ig from '../Assets/Images/Svg/ig-icon.svg'
import aeroplane from '../Assets/Images/Webp/hero-section-aeroplane.webp'
import cloud_left from '../Assets/Images/Webp/hero-cloud-left.webp'
import cloud_right from '../Assets/Images/Webp/hero-cloud-right.webp'
import hero_bottom_bg from '../Assets/Images/Webp/hero-bottom-bg.webp'
import cartoon_bike from '../Assets/Images/Webp/hero-cartoon-bike.webp'
import cartoon_cycle from '../Assets/Images/Webp/cartoon-cycle.webp'


const HeroSection = () => {
    const [show, setShow] = useState(false);
    if (show === true) {
        document.body.classList.add("overflow_hidden");
    }
    else {
        document.body.classList.remove("overflow_hidden")
    }
    return (
        <div className='hero-bg  xl:min-h-screen relative 2xl:min-h-0 '>

            <img src={hero_bottom_bg} className='absolute  bottom-0 left-0 right-0 w-[100%] h-[260px] xl:h-[341px]  ' alt="" />
            <img className='absolute bottom-14 md:bottom-[9%] w-[65px] sm:w-[95px] lg:bottom-[9%] 2xl:bottom-[9%] left-[50%] md:w-[105px] lg:w-[121px] xl:w-[131px] xl:h-[165px] 2xl:w-[180px] 2xl:h-[215px]' src={cartoon_bike} alt="" />
            <img className='absolute bottom-[2%] right-3 sm:right-[8%] md:right-[8%] 2xl:bottom-10 w-[75px] sm:w-[105px] md:w-[115px] lg:h-[207px] lg:w-[155px] xl:w-[211px] xl:h-[267px] 2xl:w-[221px] 2xl:h-[285px]' src={cartoon_cycle} alt="" />
            {/* Nav Bar Start */}
            <header>
                <nav className='container container-main  mx-auto px-4 pt-7'>
                    <div className='flex items-center justify-between py-1 rounded-[61px] border-b-4  bg-white border-black'>
                        <a className='ml-6 w-[120px] py-2 md:w-[158px] md:h-[37px] z-[3] ' onClick={() => setShow(!show)} href="#home"><img width={158} height={37} src={header_logo} alt="" /></a>
                        <ul className={`${show ? "left-[0px]" : ""} flex gap-7 flex-col transition-all duration-500 bg-lime-100 min-h-screen w-full fixed z-[2] top-0 left-[-100%] justify-center items-center lg:flex-row lg:bg-inherit lg:min-h-full lg:w-auto  lg:static `}>
                            <li><a onClick={() => setShow(!show)} className='ff-chewy text-lg font-normal text-black' href="#about">About</a></li>
                            <li><a onClick={() => setShow(!show)} className='ff-chewy text-lg font-normal text-black' href="#tokenomics">Tokenomic</a></li>
                            <li><a onClick={() => setShow(!show)} className='ff-chewy text-lg font-normal text-black' href="#roadmap">Roadmap</a></li>
                            <li><a onClick={() => setShow(!show)} className='ff-chewy text-lg font-normal text-black' href="#faq">FAQ</a></li>
                            <button onClick={() => setShow(!show)} className='text-lg ff-chewy w-[138px] h-[54px] text-center pb-2 header-btn mr-2 sm:hidden'>Join Now</button>
                            <div className='flex gap-3 sm:hidden'>
                                <li><a onClick={() => setShow(!show)} href="https://twitter.com/"><img src={twitter} alt="" /></a></li>
                                <li><a onClick={() => setShow(!show)} href="https://discord.com/"><img src={discord} alt="" /></a></li>
                                <li><a onClick={() => setShow(!show)} href="https://instagram.com/"><img src={Ig} alt="" /></a></li>
                            </div>
                        </ul>
                        <div className=' gap-3 items-center hidden mr-2 sm:flex'>
                            <ul className='flex gap-2'>
                                <li><a href="https://twitter.com/"><img className='transition-all duration-300 hover:-translate-y-[7px]' src={twitter} alt="" /></a></li>
                                <li><a href="https://discord.com/"><img className='transition-all duration-300 hover:-translate-y-[7px]' src={discord} alt="" /></a></li>
                                <li><a href="https://instagram.com/"><img className='transition-all duration-300 hover:-translate-y-[7px]' src={Ig} alt="" /></a></li>
                            </ul>
                            <button className='text-lg ff-chewy w-[138px]  h-[54px] hidden sm:block  text-center pb-2 header-btn mr-2 transition-all ease duration-100 active:translate-y-[5px] '>Join Now</button>
                        </div>
                        <button className='lg:hidden z-[2] mr-7 transwqition-all duration-300 ease-in-out' onClick={() => setShow(!show)}> {show ?
                            (
                                <div className="z-20 relative">
                                    <span className="flex bg-[#000] absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                                    <span className="flex bg-[#000] absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
                                </div>
                            ) : (<div className="z-20 relative">
                                <span className="flex bg-[#000] h-[4px] rounded-3xl duration-300 w-6"></span>
                                <span className="flex bg-[#000] h-[4px] rounded-3xl duration-300 w-6 mt-1"></span>
                                <span className="flex bg-[#000] h-[4px] rounded-3xl duration-300 w-6 mt-1"></span>
                            </div>
                            )}</button>
                    </div>

                </nav>
            </header>
            <section id='home' className='relative pt-8 md:pt-0 pb-[240px] md:pb-[220px] lg:pb-[200px] 2xl:pt-[20px] 2xl:pb-[280px] xl:pb-0'>
                <img className='absolute lg:top-9 xl:top-40 left-0' src={cloud_left} alt="" />
                <img className='absolute top-16 right-0' src={cloud_right} alt="" />
                <div className="container container-main mx-auto px-4">
                    <div className="flex relative flex-wrap-reverse  lg:flex-wrap items-center 2xl:justify-center 2xl:items-center  pt-[50px] xl:pt-[83px] 2xl:pt-[30px] ">
                        <div className='w-full lg:w-1/2 flex justify-center xl:justify-start  '>
                            <img className='md:-mt-9  lg:mt-14 w-[201px] md:w-[244px] md:h-[155px] lg:w-[364px] lg:h-[215px] xl:w-[394px] xl:h-[240px] xl:ms-9' src={aeroplane} alt="" />
                        </div>
                        <div className='w-full lg:w-[35%] flex flex-row lg:flex-col items-center justify-center lg:justify-start'>
                            <h1 className='ff-lucky md:text-[105px] text-[82px] lg:text-[124px] xl:text-[175px]   [text-shadow:0px_6px_0px_#000] '>
                                <span className='text-[#FBA11D]'>D</span>
                                <span className='text-[#23AAAC]'>I</span>
                                <span className='text-[#D45B07]'>N</span>
                                <span className='text-[#8EC627]'>O</span>
                            </h1>
                            <h1 className='ff-lucky md:text-[105px] text-[82px] lg:text-[124px] xl:text-[175px] LPG-text lg:-mt-[72px]  xl:-mt-[120px]  [text-shadow:0px_6px_0px_#000]'>
                                <span className='text-[#8EC627] ms-'>L</span>
                                <span className='text-[#FCCA2B]'>F</span>
                                <span className='text-[#8F78D2]'>G</span></h1>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HeroSection