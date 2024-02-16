import React from 'react'
import Accordion from './Accordion'
import top_bg from '../Assets/Images/Webp/FAQ-top-bg.webp'

const FAQ_Section = () => {
    const accordionItems = [
        {
            title: 'Maecenas laoreet, sapien vel cursus ultricies?',
            content: 'Biggest problem of meme coins is lack of utility and usecase, $DINO is going to fix it.',
        },
        {
            title: 'Maecenas laoreet, sapien vel cursus ultricies?',
            content: 'Biggest problem of meme coins is lack of utility and usecase, $DINO is going to fix it.',
        },
        {
            title: 'Maecenas laoreet, sapien vel cursus ultricies?',
            content: 'Biggest problem of meme coins is lack of utility and usecase, $DINO is going to fix it.',
        },
        {
            title: 'Maecenas laoreet, sapien vel cursus ultricies?',
            content: 'Biggest problem of meme coins is lack of utility and usecase, $DINO is going to fix it.',
        },
        {
            title: 'Maecenas laoreet, sapien vel cursus ultricies?',
            content: 'Biggest problem of meme coins is lack of utility and usecase, $DINO is going to fix it.',
        },
    ];
    return (
        <div id='faq' className='bg-[#0a4740] relative'>
            <img className='absolute -top-5 2xl:-top-8 w-full' src={top_bg} alt="" />
            <div className='container container-main mx-auto px-4 relative pb-[100px] xl:pb-[180px] pt-[80px] md:pt-[150px] xl:pt-[250px]'>
                <h1 className="text-center text-white text-[64px] font-normal ff-chewy pt-[20px] pb-[61px] 2xl:pt-[75px]">FAQs</h1>
                <Accordion items={accordionItems} />
            </div>
        </div>
    )
}

export default FAQ_Section