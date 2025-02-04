import { TbBrandGithub } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="flex flex-col items-center justify-end w-full h-full gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="http://github.com/VSOLUTIONSE" target="_blank">
          <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
            <TbBrandGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/favour-emmanuel-183226161/"
          target="_blank"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
            <SlSocialLinkedin />
          </span>
        </a>

        <a href="https://x.com/FOEmmanuel2" target="_blank">
          <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
            <FaXTwitter />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
