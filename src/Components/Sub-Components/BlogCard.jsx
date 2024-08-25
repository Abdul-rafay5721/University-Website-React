import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ date, title, imgSrc }) => {
  const navigate = useNavigate();
  const [day, month] = date.split(' ');

  const handleTitleClick = () => {
    navigate('/blog-details', { state: { imgSrc, title } });
  };

  return (
    <article className="blog_item shadow-lg rounded-lg overflow-hidden">
      <div className="blog_item_img relative">
        <img
          className="w-full h-64 object-cover"
          src={imgSrc}
          alt={title}
        />
        <a
          href="#"
          className="absolute top-4 left-4 bg-green-500 text-white p-2 rounded-md"
        >
          <div className="text-center">
            <h3 className="text-xl">{day}</h3>
            <p>{month}</p>
          </div>
        </a>
      </div>
      <div className="blog_details p-4">
        <a
          className="d-inline-block"
          onClick={handleTitleClick}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-green-600 hover:cursor-pointer">
            {title}
          </h2>
        </a>
        <p className="text-gray-600 mb-4">
          That dominion stars lights dominion divide years for fourth have don't stars is that
          he earth it first without heaven in place seed it second morning saying.
        </p>
        <ul className="flex text-gray-500">
          <li className="mr-4">
            <a href="#" className="flex items-center">
              <i className="fa fa-user mr-1"></i> Travel, Lifestyle
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <i className="fa fa-comments mr-1"></i> 03 Comments
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default BlogCard;
