import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import RightArrow from 'assets/img/right-arrow.png';

type Props = {
  to: string;
  children: React.ReactNode;
  fontSize?: number;
  fontWeight?: number;
};

const ArrowLink: FC<Props> = ({
  to,
  children,
  fontSize = 24,
  fontWeight = 400,
}) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{ ':hover': { opacity: 0.7 }, transition: '.3s' }}
    >
      <Typography
        component={Link}
        color="#000"
        to={to}
        fontSize={fontSize}
        fontWeight={fontWeight}
        sx={{ textDecoration: 'none' }}
      >
        {children}
      </Typography>
      <Box
        component="img"
        src={RightArrow}
        alt="arrow right"
        width={28}
        height={20}
      />
    </Stack>
  );
};

export { ArrowLink };
