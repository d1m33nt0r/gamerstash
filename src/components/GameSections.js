import GameSection from './GameSection';
import cupForceIcon from '../assets/CupForceIcon.png';
import cubeRacerIcon from '../assets/CubeRacerIcon.png';
import cupForceVideo from '../assets/cup-force.mp4';
import cubeRacerVideo from '../assets/cube-racer.mp4';
import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const gameSections = [
  {
    id: 'cup-force',
    appViewProps: {
      title: 'Cup Force',
      description: 'Gear up for the ultimate adventure in Cup Force, the game where every battle brings rewards and every decision shapes your path to victory! 💥 With strategic turn-based combat, endless upgrades, and epic loot, you’re in for a thrilling ride.',
      appStoreLink: 'https://apps.apple.com',
      playStoreLink: 'https://play.google.com',
      icon: cupForceIcon,
    },
    videoSource: cupForceVideo,
  },
  {
    id: 'cube-racer',
    appViewProps: {
      title: 'Cube Racer',
      description: 'Complete all levels, collect crystals and unlock all skins! Very simple arcade and hyper casual game. Just swipe left and right to collect cubes and crystals on your way to the finish line. Try to avoid obstacles on your way. The more cubes, the higher the reward.',
      appStoreLink: 'https://apps.apple.com',
      playStoreLink: 'https://play.google.com',
      icon: cubeRacerIcon,
    },
    videoSource: cubeRacerVideo,
  }
];

const GameSections = ({ id }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

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
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
        <GameSection
          id={gameSections[0].id}
          appViewProps={gameSections[0].appViewProps}
          videoSource={gameSections[0].videoSource}
          reverseOrder={0 % 2 === 0}
        />
        <GameSection
          id={gameSections[1].id}
          appViewProps={gameSections[1].appViewProps}
          videoSource={gameSections[1].videoSource}
          reverseOrder={1 % 2 === 0}
        />
    </Box>
  );
};

export default GameSections;
