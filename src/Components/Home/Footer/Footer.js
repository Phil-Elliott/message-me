import React from "react"
import "./Footer.scss"
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <div className="footer">
        <div>
          <h5>Location</h5>
          <p>Downtown Chicago</p>
        </div>
        <div>
          <h5>Phone</h5>
          <p>434-321-4567</p>
        </div>
        <div>
          <h5>Email</h5>
          <p>MessageMe@gmail.com</p>
        </div>
        <div className="socials">
          <a href="https://www.facebook.com/">
            <FaFacebook className="social" />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter className="social" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram className="social" />
          </a>
          <a href="https://www.pinterest.com/">
            <FaPinterest className="social" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
