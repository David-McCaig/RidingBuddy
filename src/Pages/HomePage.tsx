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

  // if (!user) {
  //   return (
  //       <LoadingBar />
  //   );
  // }

  return (
    <div className="flex  ">
      <NavBar />
      <div className="sm:w-[15rem] lg:w-[18rem] xl:w-[135px] h-[20rem]"></div>
      <div className="flex-1 overflow-y-auto">
        <PostedRides />
      </div>
      {/* <div className="xl:w-[25rem] xl:h-[10rem]"> */}
      <div className="hidden right-6 top-16 xl:flex xl:pr-36 2xl:pr-64">
        <ProfileCard
          photo={""}
          userName={"Brock Cambel"}
          useProfilePhoto={
            "https://res.cloudinary.com/dui1zm17r/image/upload/v1669911283/cld-sample.jpg"
          }
        />
      {/* </div> */}
      </div>
    </div>
  );
}

export default HomePage;
