import { Outlet } from 'react-router-dom';
import { AppBarComponent } from './AppBar/AppBar';
import { Suspense } from 'react';

import { Box, styled, Typography } from '@mui/material';

const CustomBox = styled(Box)`
  height: 100vh;
  background-image: url(https://pixabay.com/get/gd68ab970d1558b606a8d3c507cfa6600e1db6308125868fff2ca52b300ea67c483eda12f856e133b9bc2e3d00d6f21754b0618d767db6ee31eff13010a033b37_1280.jpg);
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Layout = () => {
  return (
    <CustomBox>
      <AppBarComponent />
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <Outlet />
      </Suspense>
    </CustomBox>
  );
};
