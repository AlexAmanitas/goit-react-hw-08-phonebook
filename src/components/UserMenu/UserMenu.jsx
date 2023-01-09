import { Box, Button, styled, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

// import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';

const CustomMenu = styled(Box)`
  display: flex;
  align-items: baseline;
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const name = user.name[0].toUpperCase() + user.name.slice(1);
  console.log(name);

  return (
    <CustomMenu>
      <Typography component="p">Welcome, {name}</Typography>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        color="inherit"
        sx={{ '&:hover': { color: 'orange' }, ml: '15px' }}
      >
        Logout
      </Button>
    </CustomMenu>
  );
};
