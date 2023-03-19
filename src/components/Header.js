/* eslint-disable */

import ParticleBackground from "./ParticleBackground";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useState } from "react";

const Header = () => {
  const [upwardIcon, showUpwardIcon] = useState(false);

  const showIcon = () => {
    if (window.scrollY >= 200) {
      showUpwardIcon(true);
    } else {
      showUpwardIcon(false);
    }
  };

  useEffect(() => {
    showIcon();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", showIcon);
  });
  return (
    <>
      <ParticleBackground />
      <a
        href="#home"
        className={`fixed bottom-10 right-10 w-16 h-16 bg-gray-600 rounded-full z-[200] ${
          !upwardIcon && "hidden"
        }`}
      >
        <ArrowUpwardIcon className="text-white absolute bottom-[.7rem] right-3 text-lg text-4xl cursor-pointer" />
      </a>
      <header id="home" className="w-screen h-[90vh]">
        <div className="w-[60%] absolute top-[40%] left-[20%] text-white leading-[7rem] text-center">
          <h1 className="text-10xl tracking-wider">
            Hello I'm
            <span className="block text-[#7ce604]">Gurjeet Kaur</span>
          </h1>
          <h3 className="text-3xl tracking-wider">Full-Stack Web Developer</h3>
        </div>
      </header>
    </>
  );
};

export default Header;
