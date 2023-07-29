// hooks/useSignInEmailPassword.tsx
import { useState } from "react";
import { auth } from "../../../utils/firebase";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";

// Custom hook for signing in with email and password
export const useSignInEmailPassword = () => {
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>(""); // Move the state hook inside this custom hook
  const dispatch = useDispatch();

  const signInWithEmailPassword = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        values.email,
        values.password
      );
      const user = userCredential.user;
      dispatch(login({}));
      console.log(user);
    } catch (error) {
      const errorCode = (error as { code?: string })?.code;
      const errorMessage = (error as { message?: string })?.message;
      setPasswordErrorMessage(errorMessage ?? "An error occured");
      console.log(errorCode);
    }
  };

  return { passwordErrorMessage, signInWithEmailPassword }; // Return the function instead of just the error message
};
