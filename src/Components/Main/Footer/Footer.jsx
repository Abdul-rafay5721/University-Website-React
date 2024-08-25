import React from 'react'
// import { faFacebook, faInstagram, faLinkedin, faYoutube } from 'react-icons/fa';


function Footer() {
    return (
        <footer className="bg-[#32404D] text-white py-20 px-5 md:py-28 md:px-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <img
              src="https://preview.colorlib.com/theme/universityedu/assets/img/logo/logo2_footer.png.webp"
              alt="University Logo"
              className="h-12"
            />
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h2 className="font-bold text-xl mb-2">Quick Links</h2>
            <ul className='text-[#A7AEB4]'>
              <li className='mb-3'><a href="#" className="hover:underline hover:text-[#007A5C] ">Work</a></li>
              <li className='mb-3'><a href="#" className="hover:underline hover:text-[#007A5C]">Services</a></li>
              <li className='mb-3'><a href="#" className="hover:underline hover:text-[#007A5C]">Products</a></li>
              <li className='mb-3'><a href="#" className="hover:underline hover:text-[#007A5C]">Tips & Tricks</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h2 className="font-bold text-xl mb-2">Programs</h2>
            <ul className='text-[#A7AEB4]'>
              <li className='mb-3'><a href="#" className="hover:underline hover:text-[#007A5C]">Air freight</a></li>
              <li className='mb-3'><a href="#" className="hover:underline hover:text-[#007A5C]">Ocean freight</a></li>
              <li className='mb-3'><a href="#" className="hover:underline hover:text-[#007A5C]">Large projects</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h2 className="font-bold text-xl mb-2">Resources</h2>
            <ul className='text-[#A7AEB4]'>
              <li className='mb-3'><a href="#" className="hover:underline hover:text-[#007A5C]">FAQ</a></li>
              <li className='mb-3'><a href="#" className="hover:underline hover:text-[#007A5C]">Submit Ticket</a></li>
              <li className='mb-3'><a href="#" className="hover:underline hover:text-[#007A5C]">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5">
            <h2 className="font-bold text-xl mb-2">Newsletter</h2>
            <p className='text-[#A7AEB4]'>Subscribe newsletter to get updates.</p>
            <form className="flex mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full text-gray-800"
              />
              <button className="p-2 bg-green-600 text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </form>
            {/* <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
              </a>
            </div> */}
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
            <hr className='mt-20 mb-10' />
          <p>
            Copyright ©2024 All rights reserved | This template is made with <span className="text-green-500">♥</span> by <a href="https://colorlib.com" className="hover:underline">Colorlib</a>
          </p>
        </div>
      </div>
    </footer>
    )
}

export default Footer