import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';

const CustomBox = styled(Box)`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
`;

export default function Login() {
  return (
    <CustomBox>
      <Typography variant="" component="h2" sx={{ margin: '15px 0' }}>
        Login
      </Typography>
      <LoginForm />
    </CustomBox>
  );
}
