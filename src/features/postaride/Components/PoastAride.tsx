import React from "react";
import { useState } from "react";
import ButtonPrimary from "../../../Components/ButtonPrimary";

function PoastAride() {

    const [titleValError, setTitleValError] = useState(false)
    const [messageValError, setMessageValError] = useState(false)

  return (
    <div className="px-4 w-[30rem] lg:w-[50rem] bg-[#FAFAFA]">
      <h1 className="text-center text-2xl mb-8">Post a Ride</h1>
      <form className="">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              E-mail
            </label> */}
            <input
              className="appearance-none block w-full bg-[#FAFAFA] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-400"
              id="email"
              type="email"
              placeholder="Add a title"
            />
            {titleValError && <p className="text-red-500 text-xs italic">
              Field Required
            </p>}
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
              placeholder="Add a description about the ride you'd like to organise"
            ></textarea>
            {messageValError && <p className="text-red-500 text-xs italic">
              Field Required
            </p>}
          </div>
        </div>
        <div className="flex justify-end">
            <ButtonPrimary children={'Cancel'} />
            <ButtonPrimary children={'Post'} style={{marginLeft: '2rem'}} />
        </div>
      </form>
    </div>
  );
}

export default PoastAride;
