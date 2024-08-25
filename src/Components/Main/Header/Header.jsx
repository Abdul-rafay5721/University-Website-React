import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";



function Header() {


    const [toggle, setToggle] = useState(false);
    const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

    const toggleBlogDropdown = () => {
        setIsBlogDropdownOpen(!isBlogDropdownOpen);
    };

    const [time, setTime] = useState({
        days: 30,
        hours: 8,
        minutes: 30,
        seconds: 5,
      });
    
      useEffect(() => {
        // Update the timer every second
        const interval = setInterval(() => {
          setTime(prevTime => {
            let { days, hours, minutes, seconds } = prevTime;
    
            // Decrease the seconds
            if (seconds > 0) {
              seconds -= 1;
            } else {
              seconds = 59;
              if (minutes > 0) {
                minutes -= 1;
              } else {
                minutes = 59;
                if (hours > 0) {
                  hours -= 1;
                } else {
                  hours = 23;
                  if (days > 0) {
                    days -= 1;
                  } else {
                    // Clear the interval if the timer reaches zero
                    clearInterval(interval);
                  }
                }
              }
            }
    
            return { days, hours, minutes, seconds };
          });
        }, 1000);
    
        // Clean up interval on component unmount
        return () => clearInterval(interval);
      }, []);

    return (
        <>
            <div id='top' className="flex flex-wrap items-center justify-center space-x-20 bg-[#32404D] text-white p-2">
      <div className="flex items-center space-x-2 min-w-0 text-base md:text-xl">
        <span className="text-[#00B78A]">ENDS TOMORROW:</span>
        <span>Join Teachable for $4,800 in bonus content</span>
      </div>
      <div className="flex items-center justify-center space-x-2 mt-2 sm:mt-0">
        <div className="text-[#00B78A] text-center">
          <div className="text-lg sm:text-xl">{String(time.days).padStart(2, '0')}</div>
          <div className="text-xs sm:text-sm">Days</div>
        </div>
        <div className="text-[#00B78A] text-center">
          <div className="text-lg sm:text-xl">{String(time.hours).padStart(2, '0')}</div>
          <div className="text-xs sm:text-sm">Hrs</div>
        </div>
        <div className="text-[#00B78A] text-center">
          <div className="text-lg sm:text-xl">{String(time.minutes).padStart(2, '0')}</div>
          <div className="text-xs sm:text-sm">Mins</div>
        </div>
        <div className="text-[#00B78A] text-center">
          <div className="text-lg sm:text-xl">{String(time.seconds).padStart(2, '0')}</div>
          <div className="text-xs sm:text-sm">Secs</div>
        </div>
        <Link to='/' className="underline underline-offset-8 hidden md:block text-sm sm:text-base">
          Learn More
        </Link>
      </div>
    </div>

            <nav className=' p-2 sm:p-6 sticky top-0 z-30 bg-white'>
                <div className='bg-white flex justify-around flex-wrap w-full'>
                    <div className='flex justify-center items-center '>
                        <Link className='lg:mx-4 md:mx-3 sm:mx-1' to="/">
                            <img
                                className='w-full h-full'
                                src="https://preview.colorlib.com/theme/universityedu/assets/img/logo/logo.png.webp"
                                alt="Logo"
                            />
                        </Link>
                        <div className='hidden md:block'>
                            <ul className='flex'>
                                <li>
                                    <NavLink
                                        to="/"
                                        className='text-[#32404D] text-lg hover:text-[#00B78A] px-4'
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className='text-[#32404D] text-lg hover:text-[#00B78A] px-4'
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/programs"
                                        className='text-[#32404D] text-lg hover:text-[#00B78A] px-4'
                                    >
                                        Programs
                                    </NavLink>
                                </li>
                                <li className='relative group'>
                                    <NavLink
                                        to="/blog"
                                        className='text-[#32404D] text-lg hover:text-[#00B78A] px-4'
                                    >
                                        Blog
                                    </NavLink>
                                    <ul className='absolute left-0 top-full py-7 px-3 w-40 hidden bg-white shadow-lg group-hover:block'>
                                        <li>
                                            <NavLink
                                                to="/blog"
                                                className='text-[#32404D] text-lg hover:text-[#00B78A] px-4 block mb-4'
                                            >
                                                Blog
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/blog-details"
                                                className='text-[#32404D] text-lg hover:text-[#00B78A] px-4 block mb-4'
                                            >
                                                Blog Details
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/elements"
                                                className='text-[#32404D] text-lg hover:text-[#00B78A] px-4 block'
                                            >
                                                Elements
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className='text-[#32404D] text-lg hover:text-[#00B78A] px-4'
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* Resposive menu for mobile */}
                        <div className={`md:hidden duration-300 -z-20 block fixed left-0 w-full 
                    ${toggle ? 'top-[180px]' : 'top-[-300px]'} 
                `}>
                            <ul className='bg-white'>
                                <li className='p-3'>
                                    <NavLink
                                        to="/"
                                        className='text-[#32404D] text-lg hover:text-[#00B78A] px-4'
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className='p-3'>
                                    <NavLink
                                        to="/about"
                                        className='text-[#32404D] text-lg hover:text-[#00B78A] px-4'
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className='p-3'>
                                    <NavLink
                                        to="/programs"
                                        className='text-[#32404D] text-lg hover:text-[#00B78A] px-4'
                                    >
                                        Programs
                                    </NavLink>
                                </li>
                                <li className='p-3 relative'>
                                    <div className='flex items-center justify-between cursor-pointer' onClick={toggleBlogDropdown}>
                                        <NavLink
                                            to="/blog"
                                            className='text-[#32404D] text-lg hover:text-[#00B78A] px-4'
                                        >
                                            Blog
                                        </NavLink>
                                        <span className='text-[#32404D] text-lg px-4'>+</span>
                                    </div>
                                    {isBlogDropdownOpen && (
                                        <ul className='absolute left-10 mt-2 bg-white'>
                                            <li className='p-2'>
                                                <NavLink
                                                    to="/blog"
                                                    className='text-[#32404D] text-lg hover:text-[#00B78A] px-4 block'
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            <li className='p-2'>
                                                <NavLink
                                                    to="/blog-details"
                                                    className='text-[#32404D] text-lg hover:text-[#00B78A] px-4 block'
                                                >
                                                    Blog Detail
                                                </NavLink>
                                            </li>
                                            <li className='p-2'>
                                                <NavLink
                                                    to="/elements"
                                                    className='text-[#32404D] text-lg hover:text-[#00B78A] px-4 block'
                                                >
                                                    Elements
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className={`p-3 ${isBlogDropdownOpen ? 'mt-32' : ''}`}>
                                    <NavLink
                                        to="/contact"
                                        className='text-[#32404D] text-lg hover:text-[#00B78A] px-4'
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className='flex justify-center items-center space-x-3'>
                        <div className='xl:block hidden'>
                            <span className='text-[#007A5C]'>Call US :</span>
                            <span> 0 (78) 675 3674</span>
                        </div>
                        <div className='xl:block hidden'> | </div>
                        <div className='text-[#3B5998] text-2xl  space-x-1 sm:flex hidden' >
                            <FaFacebookSquare className='transition-transform duration-300 hover:rotate-' />
                            <FaTwitterSquare />
                            <FaLinkedin className='text-[#24A4F3]' />
                            <FaYoutubeSquare className='text-red-600' />
                            <FaEnvelope className='text-green-600' />
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        {
                            toggle ?
                                <FaXmark onClick={() => setToggle(!toggle)} className='text-3xl text-[#34A853] md:hidden block' />
                                :
                                <FaBars onClick={() => setToggle(!toggle)} className='text-3xl text-[#34A853] md:hidden block' />

                        }

                    </div>

                </div>

            </nav>


        </>
    )
}

export default Header