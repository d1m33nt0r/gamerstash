import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { AppView } from './AppView';
import TabletView from './TabletView';

const GameSection = ({ id, appViewProps, videoSource, reverseOrder = true }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null); // 'up' або 'down'

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      id={id}
      ref={sectionRef}
      className={`${isVisible ? 'animate-visible' : scrollDirection === 'down' ? 'animate-exit-down' : 'animate-exit-up'}`}
      sx={{
        minHeight: '100vh',
        width: '70%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-evenly',
        alignItems: 'center',
        textAlign: 'center',
        p: 2,
        transition: 'opacity 1s ease, transform 1s ease',
      }}
    >
      {reverseOrder ? (
        <>
          <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', justifyContent: 'center' }}>
            <TabletView content={videoSource} />
          </Box>
          <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', justifyContent: 'center' }}>
            <AppView {...appViewProps} />
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', justifyContent: 'center' }}>
            <AppView {...appViewProps} />
          </Box>
          <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', justifyContent: 'center' }}>
            <TabletView content={videoSource} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default GameSection;
