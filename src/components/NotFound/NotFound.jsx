import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useThemeContext } from '../../context/ThemeContext';
import './NotFound.css';

const NotFound = () => {
  const { darkMode } = useThemeContext();

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Sorry, the page you are looking for could not be found." />
      </Helmet>

      <div className={`not-found-container ${darkMode ? 'dark' : 'light'}`}>
        <div className="not-found-content">
          <h1>404</h1>
          <p>Sorry, the page you're looking for doesn't exist.</p>
          <Link to="/" className="home-button">
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;