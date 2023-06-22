import React from 'react'
import './portfolio.css'
import portfolio_1 from '../../assets/portfolio-1.jpg'
import portfolio_2 from '../../assets/portfolio-2.jpg'
import portfolio_3 from '../../assets/portfolio-3.jpg'
import portfolio_4 from '../../assets/portfolio-4.jpg'
import portfolio_5 from '../../assets/portfolio-5.jpg'
import portfolio_6 from '../../assets/portfolio-6.jpg'
const Portfolio = () => {
  return (
    <div>
           <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-header text-center wow zoomIn">
                    <p>My Portfolio</p>
                    <h2>My Excellent Portfolio</h2>
                </div>
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp port-width">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio_1} alt="Image" />
                            </div>
                            <div className="portfolio-text">
                                <h3>eCommerce Website</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp port-width mx">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio_2} alt="Image" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Product Landing Page</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp port-width">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio_3} alt="Image"  />
                            </div>
                            <div className="portfolio-text">
                                <h3>JavaScript quiz game</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp port-width">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio_4} alt="Image" />
                            </div>
                            <div className="portfolio-text">
                                <h3>JavaScript drawing</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp port-width mx">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio_5} alt="Image" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Social Mobile Apps</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp port-width">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio_6} alt="Image" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Company Website</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio