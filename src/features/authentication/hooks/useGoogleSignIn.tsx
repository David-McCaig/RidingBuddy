import { useNavigate } from "react-router";
import { Providers } from "../../../utils/firebase";
import { getAuth, signInWithRedirect } from "firebase/auth";

export const useGoogleSignIn = (
  setAuthenticating: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const navigate = useNavigate();

  const googleSignIn = async () => {
    const auth = getAuth();
    setAuthenticating(true);
  
    try {
      // await auth.signInWithRedirect(Providers.google);
      await signInWithRedirect(auth, Providers)
    } catch (errorMessage) {
      setErrorMessage((errorMessage as Error).message);
    } finally {
      setAuthenticating(false);
    }

  };

  return { googleSignIn } ;
};
