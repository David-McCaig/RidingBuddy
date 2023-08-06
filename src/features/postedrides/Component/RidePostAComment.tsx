import React from "react";
import { useEffect } from "react";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from "../../../utils/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";



function RidePostComment() {
  
const postACommentSubmit = (e:React.FormEvent) => {
  e.preventDefault()
} 


  return (
    <>
    
      <div className="flex">
      <img
        className="w-8 h-8 rounded-full object-cover mr-2 shadow"
        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
      />
      <form className="w-full h-16 flex" onSubmit={postACommentSubmit}>
        <textarea
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
