import { Box, Stack, Typography } from '@mui/material';
import { AboutPoint, Button, SmallPill } from 'components/common/common';
import { ABOUT_POINTS, PROJECT_CARDS } from 'common/constants';
import { DiscoverCard } from 'components/common/discover-card/discover-card';
import MusicBlockChainBg from 'assets/img/music-on-blockchain-bg.png';
import FeaturedProjectBg from 'assets/img/featured-project-bg.png';

const Homepage = () => {
  return (
    <Stack
      height="100%"
      p={{ md: 6.25, xs: 3 }}
      sx={{ backgroundColor: '#EEEFF3' }}
      spacing={10}
      component="main"
    >
      <Stack component="section">
        <Stack
          direction={{ lg: 'row', xs: 'column' }}
          justifyContent="space-between"
          spacing={4}
        >
          <Stack
            borderRadius="50px"
            width={{ lg: '80%', xs: '100%' }}
            spacing={6.25}
            justifyContent="space-between"
            p={{ sm: 11.25, xs: 5 }}
            sx={{ backgroundColor: '#92C800' }}
          >
            <Typography
              variant="h2"
              color="#fff"
              fontWeight={700}
              fontSize={30}
            >
              Welcome to Beats Per Mint
            </Typography>
            <Typography
              fontSize={{ lg: 75, sm: 40, xs: 26 }}
              lineHeight="normal"
              maxWidth={539}
            >
              Where NFTs are valued by the culture they create.
            </Typography>
            <Box maxWidth={246}>
              <Button>How it works</Button>
            </Box>
          </Stack>
          <Stack
            direction={{ lg: 'column', md: 'row', xs: 'column' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
          >
            <SmallPill
              title="Music on the blockchain"
              subtitle="Upgrade how you listen"
              bgImage={MusicBlockChainBg}
            />

            <SmallPill
              title="Featured project name"
              subtitle="Check this out"
              bgImage={FeaturedProjectBg}
            />
          </Stack>
        </Stack>
      </Stack>

      <Stack
        component="section"
        justifyContent="center"
        alignItems="center"
        spacing={8.75}
      >
        <Typography variant="h2" color="#4D384E" fontSize={40} fontWeight={700}>
          About Beats Per Mint (BPM)
        </Typography>

        <Stack direction={{ md: 'row', xs: 'column' }} spacing={9}>
          {ABOUT_POINTS.map((point) => (
            <AboutPoint key={point.title} {...point} />
          ))}
        </Stack>

        <Box maxWidth={315}>
          <Button>Learn more about us</Button>
        </Box>
      </Stack>

      <Box component="section">
        <Typography
          variant="h2"
          color="#4D384E"
          fontSize={40}
          fontWeight={700}
          mb={5}
        >
          Discover BPMs
        </Typography>
        <Stack
          direction={{ sm: 'row', xs: 'column' }}
          justifyContent="center"
          spacing={{ lg: 5, xs: 3 }}
        >
          {PROJECT_CARDS.map((card) => (
            <Box
              display="flex"
              justifyContent="center"
              width={{ sm: '50%', xs: '100%' }}
              key={card.title}
            >
              <DiscoverCard {...card} />
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export { Homepage };
