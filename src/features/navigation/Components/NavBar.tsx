import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  AlignLeftOutlined,
  SendOutlined,
  MessageOutlined,
  ProfileOutlined,
  GlobalOutlined,
  LoginOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { auth } from "../../../utils/firebase";
import { useDispatch } from "react-redux";
import { logout, selectUser } from "../../authentication/userSlice";

type UserInfo = {
  displayName: string;
  photoUrl: string;
  userId: string;
};

function NavBar() {
  const [showNavBar, setShowNavBar] = useState(true);

  const loggedInUser = useSelector(selectUser);
  const { displayName, userId }: UserInfo = loggedInUser ?? {};
  const dispatch = useDispatch();

  const openNavClick = () => {
    showNavBar && setShowNavBar(false);
  };

  const closeNavClick = () => {
    !showNavBar && setShowNavBar(true);
  };

  const signOutClick = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Successfully signed out.");
        dispatch(logout());
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
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
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                to={"/"}
              >
                <HomeOutlined className="text-2xl" />
                <span className="ml-3 mt-2">Home</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                to={"/postaride"}
              >
                <SendOutlined className="text-2xl" />
                <span className="flex-1 ml-3 whitespace-nowrap mt-1">
                  Post a ride
                </span>
              </Link>
            </li>
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <MessageOutlined className="text-2xl" />
                <span className="flex-1 ml-3 whitespace-nowrap mt-1">
                  Messages
                </span>
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <ProfileOutlined className="text-2xl" />
                <span className="flex-1 ml-3 whitespace-nowrap mt-1">
                  Profile
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
            {userId ? (
              <li>
                <button
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  onClick={signOutClick}
                >
                  <FormOutlined className="text-2xl " />
                  <span className="flex-1 ml-3 whitespace-nowrap mt-1">
                    Sign out
                  </span>
                </button>
              </li>
            ) : (
              <div>
                <li>
                  <Link
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    to={"/login"}
                  >
                    <LoginOutlined className="text-2xl " />
                    <span className="flex-1 ml-3 whitespace-nowrap mt-1">
                      Login
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    to={"/signup"}
                  >
                    <FormOutlined className="text-2xl " />
                    <span className="flex-1 ml-3 whitespace-nowrap mt-1">
                      Sign Up
                    </span>
                  </Link>
                </li>
              </div>
            )}
            <li>
              <div className="flex items-center pl-1 pt-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div className="relative inline-flex items-center justify-center w-8 h-8 text-white rounded-full">
                  <img
                    src="https://i.pravatar.cc/40?img=3"
                    alt="user name"
                    title="user name"
                    width="40"
                    height="40"
                    className="max-w-full rounded-full"
                  />
                </div>

                <h3 className="flex-1 ml-2 whitespace-nowrap mt-1">
                  {displayName}
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </nav>
  );
}

export default NavBar;
