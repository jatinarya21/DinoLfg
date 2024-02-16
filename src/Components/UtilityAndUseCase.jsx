import React from 'react'
import top_bg from '../Assets/Images/Webp/utility-top-bg.webp'
import dragon_cycle from '../Assets/Images/Webp/utility-dragon-cycle.webp'
import dragon_bike from '../Assets/Images/Webp/hero-cartoon-bike.webp'
import utility_tree from '../Assets/Images/Webp/utility-tree.webp'

const UtilityAndUseCase = () => {
    return (
        <div className='relative bg-[#0a4740] pb-[150px] md:pb-[250px] lg:pb-[300px] xl:pb-[400px] md:pt-0 xl:pt-[120px]'>
            <img className='absolute top-0 w-full' src={top_bg} alt="" />
            <section className='relative '>
                <img className='absolute right-0 bottom-0' src={utility_tree} alt="" />
                <div className="container container-main px-4 mx-auto relative">
                    <div className="flex flex-col justify-center items-center">
                        <h1 data-aos="zoom-in-up" className='pt-20 md:pt-32 lg:pt-40 xl:pt-32 text-white ff-chewy text-4xl md:text-[64px] font-normal  '>Utility and Usecase</h1>
                        <div data-aos="fade-right" className=' mt-40 max-w-[1014px] relative rounded-[20px] border bg-[#09655A] pl-[39px] py-[62px]'>
                            <p className='text-white text-xl lg:text-[32px]  lg:leading-[38px] font-normal ff-balsamiq md:w-[63%] lg:w-[72%]'>We are going to work hard in otder to add <span className='text-[#8EC627]' >$</span>
                                <span className='text-[#FBA11D]' >D</span>
                                <span className='text-[#23AAAC]' >I</span>
                                <span className='text-[#D45B07]' >N</span>
                                <span className='text-[#FB5352]' >O</span> to main platforms as a form of payment</p>
                            <p className='text-white text-xl lg:text-[32px] lg:leading-[38px] font-normal ff-balsamiq pt-7'>You will be able to buy a lot of things with <span className='text-[#8EC627]' >$</span>
                                <span className='text-[#FBA11D]' >D</span>
                                <span className='text-[#23AAAC]' >I</span>
                                <span className='text-[#D45B07]' >N</span>
                                <span className='text-[#FB5352]' >O</span></p>
                            <img className='absolute right-8 top-[-130px] w-[140px] md:top-[-5px] lg:top-[-19px] xl:top-[-56px] md:w-[190px] lg:w-[225px] xl:w-[255px]  xl:h-[323px] ' src={dragon_cycle} alt="" />
                        </div>
                        <div data-aos="fade-left" className=' mt-[105px] md:w-[736px] lg:w-[992px] xl:w-[1014px] relative rounded-[20px] border bg-[#09655A] pr-[27px] py-[95px]'>
                            <p className='text-end text-white float-right text-xl lg:text-[32px] lg:leading-[38px] font-normal ff-balsamiq w-[64%] lg:w-[74%]'>We are going to have stakingand buyback/ burning mechanism</p>
                
                            <img className='absolute -left-2 top-16  md:top-0 lg:top-[-67px] w-[124px] md:w-[197px] xl:w-[267px] md: xl:h-[334px] ' src={dragon_bike} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UtilityAndUseCase