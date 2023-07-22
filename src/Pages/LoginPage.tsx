import { useEffect, useState } from "react";
import GoogleButton from 'react-google-button'
import firebase from "firebase/app";
import { auth, Providers } from "../utils/firebase.js";




function LoginPage() {

  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [user, setUser] = useState<string | null>(null)
  


const SignInWithSocialMedia = (provider: firebase.auth.AuthProvider) =>
  new Promise<firebase.auth.UserCredential>((resolve, reject) => {
    // Set useDeviceLanguage to true to avoid COOP error
    auth.useDeviceLanguage();
    auth.signInWithPopup(provider)
      .then(result => resolve(result))
      .catch(error => reject(error));
  });

  const googleSignInClick = (provider: firebase.auth.AuthProvider) => {
    if (error !== '') setError('');

    setAuthenticating(true);

    SignInWithSocialMedia(provider)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        setAuthenticating(false);
        setError(error.message);
      });
  }


  const users = auth.currentUser?.email || null
  console.log(users)

 useEffect(() => {
  setUser(users || null)
 },[])

  const signOut = () => {
    auth.signOut()
      .then(() => {
        console.log("Successfully signed out.");
        // You may want to redirect the user to another page after sign-out.
      })
      .catch(error => {
        console.error("Error signing out:", error);
      });
  };


  return (
    <div className="AuthLogin">
      <div className="auth-main-container">
        <div>
          <h1 >Welcome to React App</h1>
          <p >Please Signup to continue by choosing one of the options below.</p>
        </div>
        <div className="auth-btn-wrapper">
          <GoogleButton
            // disabled={authenticating}
            onClick={() => googleSignInClick(Providers.google)}
          />
            
        </div>
        <button onClick={signOut}>Sign Out</button>
      </div>
      {users}
    </div>
  );
}

export default LoginPage;
