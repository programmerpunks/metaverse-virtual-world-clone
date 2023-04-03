import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import pic from "../../images/Navbar/logo.png";
import "./btn.css";
const Header = ({
  wallet,
  logout,
  disconnect,
  setUserMintedAmount,
  setMaxMintAmount,
  setPrice,
  setImages,
  connection,
  readContract,
  getTokens,
}) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  document.addEventListener("DOMContentLoaded", function () {
    // open
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    // close
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (close.length) {
      for (i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (backdrop.length) {
      for (i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }
  });
  return (
    <div>
      <div className="grid bg-blue-light">
        <div className="">
          <nav className=" relative  xl:mr-48  flex  px-4 pt-4">
            <button className=" text-3xl font-bold flex ">
              <img
                src={pic}
                alt=""
                className=""
                onClick={() => navigate("/")}
              />
              <div className="border-spacing-y-2"></div>
              <div className="mx-3 mt-5 ">
                <p className="text-white font-bold text-sm"> MetaVerse</p>
                <p className="text-white font-bold text-sm"> Punks</p>
              </div>
            </button>
            <div className="xl:hidden  grid justify-end ml-auto">
              <button
                className="navbar-burger  flex items-center text-blue-600 p-3"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <ul className=" hidden  pl-48 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 xl:flex xl:mx-auto xl:items-center xl:w-auto xl:space-x-6">
              <li>
                <button
                  class="btn2 px-5 py-2 relative border text-white border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-black"
                  type="button"
                >
                  <span class="absolute inset-0 bg-yelloww"></span>
                  <span class="absolute inset-0 flex justify-center items-center font-bold">
                    HOME
                  </span>
                  HOME
                </button>
              </li>

              <li>
                <button
                  class="btn2 px-5 py-2 relative border text-white border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-black"
                  type="button"
                >
                  <span class="absolute inset-0 bg-yelloww"></span>
                  <span class="absolute inset-0 flex justify-center items-center font-bold">
                    ABOUT
                  </span>
                  ABOUT
                </button>
              </li>
              <li className="text-gray-300"></li>
              <li>
                <button
                  className=" btn2 px-5 py-2 relative border text-white border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-black"
                  type="button"
                >
                  <span class="absolute inset-0 bg-yelloww"></span>
                  <span class="absolute inset-0 flex justify-center items-center font-bold">
                    COLLECTION
                  </span>
                  COLLECTION
                </button>
              </li>
              <li className="text-gray-300"></li>
              <li>
                <button
                  class="btn2 px-5 py-2 relative border text-white border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-black"
                  type="button"
                >
                  <span class="absolute inset-0 bg-yelloww"></span>
                  <span class="absolute inset-0 flex justify-center items-center font-bold">
                    TEAM
                  </span>
                  TEAM
                </button>
              </li>
              <li className="text-gray-300"></li>
              <li>
                <button
                  class="btn2 px-5 py-2 relative border text-white border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-black"
                  type="button"
                >
                  <span class="absolute inset-0 bg-yelloww"></span>
                  <span class="absolute inset-0 flex justify-center items-center font-bold">
                    CONTACT
                  </span>
                  CONTACT
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="grid pb-5 sm:justify-end justify-center ">
          <button
            onClick={async () => {
              logout
                ? (async function () {
                    await disconnect();
                  })()
                : (async function () {
                    await connection();
                    await readContract();
                    await getTokens();
                  })();
            }}
            className={` xl:inline-block hidden xl:mt-[-70px] h-12 xl:ml-auto sm:mr-5  px-6 bg-yelloww hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200 ${
              logout ? "hover:before:content-['Disconnect:']" : ""
            }`}
          >
            {wallet}
          </button>
        </div>
      </div>

      <div className="xl:hidden ">
        <div
          className={`navbar-menu relative z-50 ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-blue-700 border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto font-bold leading-none w-12" href="/">
                <img src={pic} alt="" />
              </a>
              <button
                className="navbar-close"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-yelloww hover:text-black rounded"
                    href="/"
                  >
                    HOME
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-yelloww hover:text-black rounded"
                    href="/"
                  >
                    ABOUT
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-yelloww hover:text-blue-600 rounded"
                    href="/"
                  >
                    COLLECTION
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-yelloww hover:text-blue-600 rounded"
                    href="/"
                  >
                    TEAM
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-yelloww hover:text-blue-600 rounded"
                    href="/"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <button
                  onClick={async () => {
                    logout
                      ? (async function () {
                          await disconnect();
                        })()
                      : (async function () {
                          await connection();
                          await readContract();
                          await getTokens();
                        })();
                  }}
                  className={` xl:inline-block h-12 xl:ml-auto sm:mr-5  px-6 bg-yelloww hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200 ${
                    logout ? "hover:before:content-['Disconnect:']" : ""
                  }`}
                >
                  {wallet}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
