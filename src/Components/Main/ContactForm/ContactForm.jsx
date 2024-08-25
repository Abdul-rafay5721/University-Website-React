import React from 'react';

const ContactForm = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="row">
                <div className="md:mx-20 mt-20 mb-0">
                    <h2 className="contact-title text-3xl font-semibold mb-6">Get in Touch</h2>
                </div>
                <div className='flex flex-wrap  lg:flex-nowrap gap-5 md:p-20 md:pt-0'>
                    <div className="w-full ">
                        <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate>
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <div className="form-group">
                                        <textarea
                                            className="form-control w-full border border-gray-300 rounded-lg p-4"
                                            name="message"
                                            id="message"
                                            cols="30"
                                            rows="9"
                                            placeholder="Enter Message"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <div className="form-group">
                                        <input
                                            className="form-control w-full border border-gray-300 rounded-lg p-4"
                                            name="name"
                                            id="name"
                                            type="text"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <div className="form-group">
                                        <input
                                            className="form-control w-full border border-gray-300 rounded-lg p-4"
                                            name="email"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 mb-4">
                                    <div className="form-group">
                                        <input
                                            className="form-control w-full border border-gray-300 rounded-lg p-4"
                                            name="subject"
                                            id="subject"
                                            type="text"
                                            placeholder="Enter Subject"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="button text-green-500 hover:text-white px-6 py-3 border border-green-500 hover:bg-green-600">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 offset-lg-1 mt-8 lg:mt-0">
                        <div className="media contact-info mb-4">
                            <span className="contact-info__icon"><i className="ti-home text-2xl text-blue-500"></i></span>
                            <div className="media-body ml-4">
                                <h3 className="text-xl font-semibold">Buttonwood, California.</h3>
                                <p>Rosemead, CA 91770</p>
                            </div>
                        </div>
                        <div className="media contact-info mb-4">
                            <span className="contact-info__icon"><i className="ti-tablet text-2xl text-blue-500"></i></span>
                            <div className="media-body ml-4">
                                <h3 className="text-xl font-semibold">+1 253 565 2365</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-email text-2xl text-blue-500"></i></span>
                            <div className="media-body ml-4">
                                <h3 className="text-xl font-semibold">support@colorlib.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
