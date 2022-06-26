import React, { useState } from "react";
import Background from "../assets/background.jpeg";
import Blockchain from "../assets/blockchain1.png";
import Quest from "../assets/quest.jpeg";
import Typical from "react-typical";
import { PROJECTS } from "../Constants";
import { FaBorderNone } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const MainscreenCenter = (props) => {
  const [contactMessage, setContactMessage] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const isEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    setTimeout(() => {
      alert("You have entered an invalid email address!");
    }, 100);
    return false;
  };

  const handleSubmit = () => {
    props.setIsLoading(true);
    if (!isEmail(contactEmail)) {
      props.setIsLoading(false);
      return;
    }
    if (contactMessage.length > 10) {
      const templateId = "template_gwg0uco";
      sendMsg(templateId, {
        message: contactMessage,
        from_name: "lakshay.co.in",
        reply_to: contactEmail,
      });
    } else {
      props.setIsLoading(false);
      setTimeout(() => {
        alert("Message content should be 10 characters long!");
      }, 500);
    }
  };

  const sendMsg = (templateId, variables) => {
    emailjs
      .send("service_m6fea8o", templateId, variables, "dAequJxwSzMhODtHW")
      .then((res) => {
        props.setIsLoading(false);
        setTimeout(() => {
          alert("Email sent, Thanks for contacting!");
        }, 500);
      })
      .catch((err) => {
        props.setIsLoading(false);
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        );
      });
  };

  return (
    <div className="width-full flex lg:overflow-auto md:overflow-visible h-full flex-col scrollbar-hidden pb-16 smooth-scroll ">
      <img src={Background} alt="" className="absolute h-2/4 w-full z-0" />
      <div className="z-10 bg-darkGlass h-2/4 w-full flex justify-center">
        <div className="bg-glass w-screen mt-10 flex items-center justify-center flex-col rounded-xl py-16 min-w-fit sm:w-screen lg:w-4/5">
          <span className="text-white text-sm font-bold fjalla w-full pl-10 cursor-pointer sm:text-sm md:text-4xl">
            Hello,
          </span>
          <span className="text-white text-sm font-bold fjalla pl-16 w-full cursor-pointer sm:text-sm md:text-4xl">
            Discover my Space!
          </span>
          <div className="w-full my-16 flex flex-row">
            <span className="text-white text-xs font-bold fjalla px-4 sm:text-sm md:text-xl lg-text-4xl truncate">
              {"< "}
              <span className="text-yellow">code</span>
              {" >"}
            </span>
            <span className="text-white text-xs font-mono font-bold sm:text-sm md:text-xl lg-text-4xl contents md:hidden">
              {" "}
              I make stuff!{" "}
            </span>
            <Typical
              className="text-white text-xs font-mono font-bold sm:text-sm md:text-xl lg-text-4xl hidden md:contents"
              steps={[
                "I build web interfaces.",
                5000,
                "I build mobile interfaces.",
                5000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
            <span className="text-white text-xs font-bold fjalla px-4 sm:text-sm md:text-xl lg-text-4xl truncate">
              {"< "}
              <span className="text-yellow">code</span>
              {" >"}
            </span>
          </div>
        </div>
      </div>
      <div className="py-0 px-0 md:py-8 md:px-8 text-white z-10 bg-darkGlass pt-16">
        <span className="text-yellow cursor-pointer text-2xl">Projects</span>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-8 mb-20">
          <div
            className="bg-lightGrey px-4 py-4 rounded-xl h-fit cursor-pointer transform transition duration-500 hover:scale-110"
            onClick={() => openInNewTab(PROJECTS.kryptoX)}
          >
            <img
              src={Blockchain}
              alt=""
              className="h-3/4 w-full"
              style={{
                height: "180px",
                display: "block",
                objectFit: "contain",
              }}
            />
            <h4 className="cursor-pointer mt-4">Blockchain Token Transfer</h4>
            <p className="text-textGrey">
              A web application to transfer tokens/coins on blockchain network
              and saving the transaction record along with a proper gif!
            </p>
          </div>

          <div
            className="bg-lightGrey px-4 py-4 rounded-xl h-fit cursor-pointer transform transition duration-500 hover:scale-110"
            onClick={() => openInNewTab(PROJECTS.quest)}
          >
            <img
              src={Quest}
              alt=""
              className="h-3/4 w-full"
              style={{
                maxHeight: "180px",
                display: "block",
                objectFit: "contain",
              }}
            />
            <h4 className="cursor-pointer mt-4">Quest Mobile App</h4>
            <p className="text-textGrey">
              A mobile application which helps to memorize questions and answers
              by asking them on a preset timings by user!
            </p>
          </div>
        </div>
        <span className="text-yellow cursor-pointer text-2xl mt-30">
          Connect with me!
        </span>
        <div className="flex flex-col mt-5 justify-center items-center mt-6">
          <span className="text-white cursor-pointer text-xl">
            Enter your email
          </span>
          <input
            className="text-white w-3/4 mt-6 p-3 rounded-sm bg-lightGrey"
            style={{ textAlign: "left", border: "none", outline: "none" }}
            type="text"
            name="contact-input-email"
            onChange={(val) => setContactEmail(val.target.value)}
          />
          <span className="text-white cursor-pointer text-xl mt-10">
            Enter message
          </span>
          <textarea
            className="text-white w-3/4 h-32 mt-6 p-3 rounded-sm bg-lightGrey"
            style={{ textAlign: "left", border: "none", outline: "none" }}
            name="contact-input"
            onChange={(val) => setContactMessage(val.target.value)}
          />
          <button
            type="button"
            className={`mt-8 bg-yellow p-3 w-1/4 rounded-xl click:bg-white ${
              contactMessage.length && contactEmail.length
                ? "animate-pulse"
                : ""
            }`}
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainscreenCenter;
