import React, { useState } from 'react';
import { Box, Paper, CircularProgress } from '@mui/material';
import VideoView from './VideoView';

const TabletView = ({ id, content }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <Paper
      sx={{
        m: 1,
        width: { xs: '300px', sm: '400px', md: '520px' },
        height: { xs: '400px', sm: '500px', md: '650px' },
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '8px solid #333',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
      }}
      elevation={4}
    >
      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 10,
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      )}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          maskImage: 'radial-gradient(circle, black 100%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle, black 100%, transparent 100%)',
        }}
      >
        <VideoView content={content} onLoad={handleVideoLoad} />
      </Box>
    </Paper>
  );
};

export default TabletView;
