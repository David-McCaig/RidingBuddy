import { useNavigate } from "react-router";
import { auth, Providers } from "../../../utils/firebase";

export const useGoogleSignIn = async (
  setAuthenticating: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const navigate = useNavigate();
  setAuthenticating(true);
  try {
    await auth.signInWithRedirect(Providers.google);
    navigate("/")
  } catch (errorMessage) {
    setAuthenticating(false);
    setErrorMessage((errorMessage as Error).message);
  }
};
