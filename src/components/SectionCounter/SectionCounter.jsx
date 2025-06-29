import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useThemeContext } from '../../context/ThemeContext'
import './SectionCounter.css'

const CounterSection = () => {
  const { darkMode } = useThemeContext()
  const [counts, setCounts] = useState([0, 0, 0, 0])

  const counters = [
    {
      icon: '👥',
      number: 650,
      title: 'Happy Clients',
      description: 'Satisfied customers worldwide',
    },
    {
      icon: '💻',
      number: 2000,
      title: 'Projects Completed',
      description: 'Successful deliveries',
    },
    {
      icon: '⭐',
      number: 250,
      title: 'Awards Won',
      description: 'Industry recognitions',
    },
    {
      icon: '💼',
      number: 10,
      title: 'Years Experience',
      description: 'In software development',
    },
  ]

  useEffect(() => {
    const intervals = counters.map((counter, index) => {
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev]
          if (newCounts[index] < counter.number) {
            newCounts[index] += Math.ceil(counter.number / 100)
            if (newCounts[index] > counter.number) {
              newCounts[index] = counter.number
            }
          }
          return newCounts
        })
      }, 50)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <div className={`counter-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="counter-container">
        <div className="counter-grid">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="counter-item"
            >
              <div className="counter-icon">
                {counter.icon}
              </div>
              <h3 className="counter-number">
                {counts[index]}+
              </h3>
              <h4 className="counter-title">
                {counter.title}
              </h4>
              <p className="counter-description">
                {counter.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CounterSection