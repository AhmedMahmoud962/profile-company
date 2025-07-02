import { useState, useEffect } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simple animation trigger after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-container">
      <div className={`about-grid ${isMobile ? 'mobile' : ''} ${isVisible ? 'animate' : ''}`}>
        <div className="image-container" style={{ '--delay': '0s' }}>
          <img
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
            alt="About Polygon Software"
            className="about-image"
            loading="lazy"
          />
        </div>
        
        <div className="content-container" style={{ '--delay': '0.2s' }}>
          <div className="section-label" style={{ '--delay': '0.3s' }}>
            About Us
          </div>
          
          <h1 className={`main-title ${isMobile ? 'mobile' : ''}`} style={{ '--delay': '0.4s' }}>
            Building the Future of Software
          </h1>
          
          <p className="description" style={{ '--delay': '0.5s' }}>
            At Polygon Software, we are passionate about creating innovative
            software solutions that empower businesses to thrive in the
            digital landscape. With years of experience and a team of
            dedicated professionals, we deliver cutting-edge applications that
            drive growth and success.
          </p>
          
          <p className="description" style={{ '--delay': '0.6s' }}>
            Our commitment to excellence, combined with the latest
            technologies and best practices, ensures that every project we
            undertake exceeds expectations and delivers exceptional value.
          </p>
          
          <button
            className="cta-button"
            style={{ '--delay': '0.7s' }}
            onClick={() => console.log('Learn More clicked')}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;