import { useEffect } from "react";
import { auth } from "../../../utils/firebase";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";



export const useSignedinDispatchUserInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login({
          email: user?.email,
          displayName: user?.displayName || null
        }));
      } 
    }); 
    return () => unsubscribe(); 
  }, []);
}