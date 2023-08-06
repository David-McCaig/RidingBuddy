import React from "react";
import { useState } from "react";
import {
  HomeOutlined,
  AlignLeftOutlined,
  SendOutlined,
  MessageOutlined,
  ProfileOutlined,
  GlobalOutlined,
  LoginOutlined,
  FormOutlined
} from "@ant-design/icons";

function NavBar() {
  const [showNavBar, setShowNavBar] = useState(true);

  const openNavClick = () => {
    showNavBar && setShowNavBar(false);
  };

  const closeNavClick = () => {
    !showNavBar && setShowNavBar(true);
  };

  return (
    <nav>
      <button
        onClick={openNavClick}
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <AlignLeftOutlined className="text-2xl" />
      </button>

      <aside
        className={
          showNavBar
            ? `fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0`
            : "fixed top-0 left-0 z-40 w-64 h-screen transition-transform  sm:translate-x-0"
        }
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <button
              onClick={closeNavClick}
              type="button"
              className="inline-flex items-center ml-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <AlignLeftOutlined className="text-2xl" />
            </button>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HomeOutlined className="text-2xl" />
                <span className="ml-3 mt-2">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <SendOutlined className="text-2xl" />
                <span className="flex-1 ml-3 whitespace-nowrap mt-1">
                  Post a ride
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MessageOutlined className="text-2xl" />
                <span className="flex-1 ml-3 whitespace-nowrap mt-1">Messages</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ProfileOutlined className="text-2xl" />
                <span className="flex-1 ml-3 whitespace-nowrap mt-1">Profile</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <GlobalOutlined className="text-2xl" />
                <span className="flex-1 ml-3 whitespace-nowrap mt-1">Map</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
              <LoginOutlined className="text-2xl " />
                <span className="flex-1 ml-3 whitespace-nowrap mt-1">Login</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FormOutlined className="text-2xl " />
                <span className="flex-1 ml-3 whitespace-nowrap mt-1">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </nav>
  );
}

export default NavBar;
