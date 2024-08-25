import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

function Resources() {
    return (
        <>
            <div className='flex flex-wrap md:flex-nowrap'>
                <div className='px-5 py-8 lg:px-16 lg:py-20 w-full md:w-[50%] bg-[#F2FBF9]'>
                    <div className='mb-5'>
                        <h1 className='md:text-4xl text-2xl mb-7 font-extrabold text-[#32404D]'>ESSENTIAL RESOURCES</h1>
                        <p className='text-[#777777] text-xl'>
                            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere.
                        </p>
                    </div>
                    <div>
                        <div className="p-6 mb-4 bg-transparent border border-gray-200 flex justify-between items-center group hover:bg-[#DFF1EC]">
                            <div className='w-[70%]'>
                                <h3 className="text-lg font-extrabold text-gray-800 group-hover:text-[#007A5C]">First year students</h3>
                                <p className="text-gray-600">
                                    Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.
                                </p>
                            </div>
                            <div className="flex items-center justify-center w-16 h-16 border-2 border-[#007A5C] rounded-full text-[#007A5C] group-hover:bg-[#007A5C]">
                                <FaAngleRight className='text-xl group-hover:text-white' />
                            </div>
                        </div>
                        <div className="p-6 mb-4 bg-transparent border border-gray-200 flex justify-between items-center group hover:bg-[#DFF1EC]">
                            <div className='w-[70%]'>
                                <h3 className="text-lg font-extrabold text-gray-800 group-hover:text-[#007A5C]">First year students</h3>
                                <p className="text-gray-600">
                                    Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.
                                </p>
                            </div>
                            <div className="flex items-center justify-center w-16 h-16 border-2 border-[#007A5C] rounded-full text-[#007A5C] group-hover:bg-[#007A5C]">
                                <FaAngleRight className='text-xl group-hover:text-white' />
                            </div>
                        </div>
                        <div className="p-6 mb-4 bg-transparent border border-gray-200 flex justify-between items-center group hover:bg-[#DFF1EC]">
                            <div className='w-[70%]'>
                                <h3 className="text-lg font-extrabold text-gray-800 group-hover:text-[#007A5C]">First year students</h3>
                                <p className="text-gray-600">
                                    Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.
                                </p>
                            </div>
                            <div className="flex items-center justify-center w-16 h-16 border-2 border-[#007A5C] rounded-full text-[#007A5C] group-hover:bg-[#007A5C]">
                                <FaAngleRight className='text-xl group-hover:text-white' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-[50%]'>
                    <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/visit1.jpg" alt="img" />
                </div>
            </div>

        </>

    )
}

export default Resources