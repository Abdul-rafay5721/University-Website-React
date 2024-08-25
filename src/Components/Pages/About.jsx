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


function About() {
  return (
    <>
      <Header />
      <BackToTop />
      <Banner title="About Us" subtitle="" height="h-[50vh]" button="false" />
      <Note />
      <Resources />
      <Story />
      <Partner />
      <TrustedBy />
      <Footer />
    </>
  )
}

export default About