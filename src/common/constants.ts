import AboutIcon1 from 'assets/img/about-icon1.png';
import AboutIcon2 from 'assets/img/about-icon2.png';
import AboutIcon3 from 'assets/img/about-icon3.png';
import Project1 from 'assets/img/project1.png';
import Project2 from 'assets/img/project2.png';
import Creation1 from 'assets/img/creation1.avif';
import Creation2 from 'assets/img/creation2.avif';
import Creation3 from 'assets/img/creation3.avif';
import Creation4 from 'assets/img/creation4.avif';
import Creation5 from 'assets/img/creation5.avif';
import Creation6 from 'assets/img/creation6.avif';

const ABOUT_POINTS = [
  {
    title: 'Connect with creators',
    description:
      'Beats Per Mint (BPM) is a subscription-based platform that allows fans to connect with artists and communities through blockchain technology. ',
    imageSrc: AboutIcon1,
  },
  {
    title: 'Contribute your content',
    description:
      'Featured artists and projects create content that community members can add to. All content is then accessed through a subscription. ',
    imageSrc: AboutIcon2,
  },
  {
    title: 'Archive indefinitely',
    description:
      'As content is created, it’s added to a project community archive and forms the community’s NFT.',
    imageSrc: AboutIcon3,
  },
];

const PROJECT_CARDS = [
  {
    title: 'Piano Lessons',
    subtitle: 'Martin Jones',
    details: [
      'Subscription detail',
      'More of what’s included ',
      'Another subscription detail',
      'More details here',
    ],
    imageSrc: Project1,
    price: 90,
  },

  {
    title: 'Drummers gig',
    subtitle: 'Erik Brock',
    details: [
      'Subscription detail',
      'More of what’s included ',
      'Another subscription detail',
      'More details here',
    ],
    imageSrc: Project2,
    price: 110,
  },
];

const CREATION_CARDS = [
  {
    title: 'Turntable',
    subtitle: 'Michael Boyson',
    imageSrc: Creation1,
    id: 1,
  },
  {
    title: 'Rock Gigs',
    subtitle: 'Elliot Richards',
    imageSrc: Creation2,
    id: 2,
  },
  {
    title: 'Music standups',
    subtitle: 'Bryan Locks',
    imageSrc: Creation3,
    id: 3,
  },
  {
    title: 'Repetition routine',
    subtitle: 'Craig Bowers',
    imageSrc: Creation4,
    id: 4,
  },
  {
    title: 'Detox routine',
    subtitle: 'Derek Spacers',
    imageSrc: Creation5,
    id: 5,
  },
  {
    title: 'Gig photos as NFTs',
    subtitle: 'Kaizer Sosa',
    imageSrc: Creation6,
    id: 6,
  },
];

export { ABOUT_POINTS, PROJECT_CARDS, CREATION_CARDS };
