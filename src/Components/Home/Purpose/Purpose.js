import React, { useState } from "react"
import Content from "./Purpose.content"
import image1 from "./../../../Images/icons8-lock-200.svg"
import image2 from "./../../../Images/waldemar-brandt-kYbYIWdJRh0-unsplash.jpg"
import image3 from "./../../../Images/john-mcarthur-X_MOr6oa4-k-unsplash.jpg"
import image4 from "./../../../Images/duy-pham-Cecb0_8Hx-o-unsplash.jpg"

import "./Purpose.scss"

const Purpose = () => {
  const [dataNum, setDataNum] = useState(0)

  const changeData = (e) => {
    if (e === "right") {
      if (dataNum < 3) {
        setDataNum(dataNum + 1)
      } else {
        setDataNum(0)
      }
    } else if (e === "left") {
      if (dataNum > 0) {
        setDataNum(dataNum - 1)
      } else {
        setDataNum(3)
      }
    }
  }

  const contentArr = [
    {
      tittle: "Safety",
      par: "There are many reasons to use this app, but we find that the most important reason is for your safety. Most of us are living in a fast paced world and it would be nice to have someone know if we are in trouble.",
      activeClass: "0",
      pic: image1,
    },
    {
      tittle: "Ride Sharing",
      par: "Ride sharing can be a little scary. It is nice to know that a message will be sent to your family, if something were to happen. If you don't cancel the request, then we will send the message, so your family can further investigate.",
      activeClass: "1",
      pic: image2,
    },
    {
      tittle: "Flights",
      par: "Flying can be scary and we often don't text the people we care about when we land. This can all change wiht our application. We make it easy to setup a text to tell people that you recently took a flight. Of course you can cancel this once you land.",
      activeClass: "2",
      pic: image3,
    },
    {
      tittle: "Friendly",
      par: "Sometimes it is just nice to send a message to a person that you care about. Maybe you want to wish someone happy birthday at a special time or maybe you just want to say hello. Either way, we got you covered.",
      activeClass: "3",
      pic: image4,
    },
  ]

  return (
    <div className="purpose" id="purpose">
      <Content
        tittle={contentArr[dataNum].tittle}
        par={contentArr[dataNum].par}
        active={contentArr[dataNum].activeClass}
        pic={contentArr[dataNum].pic}
        changeData={changeData}
      />
    </div>
  )
}

export default Purpose

/* 
  1) change the dot that is highlighted based off of data (Maybe create an active class)

      - Make an active class
      - Use a conditional to set the class
            maybe use a function 
              const changeClass = () => {
              if class === class
              }

  2) Get images
  3) Fix design 
*/
