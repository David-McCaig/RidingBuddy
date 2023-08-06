import React from "react";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from "../../../utils/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

function RideComment({ path }:any) {

  const query = collection(db, path)
  const [docs, loading, error] = useCollectionData (query);
  console.log(docs)


  return (
    <>
    {docs?.map((comment) => (
    <div className="flex bg-white    max-w-md md:max-w-2xl ">
      <div className="flex items-start  py-6">
        <div className="">

        <div className="">

          <div className="flex items-center justify-start gap-4">
          <img
          className="w-8 h-8 rounded-full object-cover mr-2 shadow"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />
            <h2 className="text-lg font-semibold text-gray-900 -mt-1">
              Brad Adams{" "}
            </h2>
            <small className="text-sm text-gray-700">22h ago</small>
          </div>
          </div>
          <div>
            <p className="mt-3 text-gray-700 text-sm">
              {comment.comment}
            </p>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex mr-2 text-gray-700 text-sm m">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    ))}
    </>
  );
}

export default RideComment;
