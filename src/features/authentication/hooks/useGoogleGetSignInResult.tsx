import { useEffect } from "react";
import { auth } from "../../../utils/firebase";

export const useGoogleGetSignInResult = (
  setAuthenticating: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    const handleRedirectSignIn = async () => {
      try {
        setAuthenticating(true);
        await auth.getRedirectResult();
      } catch (err) {
      } finally {
        setAuthenticating(false);
      }
    };
    handleRedirectSignIn();
  }, []);
};
