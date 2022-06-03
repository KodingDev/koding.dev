import type { NextPage } from "next";
import HomeHeaderImage from "../assets/img/home-header.png";
import AvatarImage from "../assets/img/avatar.png";

import TwitterIcon from "../assets/img/icons/twitter.svg";
import GitHubIcon from "../assets/img/icons/github.svg";
import EmailIcon from "../assets/img/icons/email.svg";
import ChevronDownIcon from "../assets/img/icons/chevron-down.svg";
import MenuIcon from "../assets/img/icons/menu.svg";
import IconButton from "../components/interaction/IconButton";
import LinkButton from "../components/interaction/LinkButton";
import { NextSeo } from "next-seo";

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
    <>
      <NextSeo title="Home" description="Crafting rich experiences for over 8 years." />

      <div
        className="h-screen flex -z-10 bg-cover bg-center bg-no-repeat"
        style={{ background: `linear-gradient(-45deg, rgba(131,58,180,0.9) 0%, rgba(35,53,110,0.9) 100%), url(${HomeHeaderImage.src})` }}
      >
        <div className="flex flex-col justify-between m-auto h-full w-full text-left md:text-center p-10 text-white">
          <div className="flex flex-row justify-between text-lg">
            <img src={AvatarImage.src} alt="Avatar" className="w-10 h-10 rounded-full" />

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
                <h1 className="font-semibold text-5xl mb-2 leading-[56px]">Hey, I'm Koding.</h1>
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
            <ChevronDownIcon className="fill-white" />
          </div>
        </div>
      </div>

      <div className="bg-gray-900 p-16 text-white">
        <div className="flex flex-col items-start md:items-center w-full space-y-2">
          <h1 className="font-semibold text-5xl mb-2">Projects</h1>
          <span className="font-light text-xl">Check out some of my recent projects.</span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center pt-12">
            {[...Array(6)].map((_, i) => (
              <div className="bg-gray-800 rounded-md shadow-lg overflow-clip" key={i}>
                <div className="bg-gradient-to-br from-[#3955ad] to-[#833ab4] p-4">
                  <h2 className="font-semibold text-2xl">Koding.dev</h2>
                </div>

                <div className="p-6">
                  <span className="font-light">
                    My personal website. Built with Next.js, TypeScript, and TailwindCSS. Lorem ipsum dolor sit amet among us swag drip 22
                    epic games amazon prime
                  </span>

                  <div className="flex flex-row mt-4 gap-2 justify-center">
                    <span className="bg-[#833ab4] p-1 rounded text-xs">Next.js</span>
                    <span className="bg-[#6A43B2] p-1 rounded text-xs">TypeScript</span>
                    <span className="bg-[#524CAF] p-1 rounded text-xs">TailwindCSS</span>
                    <span className="bg-[#3955AD] p-1 rounded text-xs">Example</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Home;
