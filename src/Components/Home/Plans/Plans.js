import React from "react"
import "./Plans.scss"

import Plan from "./Plan"

const Plans = () => {
  const planArr = [
    {
      tittle: "Basic Plan",
      benefits: {
        one: "Send unlimited emails",
        two: "Send 10 text messages",
        three: "Recieve unlimited emails",
        four: "Recieve 50 text messages",
      },
      price: "Free",
      button: "Get Started",
      key: 1,
    },
    {
      tittle: "Advanced Plan",
      benefits: {
        one: "Send unlimited emails",
        two: "Send 100 text messages",
        three: "Recieve unlimited emails",
        four: "Recieve 500 text messages",
      },
      price: "$4.99/Month",
      button: "Coming Soon",
      key: 2,
    },
    {
      tittle: "Premium Plan",
      benefits: {
        one: "Send unlimited emails",
        two: "Send unlimited text messages",
        three: "Recieve unlimited emails",
        four: "Unlimited text messages",
      },
      price: "$9.99/Month",
      button: "Coming Soon",
      key: 3,
    },
  ]

  return (
    <div className="plans-container" id="plans">
      <div className="plans">
        <h1>We have plans for everyone</h1>
        <h6>
          Start with our basic plan now and purchase a better plan when it comes
          available.
        </h6>
        <div className="plan">
          {planArr.map((entrie, i) => {
            return (
              <Plan
                tittle={planArr[i].tittle}
                benefits={planArr[i].benefits}
                price={planArr[i].price}
                button={planArr[i].button}
                key={planArr[i].key}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Plans
