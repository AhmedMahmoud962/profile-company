import React, { useState, useEffect } from 'react'
import './FormContact.css'
import { sendContact } from '../API/contactService'

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })
  const [alert, setAlert] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Auto-dismiss alert after 3 seconds
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [alert])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setAlert(null)

    try {
      const response = await sendContact(formData)
      console.log('Form submitted:', response)

      if (response.status === 201) {
        setAlert({
          type: 'success',
          message: `${response.msg}`,
        })

        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        setAlert({
          type: 'error',
          message: `❌ Unexpected response: ${response.status}`,
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)

      let errorMessage = '❌ Something went wrong. Please try again.'

      if (error.response) {
        errorMessage = `❌ Error: ${
          error.response.data?.msg ||
          error.response.statusText ||
          'Server error'
        }`
      } else if (error.request) {
        errorMessage =
          '❌ Network error. Please check your internet connection.'
      }

      setAlert({
        type: 'error',
        message: errorMessage,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating Alert - Top Right */}
      {alert && (
        <div className={`floating-alert floating-alert-${alert.type}`}>
          <div className="alert-content">
            <div className="alert-icon">
              <i
                className={`fas fa-${
                  alert.type === 'success'
                    ? 'check-circle'
                    : 'exclamation-circle'
                }`}
              ></i>
            </div>
            <div className="alert-message">
              {alert.message.split('\n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
            <button className="alert-close" onClick={() => setAlert(null)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="alert-progress"></div>
        </div>
      )}

      <div className="contact-container">
        {/* Left Side - Company Info & Map */}
        <div className="contact-left">
          <div className="company-info">
            <h2>Get In Touch</h2>
            <p>
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h4>Address</h4>
                <p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=28H%2F+1+Shokry+Abd-Elhalim%2C+New+Maadi%2C+Cairo%2C+Egypt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link address-link"
                  >
                    28H/ 1 Shokry Abd-Elhalim, New Maadi, Cairo, Egypt.
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info-content">
                <h4>Phone</h4>
                <p>
                  <a
                    href="https://wa.me/201069529529"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link phone-link"
                  >
                    +20 106 952 9529
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h4>Email</h4>
                <p>
                  <a
                    href="mailto:info@polygonsoftware.tech"
                    className="contact-link email-link"
                  >
                    info@polygonsoftware.tech
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-right">
          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Enter subject"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message here..."
                  rows="6"
                  disabled={isLoading}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span>Sending...</span>
                    <i className="fas fa-spinner fa-spin"></i>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormContact
