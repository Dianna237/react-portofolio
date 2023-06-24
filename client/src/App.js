import React from 'react';
import Header from './component/header/Header'
import './App.css';
import Contact from './component/contact/Contact';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import About from './component/about/About';
import Services from './component/services/Services';
import Testimonial from './component/testimonial/Testimonial';
import Experience from './component/experience/Experience';
import Portfolio from './component/portfolio/Portfolio';
const App = ()=> {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>   
  );
}
export default App;
