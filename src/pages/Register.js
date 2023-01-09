import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import RegisterForm from '../components/RegisterForm';

const CustomBox = styled(Box)`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
`;

export default function Register() {
  return (
    <CustomBox>
      <Typography variant="" component="h2" sx={{ margin: '15px 0' }}>
        Registration
      </Typography>

      <RegisterForm />
    </CustomBox>
  );
}
