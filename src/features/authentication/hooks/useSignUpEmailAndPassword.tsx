// hooks/useSignInEmailPassword.tsx
import { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../../utils/firebase";

// Custom hook for signing in with email and password
export const useSignUpEmailPassword = (
  setAuthenticating: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>(""); // Move the state hook inside this custom hook
  const navigate = useNavigate();
  const signUpEmailPassword = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      setAuthenticating(true)
      await auth.createUserWithEmailAndPassword(values.email, values.password);
      navigate("/setprofile");
    } catch (error) {
      const errorCode = (error as { code?: string })?.code;
      const errorMessage = (error as { message?: string })?.message;
      setAuthenticating(false)
      setPasswordErrorMessage(errorMessage ?? "An error occured");
      console.log(errorCode);
    }
  };

  return { passwordErrorMessage, signUpEmailPassword }; // Return the function instead of just the error message
};
