import { useSignedinDispatchUserInfo } from "../features/authentication/hooks/useSignedinDispatchUserInfo";
import { auth } from "../utils/firebase";
import { logout, selectUser } from "../features/authentication/userSlice.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useSignedinDispatchUserInfo();

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Successfully signed out.");
        dispatch(logout());
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <>
      <div>HomePage</div>
      <button onClick={signOut}>Sign Out</button>
      <p>{user?.email}</p>
    </>
  );
}

export default HomePage;
