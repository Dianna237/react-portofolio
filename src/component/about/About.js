import React from "react";
import about from '../../assets/about.jpg'
import './about.css'
const About = () => {
  return (
            <div className="flex-container" id="about">
                <div className="col-lg-6">
                    <div className="about-img">
                        <img src={about} alt="Image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-content">
                        <div className="section-header text-left">
                            <p>Learn About Me</p>
                            <h2>2 Years Experience</h2>
                        </div>
                        <div className="about-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida
                            </p>
                        </div>
                        <div className="skills">
                            <div className="skill-name">
                                <p>Web Design</p><p>85%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar"></div>
                            </div>
                            <div className="skill-name">
                                <p>Web Development</p><p>95%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" ></div>
                            </div>
                            <div className="skill-name">
                                <p>Apps Design</p><p>90%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" ></div>
                            </div>
                            <div className="skill-name">
                                <p>Apps Development</p><p>85%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" ></div>
                            </div>
                        </div>
                        <a className="btn" href="">Learn More</a>
                    </div>
                </div>
            </div>

  );
};

export default About;
