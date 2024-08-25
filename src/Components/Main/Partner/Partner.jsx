import React from 'react'
import { useState ,useEffect } from 'react';

const partners = [
    {
        name: 'CIDB',
        imgSrc: 'https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand1.png', // Replace with actual image path
    },
    {
        name: 'BUMN',
        imgSrc: 'https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand2.png', // Replace with actual image path
    },
    {
        name: 'Syngenta',
        imgSrc: 'https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand3.png', // Replace with actual image path
    },
    {
        name: 'Haier',
        imgSrc: 'https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand4.png', // Replace with actual image path
    },
    {
        name: 'BUMN',
        imgSrc: 'https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand2.png', // Replace with actual image path
    },
];

function Partner() {

    return (
        <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">OUR PARTNERS</h2>
        <p className="text-gray-600 mb-8">
          Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer
          efficitur tellus metus, sed feugiat leo posuere.
        </p>
        <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 md:space-y-0">
          {partners.map((partner, index) => (
            <div key={index} className="w-32 md:w-40 lg:w-48">
              <img src={partner.imgSrc} alt={partner.name} className="mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default Partner