import { useState } from "react";
import { motion } from "framer-motion";
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
    < section
      id="experience"
      className="px-4 py-10 mx-auto max-w-containerxs lgl:py-24"
    >
      <SectionTitle title="Where I have Worked" titleNo="" />
      <div className="flex flex-col w-full gap-16 mt-10 md:flex-row">
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-col md:w-32"
        >
          {[
            { label: "Inner Compass", active: workCompass, onClick: handleCompass },
            { label: "NamuLabs", active: workReactbd, onClick: handleReactbd },
            { label: "NinoHairs", active: workGoogle, onClick: handleGoogle },
            { label: "Tongston Group", active: workApple, onClick: handleApple },
          ].map((tab) => (
            <motion.li
              key={tab.label}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              onClick={tab.onClick}
              className={`${
                tab.active
                  ? "border-l-textGold text-textGold"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              {tab.label}
            </motion.li>
          ))}
        </motion.ul>
        {workCompass && <Compass />}
        {workReactbd && <ReactBD />}
        {workGoogle && <Google />}
        {workApple && <Apple />}
      </div>
    </section>
  );
};

export default Experience;
