import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
        <div className="footer-main">
        <div className="about">
            <h5 className='footer-header-text'>ABOUT NIKE</h5>
            <span>News</span>
            <span>Careers</span>
            <span>Investors</span>
            <span>Prupose</span>
            <span>Sustainability</span>
            <span>FAQ</span>
        </div>
        <div className="get-help">
            <h5 className='footer-header-text'>GET HELP</h5>
            <span>Order Status</span>
            <span>Shipping & Delivery</span>
            <span>Payment Options</span>
            <span>Gift Card Balance</span>
            <span>Contact Us</span>
            <span>Blog</span>
        </div>
        <div className="company">
            <h5 className='footer-header-text'>COMPANY</h5>
            <span>Gift Cards</span>
            <span>Promotions</span>
            <span>Find A Store</span>
            <span>Signup</span>
            <span>Nike Jouneral</span>
            <span>Send Us Feeback</span>
        </div>
        </div>

        <div className='copy-right'>
        Copyright© All Reserved Rights MasoudYousefi - 2023
        </div>
    </footer>
  )
}

export default Footer