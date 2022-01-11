import React from "react"
import { FaCheckCircle } from "react-icons/fa"

const Plan = ({ tittle, benefits, price, button }) => {
  return (
    <div className="price-container">
      <h3>{tittle}</h3>
      <div className="price-items">
        <div className="price-item">
          <FaCheckCircle className="check-logo" />
          <p>{benefits.one}</p>
        </div>
        <div className="price-item">
          <FaCheckCircle className="check-logo" />
          <p>{benefits.two}</p>
        </div>
        <div className="price-item">
          <FaCheckCircle className="check-logo" />
          <p>{benefits.three}</p>
        </div>
        <div className="price-item">
          <FaCheckCircle className="check-logo" />
          <p>{benefits.four}</p>
        </div>
      </div>
      <h5>{price}</h5>
      <button>{button}</button>
    </div>
  )
}

export default Plan
