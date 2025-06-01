import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-8 py-10 mx-auto max-w-containerSmall lgl:py-32"
    >
      <SectionTitle title="About Me" titleNo="" />
      <div className="flex flex-col-reverse gap-16 lgl:flex-row">
        <div className="flex flex-col w-full gap-4 text-base font-medium lgl:w-2/3 text-textDark">
          <p>
            I’m a Frontend Developer passionate about building sleek,
            high-performance web applications that enhance user experiences.
            With expertise in cutting-edge technologies and AI integration, I transform complex
            designs into seamless, responsive, and accessible interfaces. I’m also committed to mentorship,
            sharing knowledge and supporting others in their growth and developer journey.
          </p>
          {/* <p>
            I thrive in collaborative environments, working closely with product
            managers, UX designers, and backend engineers to bring ideas to
            life.
          </p> */}
          {/* <p>
            I don&apos;t just write code, I build solutions, dedicated to
            creating digital experiences that not only engage users but also
            drive business growth. Let&apos;s build something amazing together!
          </p> */}
          <p>A few technologies I have worked with:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGold">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGold">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGold">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGold">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGold">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            
            <li className="flex items-center gap-2">
              <span className="text-textGold">
                <AiFillThunderbolt />
              </span>
             Git/Github
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGold">
                <AiFillThunderbolt />
              </span>
              Redux
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGold">
                <AiFillThunderbolt />
              </span>
              TanStack Query
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGold">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="relative w-full lgl:w-1/3 h-80 group">
          <div className="absolute w-full rounded-lg h-80 -left-6 -top-6 ">
            <div className="relative z-20 flex w-full h-full pl-6 lgl:pl-0">
              <Image
                className="object-cover h-full"
                style={{ borderRadius: "62% 38% 21% 79% / 50% 38% 62% 50%" }}
                src={profileImg}
                alt="profileImg"
              />
              <div
                style={{ borderRadius: "62% 38% 21% 79% / 50% 38% 62% 50%" }}
                className="absolute top-0 left-0 hidden w-full duration-300 lgl:inline-block h-80 group-hover:bg-transparent"
              ></div>
            </div>
          </div>
          <div
            style={{ borderRadius: "62% 38% 21% 79% / 50% 38% 62% 50%" }}
            className="hidden w-full transition-transform duration-300 border-2 rounded-md bg-textGold lgl:inline-flex h-80 border-[#FFBB00] group-hover:-translate-x-2 group-hover:-translate-y-2"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
