import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import ButtonPrimary from "../../../Components/ButtonPrimary";
import LoadingBar from "../../../Components/LoadingBar";
import FormErrorAlert from "../../../Components/FormErrorAlert";
import { GenericHTMLFormElement } from "axios";
import { db } from "../../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

function PoastAride() {
  const [titleValError, setTitleValError] = useState(false);
  const [messageValError, setMessageValError] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postMessage, setPostMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const PostARideSubmit = async (
    e: React.FormEvent<GenericHTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "ridePosts"), {
        ride_description: postMessage,
        ride_title: postTitle,
        user_id: 3,
        user_name: "Dave",
      });
      setLoading(false);
      navigate("/");
    } catch (e) {
      setError("Error posting ride: " + e);
    }
  };

  if (loading) {
    return <LoadingBar />;
  }

  return (
    <div className="px-4 w-[30rem] lg:w-[50rem] bg-[#FAFAFA]">
      <h1 className="text-center text-2xl mb-8">Post a Ride</h1>
      <form onSubmit={PostARideSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
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
            <textarea
              className=" no-resize appearance-none block w-full  text-gray-700 border bg-[#FAFAFA] border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400 h-48 resize-none"
              id="message"
              value={postMessage}
              placeholder="Add a description about the ride you'd like to organise"
              onChange={(e) => setPostMessage(e.target.value)}
            ></textarea>
            {messageValError && (
              <p className="text-red-500 text-xs italic">Field Required</p>
            )}
          </div>
        </div>
        <div className="mb-8">
        {error && <FormErrorAlert message={error}/>}
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
