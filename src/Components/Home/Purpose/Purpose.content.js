import React from "react"
import { FaCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Content = ({ tittle, par, active, pic, changeData }) => {
  return (
    <div>
      <div className="purpose-inside">
        <div className="purpose-left">
          <h1>Our Purpose</h1>
          <h3>{tittle}</h3>
          <p>{par}</p>
          <div>
            <FaCircle
              className={active === "0" ? "active-left" : "bubble-left"}
            />
            <FaCircle className={active === "1" ? "active" : "bubble"} />
            <FaCircle className={active === "2" ? "active" : "bubble"} />
            <FaCircle className={active === "3" ? "active" : "bubble"} />
          </div>
        </div>
        <div className="purpose-right">
          <div className="arrows">
            <FaChevronLeft
              className="arrow-left"
              onClick={() => changeData("left")}
            />
            <FaChevronRight
              className="arrow-right"
              onClick={() => changeData("right")}
            />
          </div>
          <img
            className="image"
            style={{ color: "orange" }}
            src={pic}
            alt="lock"
          />
        </div>
      </div>
    </div>
  )
}

export default Content
