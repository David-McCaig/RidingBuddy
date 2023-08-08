import React from "react";
import { useEffect } from "react";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from "../../../utils/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import RideComment from "./RideComment";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../../authentication/userSlice";
import { useSignedinDispatchUserInfo } from "../../authentication/hooks/useSignedinDispatchUserInfo";

type UserInfo = {
  displayName: string,
  photoUrl:string,
  userId: string
}


function RidePostComment({id}:any) {

  const [comment, setComment] = useState('');
  
  const dispatch = useDispatch();
  const loggedInUser = useSelector(selectUser);
  useSignedinDispatchUserInfo();
  const { displayName, photoUrl, userId }:UserInfo = loggedInUser ?? {} ;


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
    
      <div className="flex">
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
          className="ml-2 w-full h-16 resize-none"
        />
        <button className="text-slate-500">Post</button>
      </form>
    </div>
    
</>
  );
}

export default RidePostComment;
