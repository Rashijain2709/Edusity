// import React from 'react'

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="container">
        <Programs />
      </div>
      
    </div>
  )
}

export default App;