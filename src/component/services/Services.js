import React from 'react'
import { RiCodeView } from 'react-icons/ri'
import { AiFillApple, AiFillAndroid } from 'react-icons/ai'
import { BsLaptop } from 'react-icons/bs'
import './service.css'
const Services = () => {
  return (
    <div>
        <div className="service" id="service">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>What I do</p>
                    <h2>Awesome Quality Services</h2>
                </div>
                <div className="flex-services">
                    <div className="col-lg-6 wow fadeInUp container_width" data-wow-delay="0.0s">
                        <div className="service-item">
                            <div className="service-icon">
                                <RiCodeView />
                            </div>
                            <div className="service-text">
                                <h3>Web Design</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp container_width" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-icon">
                                <BsLaptop />
                            </div>
                            <div className="service-text">
                                <h3>Web Development</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp container_width" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-icon">
                                < AiFillApple/>
                            </div>
                            <div className="service-text">
                                <h3>Apps Design</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp container_width" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-icon">
                            <AiFillAndroid />
                            </div>
                            <div className="service-text">
                                <h3>Apps Development</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Services