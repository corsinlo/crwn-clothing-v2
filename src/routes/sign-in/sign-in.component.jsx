import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect, //another way to utlize different kind of log ins
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { SignInMethod } from 'firebase/auth';
import { SignUpForm } from '../../components/sign-up-form/sign-up-form.component';
const SignIn = () => {
  /*
    useEffect(async () => {
      const response = await getRedirectResult(auth); //get me the response for the redirect that happen basing on that auth, which will notify firebase basingon where is used
      if (response) {
        const userDocRef = createUserDocumentFromAuth(response.user);
      }
    }, []);*/


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    //detstructuring console response object to make obj userDocRef = doc(db, 'user', userAuth.uid) to have the option set data inour database getDoc will do the rest
    const userDocRef = createUserDocumentFromAuth(user); // no matter what happen we get an element 
  };

  /*const logGoogleRedirectUser = async () => { //NOTICE YOU NEED TO FIND A WAY TO RETAIN THE STORE SINCE YOU LEAVING THE DOMAIN (UNMOUNT)
    const { user } = await signInWithGoogleRedirect();
    //detstructuring console response object to make obj userDocRef = doc(db, 'user', userAuth.uid) to have the option set data inour database getDoc will do the rest

  };*/

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
      {/*<button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button>*/}
    </div>
  );
};

export default SignIn;
