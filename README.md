
---

## 🚀 Quick Start

### Prerequisites

- **Node.js** `v16.0.0` or higher
- **npm** `v7.0.0` or **yarn** `v1.22.0`
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/polygon-software/portfolio.git
   cd polygon
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Update the environment variables in `.env.local`:
   ```env
   VITE_API_BASE_URL=https://api.myaios.ai/api
   VITE_CONTACT_EMAIL=info@polygonsoftware.com
   VITE_WHATSAPP_NUMBER=+201234567890
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
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint code quality checks |
| `npm run lint:fix` | Auto-fix ESLint issues |

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=https://api.myaios.ai/api
VITE_API_TIMEOUT=30000

# Contact Information
VITE_CONTACT_EMAIL=info@polygonsoftware.com
VITE_WHATSAPP_NUMBER=+201234567890
VITE_COMPANY_ADDRESS="123 Tech Street, Cairo, Egypt"

# Analytics (Optional)
VITE_GA_TRACKING_ID=GA_MEASUREMENT_ID
VITE_HOTJAR_ID=HOTJAR_SITE_ID

# Feature Flags
VITE_ENABLE_DARK_MODE=true
VITE_ENABLE_ANIMATIONS=true
VITE_DEBUG_MODE=false
```

### Theme Customization

Modify theme settings in `src/context/ThemeContext.jsx`:

```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#8F6DFF',     // Primary brand color
      light: '#B299FF',    // Light variant
      dark: '#6B4FCC',     // Dark variant
    },
    secondary: {
      main: '#FF6B9D',     // Secondary accent color
      light: '#FF9AC4',    // Light variant
      dark: '#CC4570',     // Dark variant
    },
  },
  // ... additional theme configuration
})
```

---

## 🌐 API Integration

### API Services Structure

```javascript
// src/components/API/axiosInstance.jsx
const axiosInstance = axios.create({
  baseURL: process.env.VITE_API_BASE_URL,
  timeout: process.env.VITE_API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Available API Services:
// - getProjects()         - Fetch portfolio projects
// - getServices()         - Fetch company services
// - getClients()          - Fetch client testimonials
// - getSlider()           - Fetch hero slider content
// - sendContact(data)     - Submit contact form
// - getAboutServices()    - Fetch about page content
```

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/projects` | GET | Retrieve all projects |
| `/projects/{id}` | GET | Get specific project details |
| `/services` | GET | Fetch company services |
| `/our-clients` | GET | Get client testimonials |
| `/sliders` | GET | Fetch hero slider content |
| `/messages` | POST | Submit contact form |
| `/about-us` | GET | Get about page content |
| `/settings` | GET | Fetch site configuration |

---

## 🚀 Deployment

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview build locally (optional)
npm run preview
```

### Deployment Platforms

<details>
<summary><strong>🔸 Vercel (Recommended)</strong></summary>

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

```bash
# Alternative: Deploy using Vercel CLI
npm i -g vercel
vercel --prod
```
</details>

<details>
<summary><strong>🔸 Netlify</strong></summary>

1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables in Netlify dashboard
</details>

<details>
<summary><strong>🔸 GitHub Pages</strong></summary>

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Deploy
npm run build
npm run deploy
```
</details>

---

## 📱 Sections Overview

| Section | Component | Description |
|---------|-----------|-------------|
| **🏠 Hero** | `HeroSlider` | Dynamic slider with company highlights |
| **👥 About** | `SectionAbout` | Company story, mission, and values |
| **⚙️ Services** | `SectionServices` | Technical expertise and service offerings |
| **📊 Statistics** | `SectionCounter` | Key achievements and metrics |
| **💼 Portfolio** | `ProjectsSection` | Project showcase with filtering |
| **🤝 Clients** | `SectionClients` | Client testimonials and partnerships |
| **📞 Contact** | `FormContact` | Contact form with validation |

---

## 🔧 Troubleshooting

### Common Issues

<details>
<summary><strong>CORS Issues with API</strong></summary>

**Problem**: API calls fail due to CORS policy  
**Solution**: 
1. Configure backend to allow your domain
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
# Linux/Mac
export NODE_OPTIONS="--max-old-space-size=4096"

# Windows
set NODE_OPTIONS="--max-old-space-size=4096"
```
</details>

<details>
<summary><strong>Slow Development Server</strong></summary>

**Problem**: HMR is slow or not working  
**Solution**: 
1. Clear node_modules and reinstall
2. Update Vite to latest version
3. Check for file watching limits on Linux
</details>

---

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Submit** a Pull Request

### Code Standards

- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Bundle Size**: < 500KB gzipped
- **First Contentful Paint**: < 1.5s
- **Core Web Vitals**: All green metrics

---

## 📄 License

This project is **proprietary** to Polygon Software. All rights reserved.

For licensing inquiries, contact: [legal@polygonsoftware.com](mailto:legal@polygonsoftware.com)

---

## 📞 Contact & Support

<div align="center">

**🔹 Polygon Software**

[![Website](https://img.shields.io/badge/Website-polygon--software.com-blue)](https://polygon-software.com)
[![Email](https://img.shields.io/badge/Email-info@polygonsoftware.com-red)](mailto:info@polygonsoftware.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-PolygonSoftware-blue)](https://linkedin.com/company/polygon-software)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-+201234567890-green)](https://wa.me/201234567890)

**Built with ❤️ by the Polygon Software Team**

*Transforming ideas into digital reality*

</div>

---

<div align="center">

### ⭐ **If you found this project helpful, please give it a star!** ⭐

</div>