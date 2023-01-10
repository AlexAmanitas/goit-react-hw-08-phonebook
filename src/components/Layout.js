import { Outlet } from 'react-router-dom';
import { AppBarComponent } from './AppBar/AppBar';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Alert, Box, styled, Typography } from '@mui/material';

const CustomBox = styled(Box)`
  height: 100vh;
  background-image: url(https://cdn.pixabay.com/photo/2015/11/19/21/14/glasses-1052023_960_720.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Layout = () => {
  const error = useSelector(state => state.auth.error);
  console.log(error);
  return (
    <CustomBox>
      {error && <Alert>{error}</Alert>}
      <AppBarComponent />
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <Outlet />
      </Suspense>
    </CustomBox>
  );
};
