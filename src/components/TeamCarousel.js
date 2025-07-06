import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import TeamMember from './TeamMember';

const TeamCarousel = ({ team }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap', // Додаємо перенесення рядків
        justifyContent: 'center', // Центруємо вміст
        alignItems: 'center',
        textAlign: 'center',
        p: 2,
        width: '100%',
        gap: 2, // Відступи між елементами
      }}
    >
      {team.map((member, index) => (
        <TeamMember
          key={index}
          {...member}
          sx={{
            flex: isSmallScreen ? '0 0 calc(50% - 16px)' : isMediumScreen ? '0 0 calc(33.33% - 16px)' : '0 0 calc(25% - 16px)', // Ширина елемента залежно від розміру екрана
            maxWidth: '150px', // Максимальна ширина для великих екранів
            textAlign: 'center',
          }}
        />
      ))}
    </Box>
  );
};

export default TeamCarousel;
