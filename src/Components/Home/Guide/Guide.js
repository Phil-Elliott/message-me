import React from "react"
import { FaClock, FaIdBadge, FaComment, FaCommentSlash } from "react-icons/fa"
import "./Guide.scss"
import Part from "./Part"

const Guide = () => {
  const guideArr = [
    {
      logo: <FaIdBadge />,
      tittle: "Contact",
      description:
        "Choose a contact to message. Who do you want us to message for you?",
      key: 1,
    },
    {
      logo: <FaClock />,
      tittle: "Time",
      description:
        "Set a time to wait before the message is sent. This can be as long as you would like.",
      key: 2,
    },
    {
      logo: <FaComment />,
      tittle: "Message",
      description:
        "Write the message that we will send for you. Let somone know where you are goind or what you are doing.",
      key: 3,
    },
    {
      logo: <FaCommentSlash />,
      tittle: "Cancel",
      description:
        "Cancel request before timer. If it not cancelled, then we will send the message for you.",
      key: 4,
    },
  ]

  return (
    <div className="guide" id="guide">
      <div className="inner-guide">
        <h1>A simple process for everyone</h1>
        <h6>
          We know that you are probably busy, so we wanted to make this process
          quick for your convenience.
        </h6>
        <div className="guide-grid">
          {guideArr.map((entrie, i) => {
            return (
              <Part
                logo={guideArr[i].logo}
                tittle={guideArr[i].tittle}
                description={guideArr[i].description}
                key={guideArr[i].key}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Guide
