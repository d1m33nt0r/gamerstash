import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import theme from './Theme';

const sections = [
  {
    id: 'company',
    title: 'Home'
  },
  {
    id: 'games',
    title: 'Games'
  }
];

const Header = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'center' }}>
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleScroll(section.id);
            }}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              margin: '0 16px',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = theme.palette.primary.main;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'inherit';
            }}
          >
            {section.title}
          </a>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
