// API Configuration
export const API_BASE_URL = 'https://api.myaios.ai';

// Image Utilities
export const getImageUrl = (imagePath) => {
  // Handle empty or null image paths
  if (!imagePath) return '/default-image.jpg';
  
  // If image path already contains full URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // Combine base URL with image path
  return `${API_BASE_URL}/${imagePath}`;
};

// Generate responsive srcset for images
export const generateSrcSet = (imagePath, widths = [640, 960, 1280, 1600]) => {
  if (!imagePath) return '';
  
  const baseUrl = getImageUrl(imagePath);
  
  // If it's an external URL or already processed, return empty (manual handling needed)
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return '';
  }
  
  return widths
    .map((width) => `${baseUrl}?w=${width} ${width}w`)
    .join(', ');
};

// Get appropriate sizes attribute for different image types
export const getImageSizes = (type = 'hero') => {
  const sizes = {
    hero: '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1600px',
    project: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    about: '(max-width: 768px) 200px, 368px',
    thumbnail: '(max-width: 640px) 150px, 200px',
  };
  return sizes[type] || sizes.project;
};

// API Endpoints
export const API_ENDPOINTS = {
  SLIDER: '/sliders',
  // يمكنك إضافة endpoints أخرى هنا
};

// Default values
export const DEFAULT_IMAGES = {
  SLIDER: '/default-slider.jpg',
  PROFILE: '/default-profile.jpg',
};