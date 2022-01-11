import React from "react"
import "./Header.scss"
import { FaComments } from "react-icons/fa"

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-name">
          <h1>MessageMe</h1>
          <FaComments className="icon" />
        </div>
        <ul>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#guide">Guide</a>
          </li>
          <li>
            <a href="">Purpose</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="buttons">
          <h4 className="signIn-btn">Sign In</h4>
          <h4 className="register-btn">Register</h4>
        </div>
      </div>
    </div>
  )
}

export default Header
