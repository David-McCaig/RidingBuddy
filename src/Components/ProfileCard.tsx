import React from "react";

interface ProfileCardProps {
  photo: string;
  userName: string
  useProfilePhoto: string
}

function ProfileCard({ photo, userName, useProfilePhoto }:ProfileCardProps ) {
  return (
    <>
    <div
      className="hidden xl:flex xl:w-[258px] xl:h-[10rem] " // Remove the sticky class from here
    >
      <div
        className="xl:w-[258px] mt-12 break-words bg-white shadow-lg rounded-xl"
        style={{
          position: "fixed",
          top: "5rem", // Adjust this value as needed (including padding)
           // Add a zIndex to make sure it appears above other content
        }}
      >
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="">
                <img
                  src={useProfilePhoto}
                  className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div className="w-full text-center mt-20">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    2,454
                  </span>
                  <span className="text-sm text-slate-400">Followers</span>
                </div>

                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    564
                  </span>
                  <span className="text-sm text-slate-400">Following</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {userName}
            </h3>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  An artist of considerable range, Mike is the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ProfileCard;
