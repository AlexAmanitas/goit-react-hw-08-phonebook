import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';

const CustomBox = styled(Box)`
  max-width: 400px;
  margin: 25px auto 0;
  padding: 15px;
  background-image: linear-gradient(
    rgba(200, 200, 200, 0.7),
    rgba(200, 200, 200, 0.7)
  );
  border-radius: 10px;
`;

export default function Login() {
  return (
    <CustomBox>
      <Typography variant="" component="h2" sx={{ mb: '15px' }}>
        Login
      </Typography>
      <LoginForm />
    </CustomBox>
  );
}
