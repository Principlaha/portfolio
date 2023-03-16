import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <section className="absolute w-screen h-[20vh] bg-[#3c7b04] ">
      <div className="h-full flex flex-col justify-around">
        <h1 className="text-white text-center text-lg">
          Copyright © 2023 All rights reserved
        </h1>
        <div className="mx-auto w-[30%] flex justify-between">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100005349197408"
          >
            <FacebookIcon className="text-white text-5xl cursor pointer" />
          </a>
          <a target="_blank" href="https://www.instagram.com/gurjeet_plaha/">
            <InstagramIcon className="text-white text-5xl cursor-pointer" />
          </a>
          <a
            target="_blank"
            href="https://github.com/Principlaha?tab=repositories"
          >
            <GitHubIcon className="text-white text-5xl" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/gurjeetplaha/">
            <LinkedInIcon className="text-white text-5xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
