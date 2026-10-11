import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} className="footer-logo" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rerum voluptatibus repellendus nobis quaerat corporis nisi assumenda nostrum esse a voluptatem ad impedit ex, praesentium officiis aperiam molestiae quis libero.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 99084 05040</li>
                    <li>contact@foodie.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 Foodie.com - All Rights Reserved.</p>
    </div>
  )
}
export default Footer
