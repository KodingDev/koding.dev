import type { NextPage } from "next";
import HomeHeaderImage from "../assets/img/home-header.png";

import TwitterIcon from "../assets/img/icons/twitter.svg";
import GitHubIcon from "../assets/img/icons/github.svg";
import EmailIcon from "../assets/img/icons/email.svg";
import ChevronDownIcon from "../assets/img/icons/chevron-down.svg";

const Home: NextPage = () => {
  return (
    <div
      className="h-screen flex"
      style={{
        background: `linear-gradient(-45deg, rgba(131,58,180,0.9) 0%, rgba(35,53,110,0.9) 100%), url(${HomeHeaderImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-between m-auto h-full w-full text-center p-10 text-white">
        <div className="flex flex-row justify-between text-lg">
          <span className="font-semibold">Koding</span>

          <div className="flex gap-10">
            <span className="font-light">Home</span>
            <span className="font-light">Projects</span>
            <span className="font-light">About</span>
          </div>
        </div>

        <div>
          <div className="relative">
            <div className="flex z-0 absolute m-auto left-0 right-0 -top-24 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="730" height="266" viewBox="0 0 730 266">
                <text
                  id="KODING"
                  transform="translate(1 211)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                  fontSize="200"
                  fontFamily="Roboto-Bold, Roboto"
                  fontWeight="700"
                  opacity="0.15"
                >
                  <tspan x="0" y="0">
                    KODING
                  </tspan>
                </text>
              </svg>
            </div>

            <div className="z-10">
              <h1 className="font-semibold text-5xl mb-2">Hey, I'm Koding.</h1>
              <span className="font-light text-xl text-white">Crafting rich experiences for over 8 years.</span>
            </div>
          </div>

          <div className="h-14" />

          <div className="flex flex-row gap-10 justify-center">
            <TwitterIcon className="w-6 fill-white" />
            <GitHubIcon className="w-6 fill-white" />
            <EmailIcon className="w-6 fill-white" />
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
