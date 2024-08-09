import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src="/facebook_icon.png" alt="" />
        <img src="/twitter_icon.png" alt="" />
        <img src="/instagram_icon.png" alt="" />
        <img src="/youtube_icon.png" alt="" />
      </div>
 
 <ul>
  <li>Audio Description</li>
  <li>Help Centre</li>
  <li>Gift Cards</li>
  <li>Media Centre</li>
  <li>Investors Relation</li>
  <li>Jobs</li>
  <li>Terms of use</li>
  <li>Privacy</li>
  <li>Legal Notices</li>
  <li>Cookie Preferences</li>
  <li>Corporate Information</li>
  <li>Contact Us</li>
 </ul>
 <p className='copyright-text'>c 1997-2023 Netflix, Inc</p>


    </div>
  )
}

export default Footer
