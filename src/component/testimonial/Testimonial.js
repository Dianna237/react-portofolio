import React from 'react'
import './testimonial.css'
import testimonial_1 from '../../assets/testimonial-1.jpg'
import testimonial_2 from '../../assets/testimonial-2.jpg'
import testimonial_3 from '../../assets/testimonial-3.jpg'
import {FaQuoteLeft} from 'react-icons/fa'
const Testimonial = () => {
  return (
    <div>
        <div className="testimonial wow fadeInUp" data-wow-delay="0.1s" id="review">
            <div className="container">
                <div className="testimonial-icon">
                    <FaQuoteLeft />
                </div>
                <div className="owl-carousel testimonials-carousel">
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={testimonial_1} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>
                    {/* <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={testimonial_2} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={testimonial_3} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial