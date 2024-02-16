import React from 'react'
import tokenomic_top from '../Assets/Images/Webp/tokenomic-top.webp'
import about_left_tree from '../Assets/Images/Webp/about-left-tree.webp'
import about_right_tree from '../Assets/Images/Webp/about-right-tree.webp'
import about_cartoon from '../Assets/Images/Webp/about-cartoon.webp'
import right_bg from '../Assets/Images/Webp/tokenomic-right-bg.webp'
import main_img from '../Assets/Images/Webp/tokenomic-img.webp'
import tokenomic_bottom from '../Assets/Images/Webp/tokenomic-bottom-bg.webp'
import tokenomic_left_tree from '../Assets/Images/Webp/tokenomics-left-tree.webp'
import dragon from '../Assets/Images/Webp/tokenomic_dargon.webp'
import tokenomic_bottom_mud from '../Assets/Images/Webp/tokenomic-bottom-mud.webp'
import tokenomic_bottom_bush from '../Assets/Images/Webp/tokenomic-bottom-bush.webp'
import tokenomic_bottom_tree from '../Assets/Images/Webp/tokenomics-small-tree1.webp'
import tokenomic_bottom_tree_bush from '../Assets/Images/Webp/tokenomic-bottom-tree-bush.webp'

const TokenomicsSection = () => {
  return (
    <div id='tokenomics' className='relative  bg-[#0a4740]'>

      <img src={tokenomic_top} className='w-full absolute top-0 left-0 right-0 2xl:-top-2' alt="" />
      <img className='absolute top-[-130px] md:top-[-180px] lg:-top-[270px] xl:-top-[250px] left-0 w-[87px] md:w-[117px] lg:h-[371px] xl:w-[297px] xl:h-[421px]' src={about_left_tree} alt="" />
      <img className='absolute top-[-190px] md:top-[-250px] lg:-top-[320px] xl:-top-[450px] right-0 w-[97px] md:w-[150px] lg:w-[257px] lg:h-[376px] xl:w-[352px] xl:h-[446px]' src={about_right_tree} alt="" />
      <img className='absolute top-[-20px] lg:-top-[55px] md:top-[-70px] xl:-top-[100px] right-0 w-[83px] md:w-[103px] lg:w-[135px] lg:h-[135px] xl:w-[170px] xl:h-[205px]' src={about_cartoon} alt="" />

      <section className='relative'>
        <img className='absolute bottom-[6%] w-[80px] md:w-[120px] lg:w-[180px] lg:h-[197px] xl:w-[207px] xl:h-[270px] left-[79%] z-[1]' src={tokenomic_bottom_tree_bush} alt="" />

        <img className='absolute bottom-[4%] w-[50px] md:w-[60px] lg:w-[67px] xl:w-[87px] xl:h-[115px] left-[57%] z-[1]' src={tokenomic_bottom_tree} alt="" />

        <img className='absolute bottom-[7%] w-[50px] md:w-[60px] lg:w-[67px] xl:w-[87px] xl:h-[115px] left-[32%] z-[1]' src={tokenomic_bottom_tree} alt="" />

        <img className='absolute bottom-2 w-[30px] md:w-[60px] md:bottom-5 lg:bottom-12 left-[20%]  z-[1]' src={tokenomic_bottom_bush} alt="" />

        <img className='absolute md:bottom-0 w-[150px] h-[50px] md:w-[200px] md:h-[70px] lg:-bottom-0 lg:h-[100px] lg:w-[300px] left-0 z-[1]' src={tokenomic_bottom_mud} alt="" />

        <img className='absolute z-[1] w-[70px] md:w-[90px] lg:w-[140px] xl:w-[211px] xl:h-[193px] bottom-3 sm:bottom-10 left-0 2xl:bottom-[90px]' src={dragon} alt="" />

        <img className='absolute left-0 bottom-8 sm:bottom-16 w-[80px] md:w-[100px] lg:w-[180px] xl:w-[352px] xl:h-[446px] 2xl:bottom-[180px]' src={tokenomic_left_tree} alt="" />

        <img src={right_bg} className='absolute md:w-[300px] lg:w-[350px] xl:w-[450px] right-0 top-0 md:top-[70px] lg:top-[100px] xl:top-[140px]' alt="" />

        <img className='absolute bottom-0 w-full' src={tokenomic_bottom} alt="" />

        <div className="container mx-auto px-4 relative pb-[100px] pt-[60px] md:pb-[150px] md:pt-[100px] lg:py-[180px] xl:pb-[350px] xl:pt-[270px]">
          <div data-aos="zoom-in-up" className="flex flex-col justify-center">
            <h1 className='text-white text-center text-3xl md:text-[64px] ff-chewy font-normal '>Tokenomics</h1>
            <div className='relative mt-20 md:mt-32 flex flex-col justify-center items-center'>
              <img className=' w-[380px] md:w-[680px] lg:w-[890px] xl:w-[1123px] xl:h-[410px]' src={main_img} alt="" />
              <img className='absolute w-[60px] md:w-[103px] lg:w-[113px] xl:w-[133px] xl:h-[157px] mt-[-150px] md:-top-[-90px] left-[40%] md:left-[43%] lg:left-[43%] xl:left-[44%] ' src={about_cartoon} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TokenomicsSection