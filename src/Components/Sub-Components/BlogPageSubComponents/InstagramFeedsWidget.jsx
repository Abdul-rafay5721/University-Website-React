import React from 'react'

const instagramFeeds = [
    "https://preview.colorlib.com/theme/universityedu/assets/img/post/post_5.jpg",
    "https://preview.colorlib.com/theme/universityedu/assets/img/post/post_6.jpg",
    "https://preview.colorlib.com/theme/universityedu/assets/img/post/post_7.jpg",
    "https://preview.colorlib.com/theme/universityedu/assets/img/post/post_8.jpg",
    "https://preview.colorlib.com/theme/universityedu/assets/img/post/post_9.jpg",
    "https://preview.colorlib.com/theme/universityedu/assets/img/post/post_10.jpg",
  ];

function InstagramFeedsWidget() {
  return (
    <aside className="single_sidebar_widget instagram_feeds mb-4 p-4 border border-gray-200 rounded">
    <h4 className="widget_title font-bold text-lg mb-4" style={{ color: '#2d2d2d' }}>Instagram Feeds</h4>
    <ul className="instagram_row flex flex-wrap">
      {instagramFeeds.map((src, index) => (
        <li key={index} className="w-1/3 p-1">
          <a href="#">
            <img className="img-fluid w-full h-24 object-cover rounded" src={src} alt="Instagram Feed" />
          </a>
        </li>
      ))}
    </ul>
  </aside>
  )
}

export default InstagramFeedsWidget