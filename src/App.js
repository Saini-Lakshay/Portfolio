import Profile from "./assets/profile.jpeg";
import {
  FaBeer,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "ReactJS",
    "Typescript",
    "React-Native",
  ];
  return (
    <div className="h-screen w-screen bg-darkGrey flex justify-center items-center">
      <div className="h-screen w-screen bg-darkGrey flex justify-center items-center p-4 max-w-screen-2xl">
        <div className="h-screen w-1/5 bg-darkGrey2 mx-auto p-4 min-w-fit overflow-auto scrollbar-hidden">
          <div className="bg-lightGrey py-4 px-16">
            <img
              class="w-24 h-24 rounded-full mx-auto"
              src={Profile}
              alt=""
              width="384"
              height="512"
            ></img>
            <h2 className="mx-auto text-white font-bold mt-4 mx-auto text-center cursor-pointer">
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
            <FaInstagram className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaGithub className="cursor-pointer" />
          </div>
        </div>
        <div className="h-screen w-3/4 bg-darkGrey2 mx-auto"></div>
        {/* <div className="h-screen w-16 bg-darkGrey2 mx-auto"></div> */}
      </div>
    </div>
  );
}

export default App;
