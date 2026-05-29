import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="items-center justify-center hidden w-full gap-4 py-6 mdl:inline-flex xl:hidden"
    >
      <a href="https://github.com/VSOLUTIONSE" target="_blank">
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <TbBrandGithub />
        </span>
      </a>

      <a href="https://www.linkedin.com/in/favour-em" target="_blank">
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialLinkedin />
        </span>
      </a>
      <a href="https://x.com/FOEmmanuel2" target="_blank">
        <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
          <FaXTwitter />
        </span>
      </a>
    </motion.div>
  );
};

export default Footer;
