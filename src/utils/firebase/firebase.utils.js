import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'; // service Auth of Firebase


import {
  getFirestore,
  doc, //get doc instance
  getDoc, // actually get dec
  setDoc, //actually edit doc
} from 'firebase/firestore'; // service DB of Firebase


const firebaseConfig = {
  apiKey: "AIzaSyBSdjFG21x6Wcx7SF_6tELTDjOPXIV5WIM",
  authDomain: "crwn-clothing-db-a51a5.firebaseapp.com",
  projectId: "crwn-clothing-db-a51a5",
  storageBucket: "crwn-clothing-db-a51a5.appspot.com",
  messagingSenderId: "74291126244",
  appId: "1:74291126244:web:a0d464d2c4d3141e79f1f1"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); //googleauth provider for firebase, can be other

provider.setCustomParameters({ //describe how provider will behave
  prompt: 'select_account', // forcing account selection
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth(); // rules for authtication
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); // 
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

//crete db

export const db = getFirestore(); //database name in console
//crete method for db

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'user', userAuth.uid);
  //create temp istance for doc with reference db, collection name, unique ID, for the Auth case will be the uid we get as user from dev in console

  const userSnapshot = await getDoc(userDocRef); // check if insatnce obj in database exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date(); //find out when user get in
    try { //in case user snapshot does not exist
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log('error in creating the user', error.message);
    }
    return userDocRef;
  }
}
