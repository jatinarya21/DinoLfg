// Accordion.js
import React, { useState } from 'react';
import arrow from '../Assets/Images/Svg/Accordion_arrow.svg'

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-[801px] mx-auto">
            {items.map((item, index) => (
                <div key={index} className="mb-[26px]">
                    <div
                        className={` cursor-pointer flex justify-between items-center pr-[52px] pt-[25px] pb-[26px] pl-[45px]  text-white ff-balsamiq text-base md:text-xl font-bold   ${activeIndex === index ? 'bg-[#09655A] border rounded-t-[40px] border-b-0' : 'bg-[#09655A] rounded-[40px] border mb-2'
                            }`}
                        onClick={() => handleItemClick(index)}
                    >
                        <span>{item.title}</span>
                        <img src={ arrow} className={`w-5 h-5 transition-all duration-300 ${activeIndex === index ? 'transform rotate-180' : ''
                            }`} alt="" />
                    </div>
                    {activeIndex === index && (
                        <div className="pt-[30px] pb-[27px] pl-[40px] bg-[#09655A] text-white ff-balsamiq border rounded-b-[40px] pr-8 ">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
