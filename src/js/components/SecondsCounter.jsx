import React from 'react'
import Card from './Card'

const SecondsCounter = ({seconds}) => {
    const digits = seconds.toString().padStart(6, 0).split("")
    
  return (
    <div className='bg-dark text-white d-flex min-vh-100 justify-content-center align-items-center text-center gap-2'>
        <Card digit={<i className="fa-regular fa-clock"></i>} />
        {
            digits?.map((digit, index) => <Card digit={digit} key={index} />)
        }
    </div>
  )
}

export default SecondsCounter