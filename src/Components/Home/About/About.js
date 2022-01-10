import React from "react"
import "./About.scss"
import image from "./../../../Images/icons8-speech-bubble-150.svg"

const About = () => {
  return (
    <div className="about" id="about">
      <div className="left">
        <h1>Sending messages, so you don't have to.</h1>
        <p>
          We make it easy to stay safe and keep the people in your life updated.
          We make this process simple and only send messages when the time
          expires.
        </p>
        <p className="button">Try it out!</p>
      </div>
      <div className="right">
        <img src={image} alt="img" />
      </div>
    </div>
  )
}

export default About

/*
  Header (h1)
  two sentences
  2 buttons 
    Start Now (same as register)
    Try it out 

  picture on right
*/
