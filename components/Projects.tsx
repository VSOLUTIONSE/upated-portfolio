import {
  amazonImg,
  cyberImg,
  kinc,
  nino,
  nino2,
  noorShop,
  piggy,
  varysoft,
  votage,
} from "@/public/assets";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="py-24 mx-auto max-w-container lgl:px-20">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="flex flex-col items-center justify-center w-full mt-10 gap-28">
        <div className="flex flex-col-reverse gap-6 xl:flex-row">
          <div className="z-10 relative  flex flex-col items-end w-full gap-6 text-right xl:w-1/2 lgl:justify-between xl:-ml-16">
            <div>
              <h3 className="text-2xl font-bold">VarySoft Technologies <span className="text-sm font-normal text-textDark ml-2">(still in dev)</span></h3>
            </div>
            <p className="bg-[#112240] z-20 xl:ml-16 relative text-sm md:text-base p-2 md:p-6 rounded-md  ">
              VarySoft Technologies is a systems-focused software and IT solutions agency that helps businesses, professionals, and organizations build and integrate digital tools that power their operations.

The company focuses on creating websites, business systems, payment workflows, and custom applications that simplify processes, improve efficiency, and support scalable growth.
            </p>
            <ul className="flex justify-between gap-2 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDark">
              <li>Nextjs</li>
              <li>Tailwind</li>
              <li>Zustand</li>
              <li>Formik</li>
              <li>Tanstack query</li>
              <li>MUI</li>
            </ul>
            <div className="flex gap-4 text-2xl">
              <a
                className="duration-300 hover:text-textGreen"
                href="https://nino.africa"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
          <a
            className="relative w-full h-auto xl:w-1/2 group"
            href="https://varysofttechnologies.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="object-contain w-full h-full"
                src={varysoft}
                alt="varysoft"
              />
              <div className="absolute top-0 left-0 w-full h-full duration-300 rounded-lg bg-textGreen/10 group-hover:bg-transparent"></div>
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <a
            className="relative w-full h-auto xl:w-1/2 group"
            href="https://the-votage-web-788c.vercel.app/home"
            target="_blank"
          >
            <div>
              <Image
                className="object-contain w-full h-full"
                src={votage}
                alt="votage"
              />
              <div className="absolute top-0 left-0 w-full h-full duration-300 rounded-lg bg-textGreen/10 group-hover:bg-transparent"></div>
            </div>
          </a>
          <div className="z-10 flex flex-col items-start w-full gap-6 text-left xl:w-1/2 lgl:justify-between xl:-mr-16">
            <div>
              <h3 className="text-2xl font-bold">Votage Church</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-ml-16">
              A modern, responsive church website built for Votage Church, a fast-growing ministry based in Benin City. The platform was designed to communicate the church's vision clearly while providing easy access to sermons, events, and community engagement.
            </p>
            <ul className="flex justify-between gap-2 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDark">
              <li>Nextjs</li>
              <li>Tailwind</li>
              <li>TypeScript</li>
              <li>Framer Motion</li>
              <li>Clerk</li>
              <li>Paystack</li>
              <li>Web3 Forms</li>
              <li>GSAP</li>
            </ul>
            <div className="flex gap-4 text-2xl">
              <a
                className="duration-300 hover:text-textGreen"
                href="https://the-votage-web-788c.vercel.app/home"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-6 xl:flex-row">
          <a
            className="relative w-full h-auto xl:w-1/2 group"
            href="https://e-mart-qyyp.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="object-contain w-full h-full"
                src={nino}
                alt="amazonImg"
              />
              <div className="absolute top-0 left-0 w-full h-full duration-300 rounded-lg bg-textGreen/10 group-hover:bg-transparent"></div>
            </div>
          </a>
          <div className="z-10 flex flex-col items-end w-full gap-6 text-right xl:w-1/2 lgl:justify-between xl:-ml-16">
            <div>
              <h3 className="text-2xl font-bold ">E-Mart app</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              An e-commerce platform that allows store owners to manage
              products, customize store settings, and interact with customers
              through a chat widget.
            </p>
            <ul className="flex justify-between gap-2 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDark">
              <li>Nextjs</li>
              <li>Tailwind</li>
              <li>Redux</li>
              <li>Formik</li>
              <li>Shadcn</li>
            </ul>
            <div className="flex gap-4 text-2xl">
              <a
                className="duration-300 hover:text-textGreen"
                href="https://e-mart-qyyp.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col gap-6 xl:flex-row-reverse">
          <a
            className="relative w-full h-auto xl:w-1/2 group"
            href="https://piggycell-nextjs.vercel.app"
            target="_blank"
          >
            <div>
              <Image
                className="object-contain w-full h-full"
                src={piggy}
                alt="cyberImg"
              />
              <div className="absolute top-0 left-0 w-full h-full duration-300 rounded-lg bg-textGreen/10 group-hover:bg-transparent"></div>
            </div>
          </a>
          <div className="z-10 flex flex-col items-end justify-between w-full gap-6 text-center sml:text-right xl:w-1/2">
            <div>
              <h3 className="text-2xl font-bold">Piggycell</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              Piggycell connects physical devices and users, to creating a
              revenue-sharing ecosystem accessible to all. Built the frontend
              that integrates soon-coming decentralized ownership,and enhanced
              community engagement.
            </p>
            <ul className="flex justify-between gap-2 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>AntUI</li>
              <li>jotai</li>
              <li>prisma</li>
            </ul>
            <div className="flex gap-4 text-2xl">
              {/* <a
                className="duration-300 hover:text-textGreen"
                href="https://github.com/VSOLUTIONSE/piggycell-landing-page"
                target="_blank"
              >
                <TbBrandGithub />
              </a> */}

              <a
                className="duration-300 hover:text-textGreen"
                href="https://piggycell-nextjs.vercel.app"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col gap-6 xl:flex-row">
          <a
            className="relative w-full h-auto xl:w-1/2 group"
            href="https://kinc-app.vercel.app"
            target="_blank"
          >
            <div>
              <Image
                className="object-contain w-full h-full"
                src={kinc}
                alt="noorShop"
              />
              <div className="absolute top-0 left-0 w-full h-full duration-300 rounded-lg bg-textGreen/10 group-hover:bg-transparent"></div>
            </div>
          </a>
          <div className="z-10 flex flex-col items-end justify-between w-full gap-6 text-right xl:w-1/2 xl:-ml-16">
            <div>
              <h3 className="text-2xl font-bold">Kinc website</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              Kinc is a real assset-backed lending platform connecting USDT
              holders with businesses needing short-term funding utilising
              blockchain technology.
            </p>
            <ul className="flex justify-between gap-2 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>AntUI</li>
              <li>Tailwind</li>
              <li>metamask</li>
            </ul>
            <div className="flex gap-4 text-2xl">
              {/* <a
                className="duration-300 hover:text-textGreen"
                href="https://github.com/VSOLUTIONSE/kinc-landing-page"
                target="_blank"
              >
                <TbBrandGithub />
              </a> */}

              <a
                className="duration-300 hover:text-textGreen"
                href="https://kinc-app.vercel.app"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}

        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
