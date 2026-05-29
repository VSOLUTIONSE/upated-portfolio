import { TbBrandGithub } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { motion } from "framer-motion";

const LeftSide = () => {
  return (
    <div className="flex flex-col items-center justify-end w-full h-full gap-4 text-textLight">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15, delayChildren: 1.5 } },
        }}
        className="flex flex-col gap-4"
      >
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          href="http://github.com/VSOLUTIONSE"
          target="_blank"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
            <TbBrandGithub />
          </span>
        </motion.a>
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          href="https://www.linkedin.com/in/favour-em"
          target="_blank"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
            <SlSocialLinkedin />
          </span>
        </motion.a>

        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          href="https://x.com/FOEmmanuel2"
          target="_blank"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
            <FaXTwitter />
          </span>
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="w-[2px] bg-textDark"
      ></motion.div>
    </div>
  );
};

export default LeftSide;
