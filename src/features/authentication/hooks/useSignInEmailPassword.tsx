// hooks/useSignInEmailPassword.tsx
import { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../../utils/firebase";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";

// Custom hook for signing in with email and password
export const useSignInEmailPassword = (
  setAuthenticating: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>(""); // Move the state hook inside this custom hook
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const signInWithEmailPassword = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      setAuthenticating(true)
      const userCredential = await auth.signInWithEmailAndPassword(
        values.email,
        values.password
      );
      const user = userCredential.user;
      dispatch(login({
        email: user?.email,
        displayName: user?.displayName
      }));
      navigate("/")
    } catch (error) {
      const errorCode = (error as { code?: string })?.code;
      const errorMessage = (error as { message?: string })?.message;
      setAuthenticating(false)
      setPasswordErrorMessage(errorMessage ?? "An error occured");
      console.log(errorCode);
    }
  };
  return { passwordErrorMessage, signInWithEmailPassword }; // Return the function instead of just the error message
};
