import React from 'react';
import "./Featured.css";
import image from "./../../images/sneaker.png";

const Featured = () => {
  return (
    <div className="featured">
        <div className="featured-left">
            <h2 className='featured-h2'>FEATURED</h2>
            <h1 className='featured-h1'>NIKE SNEAKERS AIR</h1>
            <h1 className='featured-h1'>LANCING SHOES</h1>
            <p className='featured-p'>The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.</p>
            <button className='featured-btn'>Explore More</button>
        </div>
        <div className="featured-right">
            <div className="featured-image">
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured