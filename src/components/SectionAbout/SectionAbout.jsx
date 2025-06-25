import { useState, useEffect, useRef } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const [imageVisible, setImageVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              setImageVisible(true);
            }
            if (entry.target === contentRef.current) {
              setTimeout(() => setContentVisible(true), 200);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="about-container">
      <div className={`about-grid ${isMobile ? 'mobile' : ''}`}>
        <div 
          ref={imageRef}
          className={`image-container ${imageVisible ? 'visible' : ''}`}
        >
          <img
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
            alt="About Polygon Software"
            className="about-image"
          />
        </div>
        
        <div 
          ref={contentRef}
          className={`content-container ${contentVisible ? 'visible' : ''}`}
        >
          <div className="section-label">
            About Us
          </div>
          
          <h1 className={`main-title ${isMobile ? 'mobile' : ''}`}>
            Building the Future of Software
          </h1>
          
          <p className="description">
            At Polygon Software, we are passionate about creating innovative
            software solutions that empower businesses to thrive in the
            digital landscape. With years of experience and a team of
            dedicated professionals, we deliver cutting-edge applications that
            drive growth and success.
          </p>
          
          <p className="description">
            Our commitment to excellence, combined with the latest
            technologies and best practices, ensures that every project we
            undertake exceeds expectations and delivers exceptional value.
          </p>
          
          <button
            className="cta-button"
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