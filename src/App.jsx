/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Programs />
        <About />
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus />
        <Title subTitle='Testimonials' title='What Student Says'/>
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact />
      </div>

    </div>
  )
}

export default App;