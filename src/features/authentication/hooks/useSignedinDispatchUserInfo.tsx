import { useEffect } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../../utils/firebase";
import { useDispatch } from "react-redux";
import { login, selectUser } from "../userSlice";
import { useSelector } from "react-redux";


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