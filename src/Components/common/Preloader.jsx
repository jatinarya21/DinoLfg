import React, { useState, useEffect } from 'react'

const Preloader = () => {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000);
        if (loader) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [loader]);
    return (
        <div> <section
            className={` ${loader ? "" : "hidden"}`}
            id="preloader"
        >
            <div className="none">
                <div className=" text-center flex-col bg-[#0A4740] flex items-center justify-center start-0 top-0 bottom-0 w-full z-[5] min-h-screen fixed">
                    <div class="wrapper">
                        <svg className='preloader-svg'>
                            <text x="50%" y="50%" dy=".35em" className='text-[100px] md:text-[150px]' text-anchor="middle">
                               DinoLFG
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default Preloader