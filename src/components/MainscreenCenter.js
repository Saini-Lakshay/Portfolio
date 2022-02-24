import React from "react";
import Background from "../assets/background.jpeg";
import Blockchain from "../assets/blockchain1.png";
import Typical from "react-typical";

const MainscreenCenter = () => {
  return (
    <div className="width-full flex overflow-auto h-full flex-col scrollbar-hidden pb-16">
      <img src={Background} alt="" className="absolute h-2/4 w-full z-0" />
      <div className="z-10 bg-darkGlass h-2/4 w-full flex justify-center">
        <div className="bg-glass w-4/5 mt-10 flex items-center justify-center flex-col rounded-xl py-16">
          <span className="text-white text-4xl font-bold fjalla w-full pl-10 cursor-pointer">
            Hello,
          </span>
          <span className="text-white text-4xl font-bold fjalla pl-16 w-full cursor-pointer">
            Discover my Space!
          </span>
          <div className="w-full my-16 flex flex-row space-x-3">
            <span className="text-white text-l font-bold fjalla px-4">
              {"< "}
              <span className="text-yellow">code</span>
              {" >"}
            </span>
            <Typical
              className="text-white font-mono font-bold"
              steps={[
                "I build web interfaces.",
                2000,
                "I build mobile interfaces.",
                2000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
            <span className="text-white text-l font-bold fjalla px-4">
              {"< "}
              <span className="text-yellow">code</span>
              {" >"}
            </span>
          </div>
        </div>
      </div>
      <div className="py-8 px-8 text-white z-10 bg-darkGlass pt-16">
        <span className="text-yellow cursor-pointer text-xl">Projects</span>
        <div className="grid grid-cols-3 gap-4 my-8">
          <div className="bg-lightGrey px-4 py-4 rounded-xl h-fit cursor-pointer">
            <img src={Blockchain} alt="" className="h-3/4 w-full" />
            <h4 className="cursor-pointer mt-4">Blockchain Token Transfer</h4>
            <p className="text-textGrey">
              A web application to transfer tokens/coins on blockchain network
              and saving the transaction record along with a proper gif!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainscreenCenter;
