import { Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';
import { CustomBox } from './Register';

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
