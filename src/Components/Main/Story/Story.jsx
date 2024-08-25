import React from 'react'
import { Link } from 'react-router-dom';

function Story() {

    const stories = [
        {
            imgSrc: 'https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img1.jpg.webp',
            title: 'Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories',
            link: '#'
        },
        {
            imgSrc: 'https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img2.jpg.webp',
            title: 'Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories',
            link: '#'
        },
        {
            imgSrc: 'https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img3.jpg.webp',
            title: 'Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories',
            link: '#'
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-20 border-b-2">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">TOP STORIES</h2>
                <a href="#" className="text-green-600 hover:underline">More Stories</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stories.map((story, index) => (
                    <a href={story.link} className="overflow-hidden bg-white rounded-lg shadow-md block group">
                        <img src={story.imgSrc} alt="Story" className="w-full h-72 object-cover" />
                        <div className="p-4">
                            <h3 className="text-2xl text-gray-800 group-hover:text-green-600">{story.title}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Story