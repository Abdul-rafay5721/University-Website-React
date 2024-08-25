import React from 'react'
import Header from '../Main/Header/Header'
import Banner from '../Main/Banner/Banner'
import ContactForm from '../Main/ContactForm/ContactForm'
import Footer from '../Main/Footer/Footer'
import BackToTop from '../Main/BackToTop/BackToTop'

function Contact() {
  return (
    <>
        <Header/>
        <BackToTop />

        <Banner title="Contact" subtitle="" height="h-[50vh]" button="false" />
        <ContactForm/>
        <Footer/>

    </>
  )
}

export default Contact