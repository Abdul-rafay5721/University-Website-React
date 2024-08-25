import React from 'react'
import Header from '../Main/Header/Header'
import Banner from '../Main/Banner/Banner'
import Note from '../Main/Note/Note'
import Program from '../Main/Program/Program'
import Resources from '../Main/Resources/Resources'
import Story from '../Main/Story/Story'
import Partner from '../Main/Partner/Partner'
import TrustedBy from '../Main/TrustedBy/TrustedBy'
import Footer from '../Main/Footer/Footer'
import BackToTop from '../Main/BackToTop/BackToTop'

const programs = [
  { name: "Faculty of Science", imageSrc: "https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog1.jpg" },
  { name: "Faculty of Arts", imageSrc: "https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog2.jpg" },
];

function Index() {
  return (
    <>
      <Header />
      <BackToTop />
      <Banner title="SHOWCASE COURSES, EVENTS AND MORE!" subtitle="EDUCTION & SCHOOL" height="h-[80vh]" button="true" />
      <Note />
      <Program programs={programs} />
      <Resources />
      <Story />
      <Partner />
      <TrustedBy />
      <Footer />
    </>
  )
}

export default Index