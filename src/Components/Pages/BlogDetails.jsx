import React from 'react'
import Header from '../Main/Header/Header'
import BackToTop from '../Main/BackToTop/BackToTop'
import Banner from '../Main/Banner/Banner'
import SearchWidget from '../Sub-Components/BlogPageSubComponents/SearchWidget'
import PostCategoryWidget from '../Sub-Components/BlogPageSubComponents/PostCategoryWidget'
import PopularPostWidget from '../Sub-Components/BlogPageSubComponents/PopularPostWidget'
import TagCloudWidget from '../Sub-Components/BlogPageSubComponents/TagCloudWidget'
import InstagramFeedsWidget from '../Sub-Components/BlogPageSubComponents/InstagramFeedsWidget'
import BlogPosts from '../Sub-Components/BlogPageSubComponents/BlogPosts'
import Pagination from '../Sub-Components/Pagination'
import Footer from '../Main/Footer/Footer'
import BlogDetailContent from '../Sub-Components/BlogPageSubComponents/BlogDetailContent'

function BlogDetails() {
  return (
    <>
    <Header />
            <BackToTop />
            <Banner title="Blog" subtitle="" height="h-[50vh]" button="false" />

            <section className="blog_area section-padding">
                <div className="container">
                    <div className="flex flex-wrap md:flex-nowrap px-5 py-10 xl:px-40 xl:py-20 gap-5">
                        <div className="col-lg-8 mb-5 mb-lg-0 w-auto lg:w-[70%]">
                            <BlogDetailContent/>
                        </div>
                        <div className="col-lg-4 w-auto xl:w-[30%]">
                            <div className="blog_right_sidebar">
                                <SearchWidget />
                                <PostCategoryWidget/>
                                <PopularPostWidget/>
                                <TagCloudWidget/>
                                <InstagramFeedsWidget/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
    </>
  )
}

export default BlogDetails