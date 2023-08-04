import React from "react";

function FormErrorAlert({ message }: any) {
  return (
    <div
      className="flex w-full items-start gap-4 rounded border border-pink-100 bg-pink-50 px-4 py-3 text-sm text-pink-500"
      role="alert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        role="graphics-symbol"
        aria-labelledby="title-09 desc-09"
      >
        <title id="title-09">Icon title</title>
        <desc id="desc-09">A more detailed description of the icon</desc>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>
        <h3 className="mb-2 font-semibold">Uploading components failed!</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default FormErrorAlert;
