import React from 'react'
import logo from '../Assets/Images/Webp/Footer-logo.webp'
import twitter from '../Assets/Images/Webp/footer-twitter.png'
import discord from '../Assets/Images/Webp/footer-discord.png'
import Ig from '../Assets/Images/Webp/footer-insta.png'
import footer_bg from '../Assets/Images/Webp/footer-bottom-bg.webp'
import dragon_cycle from '../Assets/Images/Webp/utility-dragon-cycle.webp'

const Footer_Section = () => {
    return (
        <div>
            <section className='bg-[#0a4740] relative -mt-1'>
                <img className='absolute bottom-0 w-full h-[201px] md:h-[341px]' src={footer_bg} alt="" />
                <img className='absolute bottom-4 right-[2%] md:right-[3%]  xl:right-24 md:w-[160px] lg:w-[211px] w-[100px]  lg:h-[267px]' src={dragon_cycle} alt="" />
                <div className="container container-main mx-auto px-4 pb-[160px] md:pb-[265px]">
                    <div className="flex flex-col justify-center items-center">
                        <img src={logo} alt="" />
                        <p className='text-white ff-balsamiq text-sm font-normal text-center w-[80%] md:w-[33%] pt-[33px]'>Sed tempus pretium est, vestibulum dapibus mauris viverra id. Curabitur feugiat porta lorem,</p>
                        <div className='flex gap-2 pt-[33px] list-none relative'>
                            <li><a href="https://twitter.com/"><img width={37} height={37} className='transition-all duration-300 hover:-translate-y-[7px]' src={twitter} alt="" /></a></li>
                            <li><a href="https://discord.com/"><img width={37} height={37} className='transition-all duration-300 hover:-translate-y-[7px]' src={discord} alt="" /></a></li>
                            <li><a href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s%7Cc%7C547419127610%7Ce%7Cinstagram%20%27%7C&placement=&creative=547419127610&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D126262414014%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D9050499%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA8NKtBhBtEiwAq5aX2Le7BfO3SLL_XCpMUipwMmNDPjpM6S3dSqI5KfQYy9QEJP1Zar3MOBoCDIgQAvD_BwE"><img width={37} height={37} className='transition-all duration-300 hover:-translate-y-[7px]' src={Ig} alt="" /></a></li>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer_Section