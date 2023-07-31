import React from 'react'
import * as Yup from "yup";
import { useState } from 'react';
import { auth } from '../../../utils/firebase';
import UploadProfile from '../../../Components/UploadProfile';
import { useNavigate } from 'react-router';


function SetUpProfile() {

    const [userName, setUserName] = useState('')
    const navigate = useNavigate();

  const profileInfoSubmit = () => {
    auth.currentUser?.updateProfile( {
        displayName: 'test',
        photoURL: "https://res.cloudinary.com/dui1zm17r/image/upload/v1690611096/ridingBuddy/david-mccaig_cropped_siuqcm.webp"
    })
    .then((res) => {
        console.log(res)
        navigate('/')
    })
    .catch((err) => {
        console.log(err)
    })
  }
  
    return (
    <section className="antialiased h-screen w-full flex justify-center items-center ">
    <div className="sm:mx-px sm:w-full w-11/12  max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300 ">
      <h1 className="text-4xl font-medium text-center">Set Up Profile</h1>

          <form onSubmitCapture={profileInfoSubmit} className="my-10">
            <UploadProfile/>
            <div className="flex flex-col space-y-5">
              <label>
                <p className="font-medium text-slate-700 pb-2 mt-8">User Name</p>
                <input
                  id="userName"
                  name="userName"
                  type="userName"
                  onChange={e => setUserName(e.target.value)}
                  autoComplete="userName"
                  className= "w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none "
                  placeholder="Enter your User Name"
                />
              </label>
              <div className="flex flex-row justify-between">
              </div>
              <button
                type="submit"
                className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              >

                <span>Save</span>
              </button>
            </div>
          </form>
    </div>
  </section>
  )
}

export default SetUpProfile