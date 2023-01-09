import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import RegisterForm from '../components/RegisterForm';

export const CustomBox = styled(Box)`
  max-width: 400px;
  margin: 25px auto 0;
  padding: 15px;
  background-image: linear-gradient(
    rgba(200, 200, 200, 0.7),
    rgba(200, 200, 200, 0.7)
  );
  border-radius: 10px;
`;

export default function Register() {
  return (
    <CustomBox>
      <Typography variant="" component="h2" sx={{ mb: '15px' }}>
        Registration
      </Typography>

      <RegisterForm />
    </CustomBox>
  );
}
