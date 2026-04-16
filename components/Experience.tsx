import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Apple from "./works/Apple";
import Google from "./works/Google";
import ReactBD from "./works/ReactBD";
import Compass from "./works/Compass";

const Experience = () => {
  const [workReactbd, setWorkReactbd] = useState(false);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);
  const [workCompass, setWorkCompass] = useState(true);

  const handleReactbd = () => {
    setWorkReactbd(true);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
    setWorkCompass(false);
  };

  const handleGoogle = () => {
    setWorkReactbd(false);
    setWorkGoogle(true);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
    setWorkCompass(false);
  };

  const handleApple = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(true);
    setWorkSplash(false);
    setWorkAmazon(false);
    setWorkCompass(false);
  };
  const handleSplash = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(true);
    setWorkAmazon(false);
    setWorkCompass(false);
  };
  const handleAmazon = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(true);
    setWorkCompass(false);
  };
  const handleCompass = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
    setWorkCompass(true);
  };
  return (
    <section
      id="experience"
      className="px-4 py-10 mx-auto max-w-containerxs lgl:py-24"
    >
      <SectionTitle title="Where I have Worked" titleNo="" />
      <div className="flex flex-col w-full gap-10 mt-10 md:gap-16 md:flex-row">
        <ul className="flex flex-row overflow-x-auto pb-4 md:pb-0 md:w-32 md:flex-col">
          <li
            onClick={handleCompass}
            className={`${
              workCompass
                ? "border-l-textGold text-textGold"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-6 md:px-8 font-medium whitespace-nowrap`}
          >
            Inner Compass
          </li>
          <li
            onClick={handleReactbd}
            className={`${
              workReactbd
                ? "border-l-textGold text-textGold"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-6 md:px-8 font-medium whitespace-nowrap`}
          >
            NamuLabs
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-textGold text-textGold"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-6 md:px-8 font-medium whitespace-nowrap`}
          >
            NinoHairs
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-textGold text-textGold"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-6 md:px-8 font-medium whitespace-nowrap`}
          >
            Tongston Group
          </li>
        </ul>
        {workCompass && <Compass />}
        {workReactbd && <ReactBD />}
        {workGoogle && <Google />}
        {workApple && <Apple />}
      </div>
    </section>
  );
};

export default Experience;
