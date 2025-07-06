import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const appViewTheme = createTheme({
    typography: {
      fontFamily: 'Galindo, Arial, sans-serif',
    },
  });

const AppView = ({ title, description, appStoreLink, playStoreLink, icon }) => {
    return (
        <ThemeProvider theme={appViewTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: { xs: '100%', md: '50%' },
          textAlign: 'center',
          p: 2,
        }}
      >
        <Box
          sx={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            overflow: 'hidden',
            mb: 2,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <img src={icon} alt={`${title} icon`} style={{ width: '100%', height: '100%' }} />
        </Box>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" minWidth={'400px'} textAlign='justify' sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            href={appStoreLink}
            target="_blank"
            sx={{ width: '200px' }}
          >
            Download on the App Store
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href={playStoreLink}
            target="_blank"
            sx={{ width: '200px' }}
          >
            Get it on Google Play
          </Button>
        </Box>
      </Box>
      </ThemeProvider>
    );
  };

  export { AppView };