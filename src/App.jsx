/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Programs />
      </div>

    </div>
  )
}

export default App;