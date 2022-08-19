import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBSdjFG21x6Wcx7SF_6tELTDjOPXIV5WIM",
  authDomain: "crwn-clothing-db-a51a5.firebaseapp.com",
  projectId: "crwn-clothing-db-a51a5",
  storageBucket: "crwn-clothing-db-a51a5.appspot.com",
  messagingSenderId: "74291126244",
  appId: "1:74291126244:web:a0d464d2c4d3141e79f1f1"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ //describe how provider will behave
  prompt: 'select_account', // forcing account selection
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
