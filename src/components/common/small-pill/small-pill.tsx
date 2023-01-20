import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { ArrowLink } from '../common';

type Props = {
  title: string;
  subtitle: string;
  bgImage: string;
};

const SmallPill: FC<Props> = ({ title, subtitle, bgImage }) => {
  return (
    <Stack
      width="100%"
      maxWidth={393}
      minWidth={260}
      height={322}
      p={5}
      justifyContent="space-between"
      borderRadius="50px"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Box>
        <Typography component="span" fontSize={24}>
          {subtitle}
        </Typography>
        <Typography
          fontSize={{ lg: 35, sm: 28, xs: 22 }}
          fontWeight={700}
          textTransform="uppercase"
        >
          {title}
        </Typography>
      </Box>
      <ArrowLink to="/">Learn more</ArrowLink>
    </Stack>
  );
};

export { SmallPill };
