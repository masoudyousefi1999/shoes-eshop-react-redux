import React from 'react';
import "./Hero.css";
import hero from "./../../images/hero.png";
import poster1 from "./../../images/video/vcover1.png";
import poster2 from "./../../images/video/vcover2.png";
import poster3 from "./../../images/video/vcover3.png";
import video from "./../../images/video/clip.mp4";
import facebook from "./../../images/facebook.svg";
import twitter from "./../../images/twitter.svg";
import instagram from "./../../images/instagram.svg";
import youtube from "./../../images/youtube.svg";
import messanger from "./../../images/messenger.svg";

const Hero = () => {
  
  let instagramAccount = () => {
    window.location.href = "https://www.instagram.com/masoudyousefi_1999?igsh=YjcwcGlyemtoZ2dj"
  }
  
  return (
    <>
    <div className='bg-theme'></div>
    <div className="hero-container">
      <div className="hero-left">
        <video src={video} poster={poster1} className='video'></video>
        <video src={video} poster={poster2} className='video'></video>
        <video src={video} poster={poster3} className='video'></video>
      </div>
      <div className="hero-mid">
      <h1 className='hero-title'>Play With Electric Nike</h1>
      <h1 className='hero-title'>Adapt 2.0 Sneakers</h1>
      <button>Explore Product</button>
      <div className="hero-image">
        <img src={hero} alt="nike shoes" />
      </div>
      </div>
      <div className="hero-right">
        <div className="social-image">
          <img src={facebook} alt="" onClick={instagramAccount} />
          <img src={twitter} alt="" onClick={instagramAccount} />
          <img src={instagram} alt="" onClick={instagramAccount} />
          <img src={youtube} alt="" onClick={instagramAccount} />
          <img src={messanger} alt="" onClick={instagramAccount} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero