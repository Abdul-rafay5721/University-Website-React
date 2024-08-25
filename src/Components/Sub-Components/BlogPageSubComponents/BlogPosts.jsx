import React from 'react'
import BlogCard from '../BlogCard'


const blogData = [
    {
        date: "15 Jan",
        title: "Google inks pact for new 35-storey office",
        imgSrc: "https://preview.colorlib.com/theme/universityedu/assets/img/blog/single_blog_1.jpg",
    },
    {
        date: "15 Jan",
        title: "Google inks pact for new 35-storey office",
        imgSrc: "https://preview.colorlib.com/theme/universityedu/assets/img/blog/single_blog_2.jpg",
    },
    {
        date: "15 Jan",
        title: "Google inks pact for new 35-storey office",
        imgSrc: "https://preview.colorlib.com/theme/universityedu/assets/img/blog/single_blog_3.jpg",
    },
    {
        date: "15 Jan",
        title: "Google inks pact for new 35-storey office",
        imgSrc: "https://preview.colorlib.com/theme/universityedu/assets/img/blog/single_blog_4.jpg",
    },
    {
        date: "15 Jan",
        title: "Google inks pact for new 35-storey office",
        imgSrc: "https://preview.colorlib.com/theme/universityedu/assets/img/blog/single_blog_5.jpg",
    },
];
function BlogPosts() {
    return (
        <div className="blog_left_sidebar space-y-10">
            {blogData.map((blog, index) => (
                <BlogCard
                    key={index}
                    date={blog.date}
                    title={blog.title}
                    imgSrc={blog.imgSrc}
                />
            ))}
            
        </div>
    )
}

export default BlogPosts