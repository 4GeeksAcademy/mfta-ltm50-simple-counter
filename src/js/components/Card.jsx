import React from 'react'

const Card = ({digit}) => {
  return (
    <div className="px-4 py-5 display-1 rounded-4 fw-semibold" style={{border: "2px solid rgba(168, 85, 247, 0.3)", minWidth: "1.75em"}}>{digit}</div>
  )
}

export default Card