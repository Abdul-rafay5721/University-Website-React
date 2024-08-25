import React from 'react'
import Header from '../Main/Header/Header'
import Banner from '../Main/Banner/Banner'
import BackToTop from '../Main/BackToTop/BackToTop'
import ElementsContent from '../Main/Elements/ElementsContent'
import Footer from '../Main/Footer/Footer'

function Element() {
    return (
        <>
            <Header />
            <BackToTop />
            <Banner title="Elements" subtitle="" height="h-[50vh]" button="false" />
            <ElementsContent/>
            <Footer/>
        </>
    )
}

export default Element