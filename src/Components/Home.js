import React from 'react'
import Navbar from "./Navbar"
// import OrangeBlobBackground from "../Resources/art/Background Project/Orange Blob.gif"

const Home = () => {
  return ( 
  <div className = "home-container">
    <Navbar/>
    <div className = "home-banner-container">
        <div className = "home-OrangeBlobBackground-container">
        {/* <img src = {OrangeBlobBackground} alt = "" /> */}
        </div>
        <div className = "none-text-section" >
            <h1 classBame = "primary-heading">
                
            </h1>
        </div>
    </div>
    </div>
  );
};

export default Home;