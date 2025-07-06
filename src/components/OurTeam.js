import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import TeamCarousel from './TeamCarousel';
import dmytro from '../assets/avatar3.jpg';

const team = [
    {
      avatar: dmytro,
      name: 'Dmytro',
      position: 'Unity Developer',
    },
  ];

const OurTeam = ({ id }) => {
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: 2,
        transition: 'opacity 1s ease, transform 1s ease',
      }}
    >
    <Typography variant="h4" sx={{ mb: 2 }}>
        Meet Our Team
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: 600 }}>
        We are a group of talented individuals dedicated to delivering the best results.
      </Typography>
      <TeamCarousel team={team} />
    </Box>
  );
};

export default OurTeam;
