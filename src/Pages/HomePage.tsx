import NavBar from "../features/navigation/Components/NavBar";
import RidePosted from "../features/postedrides/Component/RidePosted";
import ProfileCard from "../Components/ProfileCard";
import RidePostAComment from "../features/postedrides/Component/RidePostAComment";
import RideComment from "../features/postedrides/Component/RideComment";
import { useSignedinDispatchUserInfo } from "../features/authentication/hooks/useSignedinDispatchUserInfo";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { selectUser } from "../features/authentication/userSlice.js";
import { db } from "../utils/firebase";
import { useAppSelector } from "../hooks/reduxTypeScriptHooks";

interface PostData {
  id: string;
  user_name?: string;
  ride_title?: string;
  ride_description?: string;
}

function HomePage() {

  const user = useAppSelector(selectUser);
  useSignedinDispatchUserInfo();

  const collectionRef = collection(db, `ridePosts`);
  const [snapshot, loading, error] = useCollection(collectionRef);

  const posts: PostData[] =
    snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() })) || [];

  return (
    <div className="flex sm:justify-center bg-gray-50 xl:px-32 ">
      <NavBar />
      <div className="flex flex-col">
        {posts?.map((post) => (
          <div key={post.id} className="pt-12">
            <section className="flex justify-center mt-4 ">
              <div className="rounded-xl border p-5 drop-shadow-sm w-9/12 xl:w-11/12 bg-white">
                <RidePosted
                  id={post.id || ""}
                  userName={post.user_name || ""}
                  rideTitle={post.ride_title || ""}
                  rideDescription={post.ride_description || ""}
                  loading={loading}
                  error={error}
                />
                <RidePostAComment id={post.id} />
                <RideComment path={`ridePosts/${post.id}/comments`} queryLimit={3} />
              </div>
            </section>
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
