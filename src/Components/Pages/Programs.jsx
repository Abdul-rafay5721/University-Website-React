import React from 'react'
import Header from '../Main/Header/Header'
import Banner from '../Main/Banner/Banner'
import BackToTop from '../Main/BackToTop/BackToTop'
import Program from '../Main/Program/Program'
import TrustedBy from '../Main/TrustedBy/TrustedBy'
import Footer from '../Main/Footer/Footer'

const programs = [
    { name: "Faculty of Science", imageSrc: "https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog1.jpg" },
    { name: "Faculty of Arts", imageSrc: "https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog2.jpg" },
    { name: "Faculty of Science", imageSrc: "https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog3.jpg" },
    { name: "Faculty of Arts", imageSrc: "https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog4.jpg" },
  ];


function Programs() {
  return (
    <>
        <Header />
        <BackToTop />
        <Banner title="Programs" subtitle="" height="h-[50vh]" button="false" />
        <Program programs={programs} />
        <TrustedBy/>
        <Footer/>
    </>
  )
}

export default Programs