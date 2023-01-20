import { Box, Stack, Typography } from '@mui/material';
import Logo from 'assets/img/Logo.png';
import ProfileIcon from 'assets/img/profile-icon.png';
import { auth } from 'firebase-config';
import { signOut } from 'firebase/auth';
import { getToken } from 'helpers/token.helper';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '../common';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = getToken();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem('Auth token');
        navigate('/login');
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <Stack
      component="header"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={7.5}
      py={2}
    >
      <Link to="/">
        <Box component="img" width={50} height={50} src={Logo} alt="logo" />
      </Link>
      <Stack direction="row" alignItems="center" spacing={6.25}>
        <Typography
          fontWeight={location.pathname === '/' ? 700 : 400}
          component={Link}
          color="#4D384E"
          sx={{ textDecoration: 'none' }}
          to="/"
        >
          Discover
        </Typography>

        {token ? (
          <Box
            className="profileWrapper"
            position="relative"
            sx={{ '&:hover .logoutBtn': { display: 'block' } }}
          >
            <Link to="/profile">
              <Box component="img" src={ProfileIcon} alt="profile" />
            </Link>
            <Box
              className="logoutBtn"
              display="none"
              position="absolute"
              right="-95px"
              width={200}
            >
              <Button
                sx={{ fontSize: 16, height: 40, width: 150 }}
                onClick={handleLogout}
              >
                Log out
              </Button>
            </Box>
          </Box>
        ) : (
          <Typography
            fontWeight={location.pathname === '/login' ? 700 : 400}
            component={Link}
            color="#4D384E"
            sx={{ textDecoration: 'none' }}
            to="/login"
          >
            Log in
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export { Header };
