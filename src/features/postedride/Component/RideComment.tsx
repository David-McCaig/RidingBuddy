import React from 'react'

function RideComment() {
  return (
    <div className="flex bg-white    max-w-md md:max-w-2xl ">
   <div className="flex items-start  py-6">
      <img className="w-8 h-8 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar"/>
      <div className="">
         <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 -mt-1">Brad Adams </h2>
            <small className="text-sm text-gray-700">22h ago</small>
         </div>
         <p className="text-gray-700">Joined 12 SEP 2012. </p>
         <p className="mt-3 text-gray-700 text-sm">
            Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
         </p>
         <div className="mt-4 flex items-center">
            <div className="flex mr-2 text-gray-700 text-sm m">
               <svg fill="none" viewBox="0 0 24 24"  className="w-4 h-4 mr-1" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
               <span>12</span>
            </div>
         </div>
      </div>
   </div>
</div>
  )
}

export default RideComment