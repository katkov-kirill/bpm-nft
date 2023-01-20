import { Box, Stack, Typography } from '@mui/material';
import Discord from 'assets/img/discord-logo.svg';
import Twitter from 'assets/img/twitter-logo.svg';
import Telegram from 'assets/img/tg-logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#EEEFF3' }}>
      <Stack
        height={240}
        alignItems="center"
        justifyContent="space-between"
        p={7.5}
        sx={{
          backgroundColor: '#4D384E',
          borderTopLeftRadius: '50px',
          borderTopRightRadius: '50px',
        }}
      >
        <Stack direction="row" spacing={4}>
          <Link to="/">
            <Box component="img" src={Twitter} alt="twitter" />
          </Link>
          <Link to="/">
            <Box component="img" src={Discord} alt="discord" />
          </Link>
          <Link to="/">
            <Box component="img" src={Telegram} alt="telegram" />
          </Link>
        </Stack>

        <Typography color="#fff" fontWeight={700}>
          Beats Per Mint
        </Typography>
      </Stack>
    </Box>
  );
};

export { Footer };
