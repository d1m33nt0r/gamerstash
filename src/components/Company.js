import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, ThemeProvider, createTheme } from '@mui/material';

const appViewTheme = createTheme({
    typography: {
      fontFamily: 'Galindo, Arial, sans-serif',
    },
  });


const Company = ({ id }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY;
        const direction = currentScrollY > lastScrollY ? 'down' : 'up';
        setScrollDirection(direction);

        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }

        lastScrollY = currentScrollY;
      },
      { threshold: 0.5 } // Точка активації анімації
    );

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={appViewTheme}>
    <Box
      id={id}
      ref={sectionRef}
      className={`${isVisible ? 'animate-visible' : scrollDirection === 'down' ? 'animate-exit-down' : 'animate-exit-up'}`}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: 2,
        transition: 'opacity 1s ease, transform 1s ease',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '3rem' },
          color: 'primary.main',
        }}
      >
        Gamer Stash
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: '600px',
          color: 'text.primary',
          mt: 3,
          fontSize: '1.1rem',
        }}
      >
        Gamer Stash is your ultimate destination for thrilling games and exciting experiences. We bring the joy of gaming right to your fingertips, unlocking fun for everyone!
      </Typography>
    </Box>
    </ThemeProvider>
  );
};

export default Company;
