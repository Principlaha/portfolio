import { useEffect, useState } from "react";
import SpokeIcon from "@mui/icons-material/Spoke";

const Navigation = () => {
  const [changeNavbar, setChangeNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setChangeNavbar(true);
    } else {
      setChangeNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className="fixed z-[500] top-0 left-0 w-full">
      <div
        className={`w-full px-24 pt-5 pb-3 flex justify-between text-white ${
          changeNavbar ? "bg-zinc-900 shadow-md shadow-stone-800	" : "bg-none"
        }`}
      >
        <a href="#home">
          <SpokeIcon className="z-[100] cursor-pointer text-[#7ce604] text-5xl" />
        </a>
        <ul className="w-[40%] flex justify-between text-xl text-[#7ce604] tracking-widest z-[100]">
          <li>
            <a className="border-b-4 pb-1" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="border-b-4 pb-1" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="border-b-4 pb-1" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="border-b-4 pb-1" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
