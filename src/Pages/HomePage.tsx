import NavBar from "../features/navigation/Components/NavBar";
import LoadingBar from "../Components/LoadingBar";
import PostedRides from "../features/postedrides/index";
import ProfileCard from "../Components/ProfileCard";
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

  console.log(user);

  return (
    <div className="flex sm:justify-center bg-gray-50 xl:px-32 ">
        <NavBar />
      {/* <div className="sm:w-[15rem] lg:w-[18rem] xl:w-[100px] h-[20rem]"></div> */}
      <div className="pt-12 ">
        <PostedRides />
      </div>

      <div className="pt-[5rem]">
        {user && (
          <ProfileCard
            photo={""}
            userName={user?.displayName}
            useProfilePhoto={user?.photoUrl}
          />
        )}
      </div>
    </div>
  );
}

export default HomePage;
