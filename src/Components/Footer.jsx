import React from 'react'
import "./Footer.css";
import facebook from "./icons/facebook.png";
import instagram from "./icons/instagram.png";
import youtube from "./icons/youtube.png";
import linkedin from "./icons/linkedin-logo.png";

function Footer() {
  return (
    <div className='footer'>
      <div className='left-side'>
        <ul>
          <li>Terms and conditions</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Legal</li>
          <li>Sitemap</li>
        </ul>
      </div>
      <div className='right-side'>
        <img src={facebook} alt="facebook-icon" />
        <img src={instagram} alt="instagram-icon" />
        <img src={youtube} alt="youtube-icon" />
        <img src={linkedin} alt="linkedin-icon" />
      </div>
    </div>
  )
}

export default Footer