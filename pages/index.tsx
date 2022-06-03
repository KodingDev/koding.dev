import type { NextPage } from "next";
import HomeHeaderImage from "../assets/img/home-header.png";

import TwitterIcon from "../assets/img/icons/twitter.svg";
import GitHubIcon from "../assets/img/icons/github.svg";
import EmailIcon from "../assets/img/icons/email.svg";
import ChevronDownIcon from "../assets/img/icons/chevron-down.svg";
import MenuIcon from "../assets/img/icons/menu.svg";
import IconButton from "../components/interaction/IconButton";
import LinkButton from "../components/interaction/LinkButton";

const KodingSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="730" height="266" viewBox="0 0 730 266">
    <text
      id="KODING"
      transform="translate(1 211)"
      fill="none"
      stroke="#fff"
      strokeWidth="1"
      fontSize="200"
      fontFamily="Roboto-Bold, Roboto"
      fontWeight="100"
      opacity="0.15"
    >
      <tspan x="0" y="0">
        KODING
      </tspan>
    </text>
  </svg>
);

const Home: NextPage = () => {
  return (
    <div
      className="h-screen flex -z-10 bg-cover bg-center bg-no-repeat"
      style={{ background: `linear-gradient(-45deg, rgba(131,58,180,0.9) 0%, rgba(35,53,110,0.9) 100%), url(${HomeHeaderImage.src})` }}
    >
      <div className="flex flex-col justify-between m-auto h-full w-full text-left md:text-center p-10 text-white">
        <div className="flex flex-row justify-between text-lg">
          <span className="font-semibold">Koding</span>

          <div className="flex gap-10 invisible md:visible">
            <LinkButton href="/">Home</LinkButton>
            <LinkButton href="/">Projects</LinkButton>
            <LinkButton href="/">About</LinkButton>
          </div>

          <div className="visible md:hidden">
            <MenuIcon className="w-6 fill-white" />
          </div>
        </div>

        <div>
          <div className="relative">
            <div className="flex absolute m-auto left-0 right-0 -top-24 justify-center invisible md:visible select-none pointer-events-none">
              <KodingSVG />
            </div>

            <div className="z-10">
              <h1 className="font-semibold text-5xl mb-2">Hey, I'm Koding.</h1>
              <span className="font-light text-xl text-white">Crafting rich experiences for over 8 years.</span>
            </div>
          </div>

          <div className="flex flex-row gap-10 justify-start md:justify-center mt-14">
            <IconButton href="https://twitter.com/KodingDev_">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://github.com/KodingDev">
              <GitHubIcon />
            </IconButton>
            <IconButton href="mailto:hello@koding.dev">
              <EmailIcon />
            </IconButton>
          </div>
        </div>

        <div className="flex justify-center">
          <ChevronDownIcon className="w-12 h-12 fill-white" />
        </div>
      </div>
    </div>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Home;
