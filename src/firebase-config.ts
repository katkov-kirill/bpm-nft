import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyALd-HoKW4qvgNSgOe_rUGl98E9ZowbeJc',
  authDomain: 'bpm-nft.firebaseapp.com',
  projectId: 'bpm-nft',
  storageBucket: 'bpm-nft.appspot.com',
  messagingSenderId: '672818521676',
  appId: '1:672818521676:web:4de33b5938bee64f2036e9',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
