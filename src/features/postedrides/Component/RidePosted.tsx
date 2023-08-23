import { useCollection } from "react-firebase-hooks/firestore";
import RideComment from "./RideComment";
import RidePostAComment from "./RidePostAComment";
import { db } from "../../../utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import LoadingBar from "../../../Components/LoadingBar";
import { CommentOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../authentication/userSlice";

interface RideData {
  id: string;
  user_id: string;
  user_name?: string;
  ride_title?: string;
  ride_description?: string;
}

function RidePost({ loading, error, post }: any) {
  const loggedInUser = useSelector(selectUser);
  const [likes, setLikes] = useState<{ userId: string }[] | null>([]);

  // Extract data and document IDs from the snapshot

  const likesRef = collection(db, "likes");

  const PostALike = async (postId: string) => {
    try {
      await addDoc(likesRef, {
        user_id: loggedInUser?.userId,
        post_id: postId,
      });
      getLike();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteALike = async () => {
    const likesToDeleteQuery = query(
      likesRef,
      where("post_id", "==", post.id),
      where("user_id", "==", loggedInUser.userId)
    );
    try {
      const likeToDeleteData = await getDocs(likesToDeleteQuery);
      const likeToDelete = doc(db, "likes", likeToDeleteData.docs[0].id);
      await deleteDoc(likeToDelete);
      getLike();
    } catch (e) {
      console.log(e);
    }
  };

  const likesDoc = query(likesRef, where("post_id", "==", post.id));

  const getLike = async () => {
    const data = await getDocs(likesDoc);
    if (loggedInUser) {
      setLikes(data.docs.map((doc) => ({ userId: doc.data().user_id })));
    }
  };

  const userLike: any = loggedInUser
    ? likes?.filter((like) => like?.userId === loggedInUser.userId)
    : [];

  useEffect(() => {
    getLike();
  }, []);

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

  if (!post || post.empty) {
    return <div>No data found.</div>;
  }

  return (
    <section key={post?.id} className="flex justify-center mt-4 ">
      <div className="rounded-xl border p-5 drop-shadow-sm w-9/12 xl:w-11/12 bg-white">
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
            <div className="text-lg font-bold text-slate-700">
              {post?.user_name}
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="text-xs text-neutral-500">2 hours ago</div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <h3 className="mb-3 text-xl font-medium md:text-2xl">
            {post?.ride_title}
          </h3>
          <div className="text-sm md:text-base text-neutral-600">
            {post?.ride_description}
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
                {userLike?.length > 0 ? (
                  <HeartFilled
                    onClick={deleteALike}
                    className="mr-2.5 mb-1 text-lg text-red-600 "
                  />
                ) : (
                  <HeartOutlined
                    onClick={() => PostALike(post.id)}
                    className="mr-2.5 mb-1 text-lg  "
                  />
                )}
                <span>{likes?.length}</span>
              </div>
            </div>
          </div>
        </div>
        <RideComment path={`ridePosts/${post?.id}/comments`} />
        <RidePostAComment id={post?.id} />
      </div>
    </section>
  );
}

export default RidePost;
