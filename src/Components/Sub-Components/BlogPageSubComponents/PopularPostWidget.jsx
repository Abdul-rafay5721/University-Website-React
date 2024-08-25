import React from 'react'

const popularPosts = [
    { imgSrc: "https://preview.colorlib.com/theme/universityedu/assets/img/post/post_1.jpg", title: "From life was you fish...", date: "January 12, 2019" },
    { imgSrc: "https://preview.colorlib.com/theme/universityedu/assets/img/post/post_2.jpg", title: "The Amazing Hubble", date: "02 Hours ago" },
    { imgSrc: "https://preview.colorlib.com/theme/universityedu/assets/img/post/post_3.jpg", title: "Astronomy Or Astrology", date: "03 Hours ago" },
    { imgSrc: "https://preview.colorlib.com/theme/universityedu/assets/img/post/post_4.jpg", title: "Asteroids telescope", date: "01 Hours ago" },
];

function PopularPostWidget() {
    return (
        <aside className="single_sidebar_widget popular_post_widget mb-4 p-4 border border-gray-200 rounded">
            <h3 className="widget_title font-bold text-lg mb-4" style={{ color: '#2d2d2d' }}>Recent Post</h3>
            {popularPosts.map((post, index) => (
                <div key={index} className="media post_item mb-3 flex items-start">
                    <img src={post.imgSrc} alt="post" className="w-16 h-16 object-cover mr-4 rounded" />
                    <div className="media-body">
                        <a href="blog_details.html" className="hover:text-blue-600">
                            <h3 className="text-md font-medium" style={{ color: '#2d2d2d' }}>{post.title}</h3>
                        </a>
                        <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                </div>
            ))}
        </aside>
    )
}

export default PopularPostWidget