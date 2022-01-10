import React from "react"
import { FaClock, FaIdBadge, FaComment, FaCommentSlash } from "react-icons/fa"

const Guide = () => {
  return (
    <div className="guide">
      <h1>A simple process for everyone</h1>
      <p>
        We know that you are probably busy, so we wanted to make this process
        quick for your convenience.
      </p>
      <div className="guide-grid"></div>
    </div>
  )
}

export default Guide

/* 
  Choose a contact to message
  Set a time to wait before the message is sent
  Write the message
  Cancel request before timer, so your contact won't be messaged 


  logo {tittle}   Contact, Time, Message, Cancel
  Description


  make an array for this
*/
