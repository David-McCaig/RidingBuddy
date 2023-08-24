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


interface PostData {
  id: string;
  user_name?: string;
  ride_title?: string;
  ride_description?: string;
}

function HomePage() {
  const user = useSelector(selectUser);
  useSignedinDispatchUserInfo();

  const collectionRef = collection(db, `ridePosts`);
  const [snapshot, loading, error] = useCollection(collectionRef);
  console.log(loading)
  const posts: PostData[] =
    snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() })) || [];

  return (
    <div className="flex sm:justify-center bg-gray-50 xl:px-32 ">
      <NavBar />
      <div className="flex flex-col">
        {posts?.map((post) => (
          <div key={post.id} className="pt-12 ">
            <RidePosted id={post.id || ''} userName={post.user_name || ''} rideTitle={post.ride_title || ''} rideDescription={post.ride_description || ''}  loading={loading} error={error} />
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
