import React, { useState, useEffect, useMemo } from 'react'
import { useThemeContext } from '../../context/ThemeContext'
import './SectionCounter.css'
import { getCounters } from '../API/countersService'

const CounterSection = () => {
  const { darkMode } = useThemeContext()
  const [counters, setCounters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCounters = async () => {
      try {
        const response = await getCounters()
        if (response.status === 200) {
          setCounters(response.data || [])
        }
      } catch (err) {
        console.error('Failed to fetch counters:', err)
        setCounters([])
      } finally {
        setLoading(false)
      }
    }
    fetchCounters()
  }, [])

  const hasCounters = useMemo(() => counters.length > 0, [counters.length])

  if (loading || !hasCounters) {
    return null
  }

  return (
    <div className={`counter-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="counter-section-title">
        <h2>Fun Facts</h2>
        <p>
          This motivates us to continue looking for new challenges in order to
          improve our services.
        </p>
      </div>
      <div className="counter-container">
        <div className="counter-grid">
          {counters.map((counter) => (
            <div key={counter.id} className="counter-item">
              <div className="counter-icon">{counter.icon}</div>
              <h3 className="counter-number">{counter.count}+</h3>
              <h4 className="counter-title">{counter.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CounterSection
