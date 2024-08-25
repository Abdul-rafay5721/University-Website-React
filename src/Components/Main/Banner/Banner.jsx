import React from 'react'
import { Link } from 'react-router-dom'

function Banner(props) {
  return (
    <>
      <div className={`w-full ${props.height}  bg-[url(https://preview.colorlib.com/theme/universityedu/assets/img/hero/h1_hero1.jpg)] bg-blend-overlay bg-cover bg-center bg-[left-100px] relative`}>
        <div className="absolute inset-0 bg-[rgba(50,64,77,0.3)] z-10"></div>  
        <div className="flex items-center mx-2 h-full text-white z-20 relative w-full lg:mx-28 md:mx-20 lg:w-[700px]">
          <div>
            <div className="text-2xl mb-5">{props.subtitle}</div>
            <div className="font-extrabold text-3xl mb-5 lg:text-6xl md:text-5xl">{props.title}</div>
            <div className='lg:w-[70%] md:w-[50%] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique.</div>
            <Link to='/'>
            <button className={`rounded-none bg-[#007A5C] p-6 text-xl ${props.button == "true" ? 'block' : 'hidden' } `}>Get Stared Now</button>
            
            </Link>
          </div>
        </div>
      </div>



    </>
  )
}

export default Banner