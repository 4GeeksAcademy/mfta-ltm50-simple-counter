import React from 'react'

const CountDownControllers = ({startCountdown}) => {
  return (
    <div className='d-flex justify-content-center my-3'>
      <div className="input-group">
        <span className="input-group-text bg-dark text-white">New Countdown</span>
        <input type="number" className="form-control bg-dark text-white" placeholder="seconds" id="countdownSeconds" />
        <button className="btn btn-outline-success" type="button" onClick={() => {
          const countdownSeconds = document.getElementById('countdownSeconds').value
          startCountdown({ countdownSeconds })
          document.getElementById('countdownSeconds').value = ''
        }}>Start</button>
      </div>
    </div>
  )
}

export default CountDownControllers