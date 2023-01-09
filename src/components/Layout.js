import { Outlet } from 'react-router-dom';
import { AppBarComponent } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Box, Typography } from '@mui/material';

export const Layout = () => {
  return (
    <Box>
      <AppBarComponent />
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
