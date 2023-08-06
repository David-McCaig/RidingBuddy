import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

function LoadingBar() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LoadingOutlined className="text-8xl " />
    </div>
  );
}

export default LoadingBar;
