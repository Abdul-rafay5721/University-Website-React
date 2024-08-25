import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetailContent = () => {
    const location = useLocation();
    const { imgSrc, title } = location.state || { imgSrc: 'https://preview.colorlib.com/theme/universityedu/assets/img/blog/single_blog_1.jpg', title: 'Second divided from form fish beast made every of seas all gathered us saying he our' };

    return (
        <div className="col-lg-8 posts-list">
            <div className="single-post">
                <div className="feature-img">
                    <img className="img-fluid" src={imgSrc} alt={title} />
                </div>
                <div className="blog_details">
                    <h2 className='text-3xl font-extrabold my-4'>
                        {title}
                    </h2>
                    <ul className="blog-info-link mt-3 mb-4 flex gap-3">
                        <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                        <div>|</div>
                        <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                    </ul>
                    <p className="excert my-4">
                        MCSE boot camps have their supporters and detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower
                    </p>
                    <p className='my-4'>
                        MCSE boot camps have their supporters and detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower to actually sit through a
                        self-imposed MCSE training. who has the willpower to actually
                    </p>
                    <div className="quote-wrapper">
                        <div className="quotes my-4">
                            MCSE boot camps have their supporters and detractors. Some people do not understand why you
                            should have to spend money on boot camp when you can get the MCSE study materials yourself at
                            a fraction of the camp price. However, who has the willpower to actually sit through a
                            self-imposed MCSE training.
                        </div>
                    </div>
                    <p className='my-4'>
                        MCSE boot camps have their supporters and detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower
                    </p>
                    <p>
                        MCSE boot camps have their supporters and detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower to actually sit through a
                        self-imposed MCSE training. who has the willpower to actually
                    </p>
                </div>
            </div>
            <div className="navigation-top">
                <div className="d-sm-flex justify-content-between text-center">
                    <p className="like-info">
                        <span className="align-middle"><i className="fa fa-heart"></i></span> Lily and 4
                        people like this
                    </p>
                    <div className="col-sm-4 text-center my-2 my-sm-0">
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                    </ul>
                </div>
                <div className="navigation-area">
                    <div className="row flex justify-between">
                        <div className="flex items-center gap-3">
                            <div className="thumb">
                                <a href="#">
                                    <img className="img-fluid" src="https://preview.colorlib.com/theme/universityedu/assets/img/post/preview.jpg" alt="Previous Post" />
                                </a>
                            </div>
                            <div>
                                <div className="arrow">
                                    <a href="#">
                                        <span className="lnr text-white ti-arrow-left"></span>
                                    </a>
                                </div>
                                <div className="detials">
                                    <p>Prev Post</p>
                                    <a href="#">
                                        <h4 style={{ color: '#2d2d2d' }}>Space The Final Frontier</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <div className="detials">
                                    <p>Next Post</p>
                                    <a href="#">
                                        <h4 style={{ color: '#2d2d2d' }}>Telescopes 101</h4>
                                    </a>
                                </div>
                                <div className="arrow">
                                    <a href="#">
                                        <span className="lnr text-white ti-arrow-right"></span>
                                    </a>
                                </div>
                            </div>
                            <div className="thumb">
                                <a href="#">
                                    <img className="img-fluid" src="https://preview.colorlib.com/theme/universityedu/assets/img/post/next.jpg" alt="Next Post" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="media  border-2 p-5 my-4">
                    <img src="https://preview.colorlib.com/theme/universityedu/assets/img/blog/author.png" alt="Author" />
                    <div className="media-body">
                        <a href="#">
                            <h4>Harvard Milan</h4>
                        </a>
                        <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he
                            our dominion twon Second divided from</p>
                    </div>
                </div>
            </div>
            <div className="comments-area space-y-4">
                <h4>05 Comments</h4>
                <div className="comment-list">
                    <div>
                        <div className="flex gap-3 items-center">
                            <div>
                                <img className='h-18 ' src="https://preview.colorlib.com/theme/universityedu/assets/img/blog/comment_1.png" alt="Comment 1" />
                            </div>
                            <div className="desc">
                                <p className="text-sm">
                                    Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                                    Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                                </p>
                                <div className="flex justify-between">
                                    <div className="flex gap-3">
                                        <h5>
                                            <a href="#">Emilly Blunt</a>
                                        </h5>
                                        <p className="text-gray-500">December 4, 2017 at 3:12 pm</p>
                                    </div>
                                    <div className="reply-btn">
                                        <a href="#" className="btn-reply text-uppercase">Reply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comment-list">
                    <div>
                        <div className="flex gap-3 items-center">
                            <div>
                                <img className='h-18 ' src="https://preview.colorlib.com/theme/universityedu/assets/img/blog/comment_2.png" alt="Comment 1" />
                            </div>
                            <div className="desc">
                                <p className="text-sm">
                                    Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                                    Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                                </p>
                                <div className="flex justify-between">
                                    <div className="flex gap-3">
                                        <h5>
                                            <a href="#">Emilly Blunt</a>
                                        </h5>
                                        <p className="text-gray-500">December 4, 2017 at 3:12 pm</p>
                                    </div>
                                    <div className="reply-btn">
                                        <a href="#" className="btn-reply text-uppercase">Reply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comment-list">
                    <div>
                        <div className="flex gap-3 items-center">
                            <div>
                                <img className='h-18 ' src="https://preview.colorlib.com/theme/universityedu/assets/img/blog/comment_3.png" alt="Comment 1" />
                            </div>
                            <div className="desc">
                                <p className="text-sm">
                                    Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                                    Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                                </p>
                                <div className="flex justify-between">
                                    <div className="flex gap-3">
                                        <h5>
                                            <a href="#">Emilly Blunt</a>
                                        </h5>
                                        <p className="text-gray-500">December 4, 2017 at 3:12 pm</p>
                                    </div>
                                    <div className="reply-btn">
                                        <a href="#" className="btn-reply text-uppercase">Reply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment-form bg-white p-8 rounded-lg shadow-md">
                <h4 class="text-2xl font-semibold mb-4">Leave a Reply</h4>
                <form class="form-contact comment_form space-y-4" action="#" id="commentForm">
                    <div class="form-group">
                        <textarea class="form-control w-full border border-gray-300 rounded-lg p-4" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment"></textarea>
                    </div>
                    <div class="flex flex-wrap -mx-2">
                        <div class="w-full sm:w-1/2 px-2 mb-4">
                            <div class="form-group">
                                <input class="form-control w-full border border-gray-300 rounded-lg p-4" name="name" id="name" type="text" placeholder="Name"/>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 px-2 mb-4">
                            <div class="form-group">
                                <input class="form-control w-full border border-gray-300 rounded-lg p-4" name="email" id="email" type="email" placeholder="Email"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <input class="form-control w-full border border-gray-300 rounded-lg p-4" name="website" id="website" type="text" placeholder="Website"/>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="button text-black hover:text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600">Post Comment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogDetailContent;
