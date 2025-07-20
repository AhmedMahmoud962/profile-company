import React from 'react'
import { useLoading } from '../../context/LoadingContext'
import './GlobalSpinner.css'

const GlobalSpinner = () => {
  const { isLoading, message } = useLoading()

  if (!isLoading) return null

  return (
    <div className="global-spinner-overlay">
      {/* Background Blur Overlay */}
      <div className="spinner-backdrop" />
      
      {/* Floating Particles */}
      <div className="particles-container">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      {/* Main Spinner */}
      <div className="spinner-container">
        {/* Outer Ring */}
        <div className="spinner-outer-ring">
          <div className="ring-segment"></div>
          <div className="ring-segment"></div>
          <div className="ring-segment"></div>
        </div>

        {/* Middle Ring */}
        <div className="spinner-middle-ring">
          <div className="middle-dot"></div>
          <div className="middle-dot"></div>
          <div className="middle-dot"></div>
          <div className="middle-dot"></div>
        </div>

        {/* Inner Core */}
        <div className="spinner-core">
          <div className="core-pulse"></div>
          <div className="core-center">
            <div className="polygon-logo">
              <div className="poly-side"></div>
              <div className="poly-side"></div>
              <div className="poly-side"></div>
              <div className="poly-side"></div>
              <div className="poly-side"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="loading-text">
        <h3 className="loading-message">{message}</h3>
        <div className="loading-dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>

      {/* Brand */}
      <div className="loading-brand">
        <span className="brand-poly">POLY</span>
        <span className="brand-gon">GON</span>
      </div>
    </div>
  )
}

export default GlobalSpinner