import { Box, Button, styled, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

// import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';

const CustomMenu = styled(Box)`
  display: flex;
  align-items: baseline;
  width: 400px;
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <CustomMenu>
      <Typography component="p" sx={{ ml: 'auto', display: 'flex' }}>
        Welcome, {user.name}
      </Typography>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        color="inherit"
        sx={{ '&:hover': { color: 'orange' } }}
      >
        Logout
      </Button>
    </CustomMenu>
  );
};
