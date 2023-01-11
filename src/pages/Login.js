import { Typography, Alert } from '@mui/material';
import LoginForm from '../components/LoginForm';
import { CustomBox } from './Register';
import { useSelector } from 'react-redux';

export default function Login() {
  const error = useSelector(state => state.auth.error);
  console.log(error);
  return (
    <CustomBox>
      {error && (
        <Alert severity="info" color="info">
          {error}
        </Alert>
      )}

      <Typography variant="" component="h2" sx={{ mb: '15px' }}>
        Login
      </Typography>
      <LoginForm />
    </CustomBox>
  );
}
