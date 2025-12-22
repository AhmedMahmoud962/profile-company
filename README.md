<div align="center">

# 🚀 Polygon Software - Company Portfolio

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**A modern, high-performance portfolio website showcasing Polygon Software's expertise in software development**

[Live Demo](https://polygon-software.com) • [Report Bug](https://github.com/AhmedMahmoud962/profile-company/issues) • [Request Feature](https://github.com/AhmedMahmoud962/profile-company/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Configuration](#️-configuration)
- [Deployment](#-deployment)
- [Performance Optimizations](#-performance-optimizations)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact--support)

---

## 📖 About The Project

Polygon Software's portfolio is a cutting-edge web application built with React and Vite, designed to showcase our company's services, projects, and expertise. The platform features a modern UI/UX with smooth animations, dark mode support, and full API integration for dynamic content management.

### 🎯 Key Highlights

- **Modern Design**: Premium UI with glassmorphism effects and smooth animations
- **Performance Optimized**: Lighthouse score 95+, optimized animations for 60fps
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Mode**: Seamless theme switching with persistent preferences
- **Dynamic Content**: Full API integration for real-time content updates
- **SEO Optimized**: Meta tags, semantic HTML, and optimized performance

---

## ✨ Features

### 🏠 **Home Page**
- **Hero Slider**: Dynamic carousel showcasing company highlights
- **Services Section**: Interactive cards displaying technical expertise
- **Statistics Counter**: Animated counters for key achievements
- **Featured Projects**: Swiper-based project showcase
- **Client Testimonials**: Rotating client feedback carousel
- **Partners Section**: Trusted company partnerships

### 💼 **Projects Page**
- **Project Grid**: Filterable portfolio with category tags
- **Project Details**: Comprehensive project information pages
- **Live Demos**: Direct links to deployed projects
- **Technology Stack**: Visual representation of tech used

### 👥 **About Page**
- **Company Story**: Mission, vision, and values
- **Team Section**: Meet the talented team members
- **Timeline**: Company milestones and achievements

### 📞 **Contact Page**
- **Contact Form**: Validated form with API integration
- **Location Map**: Interactive Google Maps integration
- **Social Links**: Direct connections to social platforms
- **WhatsApp Integration**: Floating WhatsApp button

### 🎨 **UI/UX Features**
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Framer Motion powered animations (optimized for performance)
- **Scroll to Top**: Convenient navigation button
- **Loading States**: Elegant spinners and skeleton screens
- **Responsive Navigation**: Mobile-friendly hamburger menu

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **React** `18.3.1` - UI library
- **Vite** `5.4.2` - Build tool and dev server
- **React Router DOM** `6.26.2` - Client-side routing

### **Styling & UI**
- **CSS3** - Custom styling with CSS variables
- **Framer Motion** `11.5.4` - Animation library
- **Material-UI Icons** `6.1.6` - Icon components
- **Swiper** `11.1.14` - Touch slider component

### **State Management**
- **React Context API** - Global state (Theme, Settings)
- **React Hooks** - Local component state

### **HTTP & API**
- **Axios** `1.7.7` - HTTP client for API requests

### **Development Tools**
- **ESLint** - Code linting
- **Vite Plugin React** - Fast refresh and JSX support

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

- **Node.js** `v16.0.0` or higher
- **npm** `v7.0.0` or **yarn** `v1.22.0`
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AhmedMahmoud962/profile-company.git
   cd profile-company
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_API_BASE_URL=https://api.myaios.ai/api
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR at `localhost:5173` |
| `npm run build` | Build optimized production bundle to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint code quality checks |

---

## 📁 Project Structure

```
profile-company/
├── public/                      # Static assets
│   ├── software.png            # Favicon
│   └── ...
├── src/
│   ├── assets/                 # Images, fonts, media
│   │   └── images/
│   │       ├── partners/       # Partner logos
│   │       └── ...
│   ├── components/             # React components
│   │   ├── API/               # API service layer
│   │   │   ├── axiosInstance.jsx
│   │   │   ├── ProjectService.jsx
│   │   │   ├── serviceServices.jsx
│   │   │   ├── countersService.jsx
│   │   │   ├── ClientsService.jsx
│   │   │   ├── settingServices.jsx
│   │   │   └── ...
│   │   ├── Footer/            # Footer component
│   │   ├── Header/            # Header & navigation
│   │   ├── HeroSlider/        # Hero carousel
│   │   ├── ProjectsSection/   # Projects showcase
│   │   ├── SectionServices/   # Services grid
│   │   ├── SectionCounter/    # Statistics counters
│   │   ├── SectionClients/    # Client testimonials
│   │   ├── SectionPartners/   # Partners section
│   │   ├── FormContact/       # Contact form
│   │   └── utils/             # Utility functions
│   │       └── constants.js   # API URL helpers
│   ├── context/               # React Context
│   │   └── ThemeContext.jsx   # Dark mode state
│   ├── pages/                 # Page components
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── ProjectDetails.jsx
│   ├── App.jsx                # Main app component
│   ├── App.css                # Global styles
│   ├── main.jsx               # Entry point
│   └── index.css              # Root CSS
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies
├── .eslintrc.cjs              # ESLint config
└── README.md                  # This file
```

---

## 🌐 API Integration

### API Base URL

```javascript
// src/components/API/axiosInstance.jsx
const API_BASE_URL = 'https://api.myaios.ai/api'
```

### Available API Services

| Service | File | Methods |
|---------|------|---------|
| **Projects** | `ProjectService.jsx` | `getProjects()`, `getProjectById(id)` |
| **Services** | `serviceServices.jsx` | `getServices()` |
| **Counters** | `countersService.jsx` | `getCounters()` |
| **Clients** | `ClientsService.jsx` | `getClients()` |
| **Settings** | `settingServices.jsx` | `getSetting()` |
| **Hero Slider** | `sliderService.jsx` | `getSlider()` |
| **About** | `aboutService.jsx` | `getAboutServices()` |
| **Contact** | `contactService.jsx` | `sendContact(data)` |

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/projects` | GET | Retrieve all projects |
| `/projects/{id}` | GET | Get specific project details |
| `/services` | GET | Fetch company services |
| `/counters` | GET | Get statistics counters |
| `/our-clients` | GET | Get client testimonials |
| `/sliders` | GET | Fetch hero slider content |
| `/messages` | POST | Submit contact form |
| `/about-us` | GET | Get about page content |
| `/settings` | GET | Fetch site configuration (footer, social links) |

### Example API Usage

```javascript
import { getProjects } from './components/API/ProjectService'

const fetchProjects = async () => {
  try {
    const response = await getProjects()
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching projects:', error)
  }
}
```

### Image URL Helper

```javascript
// src/components/utils/constants.js
export const getImageUrl = (imagePath) => {
  return `https://api.myaios.ai/storage/${imagePath}`
}
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=https://api.myaios.ai/api

# Optional: Analytics
VITE_GA_TRACKING_ID=GA_MEASUREMENT_ID
```

### Theme Customization

Modify theme colors in `src/context/ThemeContext.jsx`:

```javascript
// Light mode colors
const lightTheme = {
  background: '#ffffff',
  text: '#1a1a1a',
  primary: '#8F6DFF',
  // ...
}

// Dark mode colors
const darkTheme = {
  background: '#1a1a1a',
  text: '#ffffff',
  primary: '#B299FF',
  // ...
}
```

### CSS Variables

Global CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #8F6DFF;
  --secondary-color: #FF6B9D;
  --text-color: #1a1a1a;
  --background-color: #ffffff;
  /* ... */
}
```

---

## 🚀 Deployment

### Build for Production

```bash
# Create optimized production build
npm run build

# Output will be in dist/ directory
```

### Deployment Platforms

<details>
<summary><strong>🔸 Vercel (Recommended)</strong></summary>

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Configure environment variables
4. Deploy automatically on every push

```bash
# Alternative: Deploy using Vercel CLI
npm i -g vercel
vercel --prod
```
</details>

<details>
<summary><strong>🔸 Netlify</strong></summary>

1. Connect repository to [Netlify](https://netlify.com)
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables
5. Deploy
</details>

<details>
<summary><strong>🔸 GitHub Pages</strong></summary>

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

**Note**: Update `vite.config.js` for GitHub Pages:
```javascript
export default defineConfig({
  base: '/profile-company/',
  // ...
})
```
</details>

---

## ⚡ Performance Optimizations

### Recent Performance Improvements

#### **Animation Optimizations** (Dec 2025)
- ✅ Reduced animation durations from **0.8s → 0.4s** (50% faster)
- ✅ Simplified animations to **opacity-only** (removed Y-axis and scale transforms)
- ✅ Reduced stagger delays from **0.1-0.2s → 0.05-0.1s**
- ✅ Added `viewport={{ once: true }}` to prevent re-animations
- ✅ Simplified hover effects (scale 1.1 → 1.05)
- ✅ Removed complex cubic-bezier easing functions

**Impact**: 
- 🚀 **50% faster animations**
- 💨 **Better frame rates** on low-end devices
- 🔋 **Lower battery consumption**
- ⚡ **Reduced GPU usage**

### Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Bundle Size**: < 500KB gzipped
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Core Web Vitals**: All green metrics

### Optimization Techniques

1. **Code Splitting**: React.lazy() for route-based splitting
2. **Image Optimization**: Lazy loading with `loading="lazy"`
3. **CSS Optimization**: Minimal CSS, no unused styles
4. **API Caching**: Efficient data fetching strategies
5. **Animation Performance**: GPU-accelerated opacity transitions

---

## 📱 Sections Overview

| Section | Component | Features |
|---------|-----------|----------|
| **🏠 Hero** | `HeroSlider` | Dynamic Swiper carousel, auto-play, responsive |
| **👥 About** | `SectionAbout` | Company story, mission, values |
| **⚙️ Services** | `SectionServices` | Service cards with icons, hover effects |
| **📊 Statistics** | `SectionCounter` | Animated counters, dynamic data from API |
| **💼 Portfolio** | `ProjectsSection` | Project showcase with Swiper, category filtering |
| **🤝 Clients** | `SectionClients` | Client testimonials carousel |
| **🤝 Partners** | `SectionPartners` | Partner logos with links |
| **📞 Contact** | `FormContact` | Validated form, API integration |
| **🦶 Footer** | `Footer` | Social links, contact info, scroll-to-top |

---

## 🔧 Troubleshooting

### Common Issues

<details>
<summary><strong>CORS Issues with API</strong></summary>

**Problem**: API calls fail due to CORS policy  

**Solution**: 
1. Ensure backend allows your domain in CORS settings
2. Use a proxy in `vite.config.js`:
```javascript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.myaios.ai',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
```
</details>

<details>
<summary><strong>Build Errors</strong></summary>

**Problem**: Build fails with memory issues  

**Solution**: Increase Node.js memory limit:
```bash
# Windows
set NODE_OPTIONS="--max-old-space-size=4096"
npm run build

# Linux/Mac
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```
</details>

<details>
<summary><strong>Images Not Loading</strong></summary>

**Problem**: Images from API not displaying  

**Solution**: 
1. Check API response for correct image paths
2. Verify `getImageUrl()` helper is used:
```javascript
import { getImageUrl } from '../utils/constants'

<img src={getImageUrl(project.image)} alt={project.name} />
```
</details>

<details>
<summary><strong>Dark Mode Not Persisting</strong></summary>

**Problem**: Theme resets on page reload  

**Solution**: Theme is saved to `localStorage`. Check browser console for errors and ensure `ThemeContext` is properly wrapped around the app.
</details>

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Submit** a Pull Request

### Code Standards

- ✅ Follow ESLint configuration
- ✅ Write meaningful commit messages
- ✅ Keep components small and focused
- ✅ Add comments for complex logic
- ✅ Test on multiple browsers and devices
- ✅ Update documentation as needed

### Commit Message Format

```
type(scope): subject

body (optional)
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

**Example**:
```
feat(projects): add project filtering by category
fix(footer): correct social media links
perf(animations): reduce motion for better performance
```

---

## 📄 License

This project is **proprietary** to Polygon Software. All rights reserved.

For licensing inquiries, contact: [info@polygonsoftware.site](mailto:info@polygonsoftware.site)

---

## 📞 Contact & Support

<div align="center">

**🔹 Polygon Software**

[![Website](https://img.shields.io/badge/Website-polygonsoftware.site-blue)](https://polygonsoftware.site)
[![Email](https://img.shields.io/badge/Email-info@polygonsoftware.site-red)](mailto:info@polygonsoftware.site)
[![GitHub](https://img.shields.io/badge/GitHub-AhmedMahmoud962-black)](https://github.com/AhmedMahmoud962)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-PolygonSoftware-blue)](https://linkedin.com/company/polygon-software)

**Built with ❤️ by the Polygon Software Team**

*Transforming ideas into digital reality*

</div>

---

<div align="center">

### ⭐ **If you found this project helpful, please give it a star!** ⭐

**[⬆ Back to Top](#-polygon-software---company-portfolio)**

</div>