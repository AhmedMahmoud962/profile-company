import React from 'react'
import './Spinner.css'

const Spinner = ({ message = 'Loading...' }) => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-wrapper">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-dot"></div>
      </div>
      <p className="spinner-message">{message}</p>
    </div>
  )
}

export default Spinner
