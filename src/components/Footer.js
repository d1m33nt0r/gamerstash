import React, { useState, useEffect } from 'react';
import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Перевіряємо, чи користувач доскролив до самого низу
      if (scrollTop + windowHeight >= fullHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: 2,
          backgroundColor: '#333', // Темний фон
          color: '#fff', // Світлий текст
          borderTop: '1px solid #444',
          position: 'fixed',
          bottom: 0,
          width: '100%',
        }}
      >
        <Typography variant="body2" sx={{ mb: 1 }}>

        <Link
            href="/privacy"
            underline="hover"
            sx={{ mx: 1, color: '#fff', '&:hover': { color: '#bbb' } }} // Темне посилання
          >
            Privacy Policy
          </Link> 
        </Typography>
      </Box>
    )
  );
};

export default Footer;
