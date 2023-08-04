import React from "react";
import { useState } from "react";
import ButtonPrimary from "../../../Components/ButtonPrimary";
import { GenericHTMLFormElement } from "axios";
import { db } from "../../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

function PoastAride() {
  const [titleValError, setTitleValError] = useState(false);
  const [messageValError, setMessageValError] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postMessage, setPostMessage] = useState("");

  const PostARideSubmit = async (
    e: React.FormEvent<GenericHTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "ridePosts"), {
        ride_description: postMessage,
        ride_title: postTitle,
        user_id: 3,
        user_name: "Dave",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="px-4 w-[30rem] lg:w-[50rem] bg-[#FAFAFA]">
      <h1 className="text-center text-2xl mb-8">Post a Ride</h1>
      <form onSubmit={PostARideSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              E-mail
            </label> */}
            <input
              className="appearance-none block w-full bg-[#FAFAFA] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-400"
              id="postTitle"
              value={postTitle}
              placeholder="Add a title"
              onChange={(e) => setPostTitle(e.target.value)}
            />
            {titleValError && (
              <p className="text-red-500 text-xs italic">Field Required</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Message
            </label> */}
            <textarea
              className=" no-resize appearance-none block w-full  text-gray-700 border bg-[#FAFAFA] border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400 h-48 resize-none"
              id="message"
              value={postMessage}
              placeholder="Add a description about the ride you'd like to organise"
              onChange={(e)=> setPostMessage(e.target.value)}
            ></textarea>
            {messageValError && (
              <p className="text-red-500 text-xs italic">Field Required</p>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <ButtonPrimary children={"Cancel"} />
          <ButtonPrimary children={"Post"} style={{ marginLeft: "2rem" }} />
        </div>
      </form>
    </div>
  );
}

export default PoastAride;
