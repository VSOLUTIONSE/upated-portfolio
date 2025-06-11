import {
  amazonImg,
  cyberImg,
  kinc,
  nino,
  nino2,
  noorShop,
  piggy,
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
              <h3 className="text-2xl font-bold ">NinoHairs</h3>
            </div>
            <p className="bg-[#112240] z-20 xl:ml-16 relative text-sm md:text-base p-2 md:p-6 rounded-md  ">
              A startup-application that offers luxury hair for women via
              installment plans. It allows users to browse products, manage
              their accounts, and make payments. I worked on several features
              including product management, user authentication, and dashboard
            </p>
            <ul className="flex justify-between gap-2 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDark">
              <li>Nextjs</li>
              <li>Tailwind</li>
              <li>Redux</li>
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
            href="https://nino.africa"
            target="_blank"
          >
            <div>
              <Image
                className="object-contain w-full h-full"
                src={nino2}
                alt="amazonImg"
              />
              <div className="absolute top-0 left-0 w-full h-full duration-300 rounded-lg bg-textGreen/10 group-hover:bg-transparent"></div>
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
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
        </div>

        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
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
              that integrates decentralized ownership, transparent
              profit-sharing models, and enhanced community engagement.
            </p>
            <ul className="flex justify-between gap-2 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>AntUI</li>
              <li>jotai</li>
            </ul>
            <div className="flex gap-4 text-2xl">
              <a
                className="duration-300 hover:text-textGreen"
                href="https://github.com/VSOLUTIONSE/piggycell-landing-page"
                target="_blank"
              >
                <TbBrandGithub />
              </a>

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
            </ul>
            <div className="flex gap-4 text-2xl">
              <a
                className="duration-300 hover:text-textGreen"
                href="https://github.com/VSOLUTIONSE/kinc-landing-page"
                target="_blank"
              >
                <TbBrandGithub />
              </a>

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
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
