import React from 'react'
import './Spinner.css'

const Spinner = ({ size = 'medium', message = 'Loading...' }) => {
  return (
    <div className="spinner-container">
      <div className={`spinner ${size}`}>
        <div className="spinner-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {message && <p className="spinner-message">{message}</p>}
    </div>
  )
}

export default Spinner
