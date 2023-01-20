import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  title: string;
  description: string;
  imageSrc: string;
};

const AboutPoint: FC<Props> = ({ title, description, imageSrc }) => {
  return (
    <Stack alignItems="center" spacing={2}>
      <Box component="img" width={116} height={116} src={imageSrc} />
      <Typography
        component="h6"
        fontSize={24}
        fontWeight={700}
        textAlign="center"
      >
        {title}
      </Typography>
      <Typography maxWidth={350} textAlign="center" fontSize={18}>
        {description}
      </Typography>
    </Stack>
  );
};

export { AboutPoint };
