import { useEffect } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../../utils/firebase";
import { useDispatch } from "react-redux";
import { login, selectUser } from "../userSlice";

export const useSignedinDispatchUserInfoAndNavigateHome = () => {
    const dispatch = useDispatch();
    const currentUser = auth.currentUser;
    const navigate = useNavigate();
    useEffect(() => {
        if (currentUser) {
          dispatch(
            login({
              email: currentUser?.email,
            })
          );
          navigate("/");
        }
      }, [currentUser]);
}