import React from 'react';
import { Box, Typography } from '@mui/material';

const TeamMember = ({ avatar, name, position }) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        mx: 2,
      }}
    >
        <Box
          sx={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            overflow: 'hidden',
            mb: 2,
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
          }}
        >
          <img src={avatar} alt={`icon`} style={{ width: '100%', height: '100%' }} />
        </Box>

      <Typography variant="h6">{name}</Typography>
      <Typography variant="body2" color="text.secondary">
        {position}
      </Typography>
    </Box>
  );

  export default TeamMember;