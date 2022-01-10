import React from "react"

const Part = ({ logo, tittle, description }) => {
  return (
    <div>
      <div className="part-header">
        <h2>{logo}</h2>
        <h3>{tittle}</h3>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Part
