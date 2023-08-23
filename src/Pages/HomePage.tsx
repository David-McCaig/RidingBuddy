import NavBar from "../features/navigation/Components/NavBar";
import LoadingBar from "../Components/LoadingBar";
import RidePosted from "../features/postedrides/Component/RidePosted";
import ProfileCard from "../Components/ProfileCard";
import { useSignedinDispatchUserInfo } from "../features/authentication/hooks/useSignedinDispatchUserInfo";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { logout, selectUser } from "../features/authentication/userSlice.js";
import { db } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface RideData {
  id: string;
  user_name?: string;
  ride_title?: string;
  ride_description?: string;
}

function HomePage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useSignedinDispatchUserInfo();

  const collectionRef = collection(db, `ridePosts`);
  const [snapshot, loading, error] = useCollection(collectionRef);

  const posts: RideData[] =
    snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() })) || [];

  return (
    <div className="flex sm:justify-center bg-gray-50 xl:px-32 ">
      <NavBar />
      {/* <div className="sm:w-[15rem] lg:w-[18rem] xl:w-[100px] h-[20rem]"></div> */}
      <div className="flex flex-col">
        {posts?.map((post) => (
          <div key={post.id} className="pt-12 ">
            <RidePosted post={post} loading={loading} error={error} />
          </div>
        ))}
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
