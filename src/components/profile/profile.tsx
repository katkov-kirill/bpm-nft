import { Box, Grid, Stack, Typography } from '@mui/material';
import ProfileBg from 'assets/img/profile-bg.png';
import UserAvatar from 'assets/img/user-avatar.svg';
import NftBadge from 'assets/img/nft-badge.svg';
import { CreationCard } from 'components/common/common';
import { CREATION_CARDS } from 'common/constants';
import { auth } from 'firebase-config';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      return;
    }

    setUser(null);
  });

  return (
    <Stack component="main" sx={{ backgroundColor: '#EEEFF3' }}>
      <Box
        component="img"
        width="100%"
        src={ProfileBg}
        alt="background image"
      />

      <Stack
        p={{ lg: 12.5, md: 6.25, xs: 3 }}
        pt={0}
        mt={{ xs: -8, lg: -16 }}
        spacing={6.25}
      >
        <Stack alignItems="center">
          <Box component="img" src={UserAvatar} />
          <Typography color="#4D384E" fontSize={24} fontWeight={700}>
            {user?.email}
          </Typography>
        </Stack>

        <Stack
          borderRadius="50px"
          spacing={12.5}
          p={6.25}
          sx={{ backgroundColor: '#fff' }}
        >
          <Box>
            <Typography
              color="#4D384E"
              fontSize={{ lg: 32, md: 28, xs: 22 }}
              fontWeight={700}
              mb={3}
            >
              Subscriptions
            </Typography>
            <Stack
              direction="row"
              gap={6.25}
              flexWrap="wrap"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <Box>
                <Box component="img" width={60} height={60} src={UserAvatar} />
                <Typography textAlign="center">George</Typography>
              </Box>

              <Box>
                <Box component="img" width={60} height={60} src={UserAvatar} />
                <Typography textAlign="center">Rendall</Typography>
              </Box>

              <Box>
                <Box component="img" width={60} height={60} src={UserAvatar} />
                <Typography textAlign="center">Ann</Typography>
              </Box>

              <Box>
                <Box component="img" width={60} height={60} src={UserAvatar} />
                <Typography textAlign="center">Bobert</Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Typography
              color="#4D384E"
              fontSize={{ lg: 32, md: 28, xs: 22 }}
              fontWeight={700}
              mb={3}
            >
              Badges and NFTs
            </Typography>
            <Stack
              direction="row"
              gap={6.25}
              flexWrap="wrap"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <Box>
                <Box component="img" width={60} height={60} src={NftBadge} />
                <Typography textAlign="center">BPM Token</Typography>
              </Box>
              <Box>
                <Box component="img" width={60} height={60} src={NftBadge} />
                <Typography textAlign="center">BPM Token</Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>

        <Stack spacing={6.25}>
          <Box>
            <Typography
              component="h3"
              color="#4D384E"
              fontSize={{ lg: 40, md: 32, xs: 24 }}
              fontWeight={700}
            >
              Community Creations
            </Typography>
            <Typography maxWidth={750}>
              Create content related to this project, then post on social media
              with the hastag #projectName for it show up here. Then, vote on
              your favorite content to see it represented in the final project
              NFT!
            </Typography>
          </Box>

          <Box>
            <Grid container spacing={6.25} justifyContent="center">
              {CREATION_CARDS.map((card) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  key={card.id}
                  display="flex"
                  justifyContent="center"
                >
                  <CreationCard {...card} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { Profile };
