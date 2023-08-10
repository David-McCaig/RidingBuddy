import { useCollection } from "react-firebase-hooks/firestore";
import RideComment from "./RideComment";
import RidePostAComment from "./RidePostAComment";
import { db } from "../../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import LoadingBar from "../../../Components/LoadingBar";
import { CommentOutlined, HeartOutlined } from "@ant-design/icons";

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
    return (
      <div>
        <LoadingBar />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!snapshot || snapshot.empty) {
    return <div>No data found.</div>;
  }

  // Extract data and document IDs from the snapshot
  const docs: RideData[] =
    snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() })) || [];

  return (
    <>
      <div className="">
        {/* <div className="sm:w-72 sm:h-9 xl:w-80"></div> */}
        <div className="flex flex-col">
          {docs?.map((post) => (
            <div key={post.id} className="flex justify-center w-[100%] mt-4 ">
              <div className="rounded-xl border p-5 drop-shadow-sm w-9/12 bg-white">
                <div className="flex w-full items-center justify-between border-b pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
                    <div className="text-lg font-bold text-slate-700">
                      {post.user_name}
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="text-xs text-neutral-500">2 hours ago</div>
                  </div>
                </div>

                <div className="mt-4 mb-6">
                  <h3 className="mb-3 text-xl font-medium md:text-2xl">
                    {post.ride_title}
                  </h3>
                  <div className="text-sm md:text-base text-neutral-600">
                    {post.ride_description}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-slate-500 md:mb-2 lg:mb-4">
                    <div className="flex space-x-4 md:space-x-8">
                      <div className="flex cursor-pointer items-center transition hover:text-slate-700">
                        <CommentOutlined className="mr-2.5 mb-1 text-lg " />
                        <span>125</span>
                      </div>
                      <div className="flex cursor-pointer items-center transition hover:text-slate-700 ">
                        <HeartOutlined className="mr-2.5 mb-1 text-lg " />
                        <span>4</span>
                      </div>
                    </div>
                  </div>
                </div>
                <RideComment path={`ridePosts/${post.id}/comments`} />
                <RidePostAComment id={post.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RidePost;
