import { Stack, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Stack
      component="main"
      direction="row"
      justifyContent="center"
      alignItems="center"
      minHeight="calc(100vh - 322px)"
      p={6.25}
      gap={3}
      sx={{ backgroundColor: '#EEEFF3' }}
    >
      <Typography
        variant="h1"
        fontWeight={700}
        textAlign="center"
        color="#4D384E"
        fontSize={{ xs: 40, md: 90 }}
      >
        404 Page not found :(
      </Typography>
    </Stack>
  );
};

export { NotFound };
