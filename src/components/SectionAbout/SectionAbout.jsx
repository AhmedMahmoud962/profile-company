import { useState, useEffect } from 'react'
import './AboutSection.css'
import { Link } from 'react-router-dom'
import { getAboutServices } from '../API/AboutServices'
import { getImageUrl } from '../utils/constants'

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [aboutData, setAboutData] = useState({})

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await getAboutServices()
        setAboutData(response.data)
      } catch (error) {
        console.error('Error fetching about data:', error)
        setAboutData({})
      }
    }
    fetchAboutData()
  }, [])

  

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()

    const controller = new AbortController()

    window.addEventListener('resize', checkMobile, {
      passive: true,
      signal: controller.signal,
    })

    return () => {
      controller.abort()
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="about-container">
      <div
        className={`about-grid ${isMobile ? 'mobile' : ''} ${
          isVisible ? 'animate' : ''
        }`}
      >
        <div className="image-container" style={{ '--delay': '0s' }}>
          {/* Image placeholder */}
          <div className="image-placeholder">
            <img
              src={getImageUrl(aboutData.image)}
              alt="About Polygon Software"
              className="about-image"
              width="800"
              height="400"
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 1 : 0 }}
              loading="lazy"
            />
            {!imageLoaded && <div className="image-skeleton"></div>}
          </div>
        </div>

        <div className="content-container" style={{ '--delay': '0.2s' }}>
          <h6 className="section-label">About Us</h6>
          <h2 className={`main-title ${isMobile ? 'mobile' : ''}`}>
            {aboutData.title}
          </h2>
          <p className="description">{aboutData.description}</p>
          <p className="description">{aboutData.mission}</p>
          <p className="description">{aboutData.vision}</p>
          <p className="description">{aboutData.values}</p>
          <Link to="/about" className="learn-more">
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutSection



// import { useState, useEffect } from 'react'
// // import './AboutSection.css'
// // import { Link } from 'react-router-dom'
// // import { getAboutServices } from '../API/AboutServices'
// // import { getImageUrl } from '../utils/constants'
// import image1 from "../../assets/images/partners/nanotration.jpg"
// import image2 from "../../assets/images/partners/nanotration.jpg"
// import image3 from "../../assets/images/partners/nanotration.jpg"

// const AboutSection = () => {
//   const [isMobile, setIsMobile] = useState(false)
//   const [isVisible, setIsVisible] = useState(false)
//   const [imageLoaded, setImageLoaded] = useState(false)
//   const [aboutData, setAboutData] = useState({})

//   useEffect(() => {
//     // Simulated API call - replace with actual getAboutServices() call
//     const fetchAboutData = async () => {
//       try {
//         // const response = await getAboutServices()
//         // setAboutData(response.data)
//         setAboutData({
//           title: "Unlimited Skills for Super Projects.",
//           description: "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design, interface design, including standardized code."
//         })
//       } catch (error) {
//         console.error('Error fetching about data:', error)
//         setAboutData({})
//       }
//     }
//     fetchAboutData()

//     // Check if mobile
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768)
//     }
    
//     checkMobile()
//     window.addEventListener('resize', checkMobile)
    
//     // Intersection Observer for visibility
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 }
//     )
    
//     const element = document.querySelector('.about-section')
//     if (element) {
//       observer.observe(element)
//     }
    
//     return () => {
//       window.removeEventListener('resize', checkMobile)
//       if (element) {
//         observer.unobserve(element)
//       }
//     }
//   }, [])

//   return (
//     <>
//       <style jsx>{`
//         .about-section {
//           padding: 100px 0;
//           background: #ffffff;
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
//         }

//         .about-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 20px;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 80px;
//           align-items: center;
//         }

//         .about-images {
//           position: relative;
//         }

//         .image-grid {
//           display: grid;
//           grid-template-columns: 2fr 1fr;
//           gap: 20px;
//           height: 400px;
//         }

//         .main-image {
//           border-radius: 15px;
//           overflow: hidden;
//           position: relative;
//         }

//         .main-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: opacity 0.3s ease;
//         }

//         .main-image img.loaded {
//           opacity: 1;
//         }

//         .side-images {
//           display: flex;
//           flex-direction: column;
//           gap: 20px;
//         }

//         .small-image {
//           height: calc(50% - 10px);
//           border-radius: 15px;
//           overflow: hidden;
//         }

//         .small-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .experience-badge {
//           position: absolute;
//           bottom: -30px;
//           left: 30px;
//           background: white;
//           padding: 30px;
//           border-radius: 15px;
//           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
//           text-align: center;
//           min-width: 180px;
//         }

//         .experience-number {
//           font-size: 48px;
//           font-weight: 800;
//           color: #2d1b69;
//           line-height: 1;
//           margin-bottom: 5px;
//         }

//         .experience-text {
//           font-size: 12px;
//           font-weight: 600;
//           color: #666;
//           letter-spacing: 1px;
//         }

//         .about-content {
//           padding-left: 20px;
//         }

//         .section-header {
//           margin-bottom: 20px;
//         }

//         .section-tag {
//           font-size: 14px;
//           font-weight: 600;
//           color: #666;
//           letter-spacing: 1px;
//         }

//         .section-title {
//           font-size: 48px;
//           font-weight: 800;
//           color: #2d1b69;
//           line-height: 1.2;
//           margin: 20px 0 30px 0;
//         }

//         .section-description {
//           margin-bottom: 40px;
//         }

//         .section-description p {
//           font-size: 16px;
//           line-height: 1.7;
//           color: #666;
//           margin: 0;
//         }

//         .section-description strong {
//           color: #2d1b69;
//           font-weight: 600;
//         }

//         .features-list {
//           margin-bottom: 40px;
//         }

//         .feature-item {
//           display: flex;
//           align-items: flex-start;
//           margin-bottom: 15px;
//           gap: 15px;
//         }

//         .feature-icon {
//           width: 20px;
//           height: 20px;
//           background: #4CAF50;
//           color: white;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 12px;
//           font-weight: bold;
//           flex-shrink: 0;
//           margin-top: 2px;
//         }

//         .feature-item span {
//           font-size: 16px;
//           color: #666;
//           line-height: 1.6;
//         }

//         .cta-section {
//           margin-top: 40px;
//         }

//         .cta-button {
//           background: linear-gradient(135deg, #a855f7, #8b5cf6);
//           color: white;
//           padding: 18px 35px;
//           border-radius: 50px;
//           font-size: 16px;
//           font-weight: 600;
//           border: none;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
//         }

//         .cta-button:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 15px 40px rgba(168, 85, 247, 0.4);
//         }

//         @media (max-width: 768px) {
//           .about-container {
//             grid-template-columns: 1fr;
//             gap: 60px;
//             text-align: center;
//           }

//           .about-content {
//             padding-left: 0;
//           }

//           .section-title {
//             font-size: 36px;
//           }

//           .image-grid {
//             height: 300px;
//           }

//           .experience-badge {
//             position: relative;
//             bottom: auto;
//             left: auto;
//             margin-top: 20px;
//             display: inline-block;
//           }
//         }
//       `}</style>
      
//       <section className="about-section">
//       <div className="about-container">
//         {/* Left side - Images */}
//         <div className="about-images">
//           <div className="image-grid">
//             <div className="main-image">
//               <img 
//                 src={image3} 
//                 alt="Team meeting"
//                 onLoad={() => setImageLoaded(true)}
//                 className={imageLoaded ? 'loaded' : ''}
//               />
//             </div>
//             <div className="side-images">
//               <div className="small-image top">
//                 <img src={image1} alt="Design mockups" />
//               </div>
//               <div className="small-image bottom">
//                 <img src={image2} alt="Coding workspace" />
//               </div>
//             </div>
//           </div>
//           <div className="experience-badge">
//             <div className="experience-number">5</div>
//             <div className="experience-text">YEARS OF EXPERIENCE</div>
//           </div>
//         </div>

//         {/* Right side - Content */}
//         <div className="about-content">
//           <div className="section-header">
//             <span className="section-tag">ABOUT THE STUDIO</span>
//           </div>
          
//           <h2 className="section-title">
//             Unlimited Skills for Super Projects.
//           </h2>
          
//           <div className="section-description">
//             <p>
//               <strong>Web design</strong> encompasses many different skills and disciplines in the 
//               production and maintenance of websites. The different areas of web design 
//               include web graphic design, interface design, including standardized code.
//             </p>
//           </div>
          
//           <div className="features-list">
//             <div className="feature-item">
//               <div className="feature-icon">✓</div>
//               <span>Beautiful and easy to understand UI, professional animations</span>
//             </div>
//             <div className="feature-item">
//               <div className="feature-icon">✓</div>
//               <span>These advantages are pixel perfect design & clear code delivered</span>
//             </div>
//             <div className="feature-item">
//               <div className="feature-icon">✓</div>
//               <span>Present your services with flexible, convenient and multipurpose</span>
//             </div>
//           </div>
          
//           <div className="cta-section">
//             <button className="cta-button">
//               Get the offer →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//     </>
//     )
// };
// export default AboutSection;