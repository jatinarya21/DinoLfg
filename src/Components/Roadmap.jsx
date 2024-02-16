import React from 'react'
import aeroplane from '../Assets/Images/Webp/roadmap-aeroplane.webp'
import roadmap_line from '../Assets/Images/Webp/roadmap-line.webp'
import bush_tree from '../Assets/Images/Webp/utility-tree.webp'
import tree_dragon from '../Assets/Images/Webp/roadmap-tree-dragon.webp'
import bush from '../Assets/Images/Webp/tokenomic-bottom-bush.webp'
import roadmap_top_bg from '../Assets/Images/Webp/roadmap-top-bg.webp'

const Roadmap = () => {
    return (
        <div id='roadmap' className='relative'>
            <img className='w-full absolute top-[-60px] md:top-[-150px] lg:top-[-200px] xl:-top-[250px] left-0 '  src={roadmap_top_bg} alt="" />
            <section className='bg-[#09655A] pb-[150px] md:pb-[500px] lg:pb-[750px]'>
                <div className="container container-main mx-auto px-4 relative pt-[26px]">

                    <h1 data-aos="zoom-in" className='text-white text-center ff-chewy text-[64px] font-normal  2xl:pt-[32px]'>Roadmap</h1>

                    <div className='roadmap relative mt-20'>
                        <div className='before:absolute before:top-2 before:bottom-0 before:w-0.5 before:left-2 before:dark:bg-white md:before:static'>

                            <img className='absolute top-[17%] hidden md:block  xl:left-[10%]' src={roadmap_line} alt="" />

                            {/* Roadmap content box 1 */}
                            <div data-aos="fade-right" className=' flex items-center gap-16  xl:gap-24 relative  before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-0 before:z-[1] before:dark:bg-violet-400 md:before:static md:before:w-0  '>
                                <div>
                                    <p className='text-[#FBA11D] ff-chewy ms-9 -mt-[90px] md:-mt-0 text-[80px] sm:text-[120px] md:text-[200px] [text-shadow:0px_18.4px_18.4px_#00000040]'>01</p>
                                </div>
                                <ul className='relative z-[1]'>
                                    <li className='text-white pb-4 w-[80%] text-base sm:text-xl ff-balsamiq font-normal list-disc'>Launch $DINO & Website & Social Media.</li>
                                    <li className='text-white pb-4 text-base sm:text-xl ff-balsamiq font-normal list-disc'>Building the community.</li>
                                    <li className='text-white  text-base sm:text-xl ff-balsamiq font-normal list-disc'>Marketing Phase 1.</li>
                                </ul>
                                    <img className='absolute right-[1%] lg:right-9 top-[35px] md:top-[115px] w-[120px] md:w-[220px] lg:w-[326px] lg:h-[203px] lg:top-14  xl:w-[326px] xl:h-[203px]' src={aeroplane} alt="" />
                            </div>
                            {/* Roadmap content box 2 */}
                            <div data-aos="fade-left" className='flex items-center gap-12 md:gap-16 xl:gap-24 relative  md:left-[15%] top-[50px] md:top-[220px] xl:left-[19%] lg:top-[300px] md:w-[75%] lg:w-[65%] xl:w-[80%] before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-0 before:z-[1] before:dark:bg-violet-400 md:before:static md:before:w-0'>

                                <img className='absolute left-[79%]  md:-left-[24%] xl:-left-[20%] -top-10 md:top-2 xl:-top-8 w-[90px] md:w-[120px] xl:w-[213px] xl:h-[307px]' src={bush_tree} alt="" />

                                <div>
                                    <p className='text-[#8EC627] -mt-[90px] md:-mt-0 ff-chewy text-[80px] sm:text-[120px] ms-7 md:ms-0 md:text-[200px] [text-shadow:0px_18.4px_18.4px_#00000040]'>02</p>
                                </div>
                                <ul className='relative'>
                                    <li className='text-white pb-4 text-base sm:text-xl ff-balsamiq font-normal list-disc'>CoinGecko & Coinmarketcap listing.</li>
                                    <li className='text-white pb-4 text-base sm:text-xl ff-balsamiq font-normal list-disc'>Introduction to Buyback & Burning mechanism</li>
                                    <li className='text-white  text-base sm:text-xl ff-balsamiq font-normal list-disc'>Marketing Phase 2.</li>
                                </ul>
                            </div>
                            {/* Roadmap content box 3 */}
                            <div data-aos="fade-right" className='flex items-center gap-12 md:gap-16 xl:gap-24 relative top-[80px] md:top-[300px] lg:top-[450px] before:absolute before:top-1 before:w-4 before:h-4 before:rounded-full before:left-0 before:z-[1] before:dark:bg-violet-400 md:before:static md:before:w-0'>
                                <img className='absolute -right-3 -top-10 md:-right-[50px] lg:right-[6%]  md:-top-10 w-[120px] md:w-[150px] lg:w-[213px] lg:h-[307px]' src={tree_dragon} alt="" />
                                <div>
                                    <p className='text-[#D45B07] -mt-[90px] md:-mt-0 ff-chewy ms-7 md:ms-0 text-[80px] sm:text-[120px] md:text-[200px] [text-shadow:0px_18.4px_18.4px_#00000040]'>03</p>
                                </div>
                                <ul className='relative'>
                                    <li className='text-white pb-4 text-base sm:text-xl ff-balsamiq font-normal list-disc'>Utility and Usecase Introduction.</li>
                                    <li className='text-white pb-4 text-base sm:text-xl ff-balsamiq font-normal list-disc'>CEX Listings</li>
                                    <li className='text-white  text-base sm:text-xl ff-balsamiq font-normal list-disc'>Marketing Phase 3.</li>
                                </ul>
                            </div>
                            {/* Roadmap content box 4 */}
                            <div data-aos="fade-left" className='flex items-center gap-12 md:gap-16 xl:gap-24 relative md:left-[25%] xl:left-[28%] top-[110px] md:top-[360px] lg:top-[600px] w-[90%] sm:w-[70%] before:absolute before:-top-3 before:w-4 before:h-4 before:rounded-full before:left-0 before:z-[1] before:dark:bg-violet-400 md:before:static md:before:w-0'>
                                <img className='absolute left-[98%] md:-bottom-14 md:-left-16 w-[80px] md:w-[175px] md:h-[107px]' src={bush} alt="" />
                                <div>
                                    <p className='text-[#23AAAC] -mt-[90px] md:-mt-0 ff-chewy  ms-7 md:ms-0 text-[80px] sm:text-[120px] md:text-[200px] [text-shadow:0px_18.4px_18.4px_#00000040]'>04</p>
                                </div>
                                <ul className='relative'>
                                    <li className='text-white   pb-4 text-base sm:text-xl ff-balsamiq font-normal list-disc'>Staking Introduction.</li>
                                    <li className='text-white pb-4 text-base sm:text-xl whitespace-nowrap ff-balsamiq font-normal list-disc'>DINO NFT Collection.</li>
                                    <li className='text-white  text-base sm:text-xl ff-balsamiq font-normal list-disc'>Marketing Phase 4.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Roadmap