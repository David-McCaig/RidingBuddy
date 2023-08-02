import React from "react";

function ButtonPrimary({ children, style }: any) {
  return (
      <button
        style={style}
        className="w-32 h-11 shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      >
        {children}
      </button>
  );
}

export default ButtonPrimary;
