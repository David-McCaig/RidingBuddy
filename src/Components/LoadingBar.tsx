import React from 'react'

function LoadingBar() {

  return (
    <>
    <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-live="polite"
    aria-busy="true"
    aria-labelledby="title-08a desc-08a"
    className="h-24 w-24"
  >
    <title id="title-08a">Icon title</title>
    <desc id="desc-08a">Some desc</desc>
    <path
      d="M7 8H3V16H7V8Z"
      className="animate animate-bounce fill-emerald-500 "
    />
    <path
      d="M14 8H10V16H14V8Z"
      className="animate animate-bounce fill-emerald-500 [animation-delay:.2s]"
    />
    <path
      d="M21 8H17V16H21V8Z"
      className="animate animate-bounce fill-emerald-500 [animation-delay:.4s]"
    />
  </svg>
  
</> )
}

export default LoadingBar