import Profile from "./assets/profile.jpeg";
import {
  FaBeer,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaHamburger,
} from "react-icons/fa";
import MainscreenCenter from "./components/MainscreenCenter";
import React, { useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Watch } from "react-loader-spinner";
import "./App.css";

function App() {
  const [sidebarHidden, setSideBarHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onResize = (event) => {
    if (window.innerWidth <= 1030) {
      setSideBarHidden(true);
    } else {
      setSideBarHidden(false);
    }
  };

  const toggleSideBar = () => {
    setSideBarHidden(!sidebarHidden);
  };

  useEffect(() => {
    if (window.innerWidth <= 1030) {
      setSideBarHidden(true);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "ReactJS",
    "Typescript",
    "React-Native",
  ];
  return (
    <div className="h-screen w-screen bg-darkGrey flex justify-center items-center overflow-auto scrollbar-hidden">
      {isLoading && (
        <div
          className="bg-darkGrey"
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Watch color="#00BFFF" height={80} width={80} />
        </div>
      )}
      <div
        className="flex items-center justify-center fixed h-10 w-10 block flex lg:hidden cursor-pointer"
        style={{
          top: 10,
          zIndex: 100,
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          paddingLeft: 20,
          textDecoration: "none",
        }}
      >
        <FaHamburger
          size={35}
          className="text-yellow"
          onClick={() => toggleSideBar()}
        />
      </div>
      <div className="bg-lightGrey h-screen w-screen bg-darkGrey justify-center items-center p-4 max-w-screen-2xl sm:flex-col lg:flex lg:flex-row scrollbar-hidden">
        {!sidebarHidden && (
          <div
            className="absolute grid left-0 top-0 w-min h-screen z-50 bg-darkGrey2 mx-auto p-4 min-w-fit overflow-auto scrollbar-hidden sm:overflow-auto lg:w-1/5 lg:relative scrollbar-hidden"
            id="sidebar"
          >
            <div className="bg-lightGrey py-4 px-16 scrollbar-hidden">
              <img
                class="w-24 h-24 rounded-full mx-auto"
                src={Profile}
                alt=""
                width="384"
                height="512"
              ></img>
              <h2 className="mx-auto text-white font-bold mt-4 mx-auto text-center cursor-pointer hover:text-yellow">
                Lakshay Saini
              </h2>
              <p className="mx-auto text-textGrey text-center mb-8 mt-4 cursor-pointer">
                Front-end developer
              </p>
            </div>
            <div className="flex justify-between p4-8 mt-4">
              <span className="text-white cursor-pointer">Residence : </span>
              <span className="text-textGrey cursor-pointer">India</span>
            </div>
            <div className="flex justify-between p4-8 mt-2">
              <span className="text-white cursor-pointer">City : </span>
              <span className="text-textGrey cursor-pointer">Yamunanagar</span>
            </div>
            <div className="flex justify-between p4-8 mt-2">
              <span className="text-white cursor-pointer">Age : </span>
              <span className="text-textGrey cursor-pointer">23</span>
            </div>
            <div className="p-px bg-textGrey rounded my-4" />
            <h1 className="text-center text-white font-bold cursor-pointer">
              Skills
            </h1>
            <ul>
              {skills.map((skill, index) => {
                return (
                  <li
                    key={`skill-${index}`}
                    className="text-textGrey my-4 cursor-pointer flex flex-row items-center"
                  >
                    <FaBeer
                      style={{ marginRight: "10px" }}
                      className="text-yellow"
                    />
                    {skill}
                  </li>
                );
              })}
            </ul>
            <div className="flex flrx-row justify-between text-yellow mt-10">
              <a
                target="_blank"
                href="https://www.instagram.com/lakshay_saini_2501/"
              >
                <FaInstagram className="cursor-pointer hover:scale-150" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/lakshay-saini-59542414b"
              >
                <FaLinkedinIn className="cursor-pointer hover:scale-150" />
              </a>
              <a target="_blank" href="https://twitter.com/Lakshay_2501">
                <FaTwitter className="cursor-pointer hover:scale-150" />
              </a>
              <a target="_blank" href="https://github.com/Saini-Lakshay">
                <FaGithub className="cursor-pointer hover:scale-150" />
              </a>
            </div>
          </div>
        )}
        <div
          className="h-screen w-full bg-darkGrey2 mx-auto relative"
          id="mainDiv"
        >
          <MainscreenCenter />
        </div>
        {/* <div className="h-screen w-16 bg-darkGrey2 mx-auto"></div> */}
      </div>
    </div>
  );
}

export default App;
