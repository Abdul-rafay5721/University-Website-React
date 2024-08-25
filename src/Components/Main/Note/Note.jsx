import React from 'react'
import { Link } from 'react-router-dom'
function Note() {
    return (
        <>
            <div className='bg-[#FCF2EB] px-3 py-20 md:p-10 lg:p-28 flex flex-wrap items-center md:flex-nowrap'>
                <div className='w-full md:w-auto'>
                    <img
                        src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/about1.jpg.webp"
                        alt="PrincipleImg"
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:px-20 md:px-10 lg:w-[700px] flex justify-center flex-col '>
                    <h1 className='text-[#32404D] text-2xl py-3 lg:text-4xl font-extrabold mb-5' >A COMPREHENSIVE TEACHING APPROACH</h1>
                    <p className='text-[#7B8182] text-lg mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt malesuada massa.</p>
                    <p className='text-[#7B8182] text-lg mb-5'>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
                    <Link className='text-[#007A5C] items-start text-lg underline underline-offset-8'>
                        Learn More
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Note