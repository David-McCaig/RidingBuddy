import { useCollection } from 'react-firebase-hooks/firestore';
import RideComment from "./RideComment";
import RidePostComment from "./RidePostAComment";
import { collection } from "firebase/firestore";
import { db } from "../../../utils/firebase";

interface RideData {
  id: string;
  user_name?: string;
  ride_title?: string;
  ride_description?: string;
}

function RidePost() {
  const collectionRef = collection(db, `ridePosts`);
  const [snapshot, loading, error] = useCollection(collectionRef);

  // Handle loading and error states if needed
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!snapshot || snapshot.empty) {
    return <div>No data found.</div>;
  }

  // Extract data and document IDs from the snapshot
  const docs:RideData[] = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() })) || [];

  return (
    <>
      {docs?.map((post) => (
        <div key={post.id} className="flex mt-4 justify-center">
          <div className="rounded-xl border p-5 drop-shadow-sm w-9/12 bg-white">
            <div className="flex w-full items-center justify-between border-b pb-3">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
                <div className="text-lg font-bold text-slate-700">{post.user_name}</div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-xs text-neutral-500">2 hours ago</div>
              </div>
            </div>

            <div className="mt-4 mb-6">
              <h3 className="mb-3 text-xl font-bold">
                {post.ride_title}
              </h3>
              <div className="text-sm text-neutral-600">
                {post.ride_description}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-slate-500 md:mb-2 lg:mb-4">
                <div className="flex space-x-4 md:space-x-8">
                  <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1.5 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {/* ... */}
                    </svg>
                    <span>125</span>
                  </div>
                  <div className="flex cursor-pointer items-center transition hover:text-slate-600 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1.5 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {/* ... */}
                    </svg>
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
            <RideComment path={`ridePosts/${post.id}/comments`}/>
            <RidePostComment  />
          </div>
        </div>
      ))}
    </>
  );
}

export default RidePost;

