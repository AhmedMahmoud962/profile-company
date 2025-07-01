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