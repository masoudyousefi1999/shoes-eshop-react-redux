import React from 'react';
import "./Highlight.css";
import image from "./../../images/hightlightimg.png";

const Highlight = () => {
  return (
    <div className="highlight">
        <div className="highlight-left">
            <div className="highlight-image">
                <img src={image} alt="" />
            </div>
        </div>
        <div className="highlight-right">
            <h1 className='highlight-text-1'>HIGHLIGHTS</h1>
            <h1 className='highlight-text-2'>NIKE AIR WITH</h1>
            <h1 className='highlight-text-3'>LIMITLESS CHOICES</h1>
            <p>Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.</p>
            <button className='highlight-btn'>Explore More</button>
        </div>
    </div>
  )
}

export default Highlight