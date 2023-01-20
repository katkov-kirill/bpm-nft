import { Box, List, ListItem, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { ArrowLink, Button } from '../common';

type Props = {
  title: string;
  subtitle: string;
  details: string[];
  price: number;
  imageSrc: string;
};

const DiscoverCard: FC<Props> = ({
  title,
  subtitle,
  details,
  price,
  imageSrc,
}) => {
  return (
    <Stack
      p={{ lg: 6.25, xs: 3 }}
      width="100%"
      maxWidth={554}
      borderRadius="50px"
      sx={{ backgroundColor: '#fff' }}
    >
      <Box component="img" src={imageSrc} mb={3.75} />
      <Typography fontSize={32} fontWeight={700} color="#342B52">
        {title}
      </Typography>
      <Typography fontSize={20} color="#565656" mb={2.75}>
        {subtitle}
      </Typography>
      <List sx={{ listStyleType: 'disc', mb: 4, pl: 3 }}>
        {details.map((detail) => (
          <ListItem key={detail} disablePadding sx={{ display: 'list-item' }}>
            {detail}
          </ListItem>
        ))}
      </List>
      <Typography fontSize={20} fontWeight={700} mb={2}>
        ${price}
      </Typography>
      <Stack
        direction={{ md: 'row', xs: 'column' }}
        justifyContent="space-between"
        spacing={2}
      >
        <Box maxWidth={{ lg: 192, xs: 140 }}>
          <Button>Subscribe</Button>
        </Box>
        <ArrowLink fontSize={18} fontWeight={700} to="/">
          Project page
        </ArrowLink>
      </Stack>
    </Stack>
  );
};

export { DiscoverCard };
