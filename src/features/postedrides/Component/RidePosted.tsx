import { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import RideComment from "./RideComment";
import RidePostComment from "./RidePostAComment";
import { db } from "../../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../../authentication/userSlice";
import { useSignedinDispatchUserInfo } from "../../authentication/hooks/useSignedinDispatchUserInfo";
import { CommentOutlined, HeartOutlined } from "@ant-design/icons";

interface RideData {
  id: string;
  user_name?: string;
  ride_title?: string;
  ride_description?: string;
}

type UserInfo = {
  displayName: string,
  photoUrl:string,
  userId: string
}

function RidePost() {
  const collectionRef = collection(db, `ridePosts`);
  const [snapshot, loading, error] = useCollection(collectionRef);
  // const [comments, setComments] = useState<{ [key: string]: string }>({});

  // const dispatch = useDispatch();
  // const loggedInUser = useSelector(selectUser);
  // useSignedinDispatchUserInfo();
  // const { displayName, photoUrl, userId }:UserInfo = loggedInUser ?? {} ;

  // const PostARideSubmit = async (
  //   e: React.FormEvent<HTMLFormElement>,
  //   id:string
  // ) => {
  //   e.preventDefault();
    
  //   try {
  //     await addDoc(collection(db, `ridePosts/${id}/comments`), {
  //       comment_user_name: displayName,
  //       user_comment: comments,
  //       likes: 0,
  //       user_id: userId
  //     });
  //     console.log(comments)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // };

  // const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>, id: string) => {
  //   // Update the comment for the specific card
  //   setComments((prevComments) => ({
  //     ...prevComments,
  //     [id]: e.target.value,
  //   }));
  // };

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
                  <CommentOutlined className='mr-2.5 mb-1 text-lg ' />
                    <span>125</span>
                  </div>
                  <div className="flex cursor-pointer items-center transition hover:text-slate-700 ">
                  <HeartOutlined className='mr-2.5 mb-1 text-lg '/>
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
            <RideComment path={`ridePosts/${post.id}/comments`} />
            <RidePostComment id={post.id}/>
          </div>
        </div>
      ))}
    </>
  );
}

export default RidePost;

