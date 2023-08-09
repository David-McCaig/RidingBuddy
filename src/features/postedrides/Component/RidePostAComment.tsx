import React from "react";
import { db } from "../../../utils/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { useState } from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../../authentication/userSlice";
import { useSignedinDispatchUserInfo } from "../../authentication/hooks/useSignedinDispatchUserInfo";

type UserInfo = {
  displayName: string,
  photoUrl:string,
  userId: string
}
interface RideDataProps {
  id: string;
}

function RidePostComment({id}:RideDataProps) {

  const [comment, setComment] = useState('');
  
  const loggedInUser = useSelector(selectUser);
  useSignedinDispatchUserInfo();
  const { displayName, userId }:UserInfo = loggedInUser ?? {} ;


  const PostARideSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, `ridePosts/${id}/comments`), {
        comment_user_name: displayName,
        user_comment: comment,
        likes: 0,
        user_id: userId
      });
    setComment('')
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <>
    
      <div className="flex border-t pt-4">
      <img
        className="w-8 h-8 rounded-full object-cover mr-2 shadow"
        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
      />
      <form className="w-full h-16 flex" onSubmit={PostARideSubmit}>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          name="postContent"
          placeholder="Add a comment"
          className="ml-2 w-full h-16 resize-none outline-none focus:bg-neutral-50 rounded-md"
        />
        <button className="text-slate-400 ml-3 ">Post</button>
      </form>
    </div>
    
</>
  );
}

export default RidePostComment;
