import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  title: string;
  subtitle: string;
  imageSrc: string;
};

const CreationCard: FC<Props> = ({ title, subtitle, imageSrc }) => {
  return (
    <Stack maxWidth={300}>
      <Box
        width="100%"
        height={300}
        borderRadius="50px"
        component="img"
        src={imageSrc}
        mb={2}
        sx={{ objectFit: 'cover' }}
      />
      <Typography fontSize={20} fontWeight={700} color="#565656">
        {title}
      </Typography>
      <Typography color="#565656">{subtitle}</Typography>
    </Stack>
  );
};

export { CreationCard };
