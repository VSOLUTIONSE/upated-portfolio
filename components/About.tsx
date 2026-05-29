import { bioImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-8 py-10 mx-auto max-w-containerSmall lgl:py-32"
    >
      <SectionTitle title="About Me" titleNo="" />
      <div className="flex flex-col-reverse gap-16 lgl:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col w-full gap-4 text-base font-medium lgl:w-2/3 text-textDark"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I&apos;m a Frontend Developer passionate about building sleek,
            high-performance web applications that enhance that don&apos;t just scale but sell.
            With expertise in cutting-edge frontend technologies and api integration, I have worked across key industries like blockchain, ecommerce and business where I transform visons into functional products. I&apos;m also passionate.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I thrive in collaborative environments, working closely with product
            managers, UX designers, and backend engineers to bring ideas to
            life.
          </motion.p> 
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >A few technologies I have worked with:</motion.p>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6"
          >
            {["JavaScript (ES6+)", "Next.js", "React", "Node.js", "TypeScript", "Git/Github", "Redux", "TanStack Query", "Web3js/ethers.js", "PostgreSQL", "NextAuth", "OAuth", "Docker"].map((skill) => (
              <motion.li
                key={skill}
                variants={{
                  hidden: { opacity: 0, x: -15 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-2"
              >
                <span className="text-textGold">
                  <AiFillThunderbolt />
                </span>
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative w-full lgl:w-1/3 h-80 group"
        >
          <div className="absolute w-full rounded-lg h-80 -left-6 -top-6 ">
            <div className="relative z-20 flex w-full h-full pl-6 lgl:pl-0">
              <Image
                className="object-cover h-full"
                style={{ borderRadius: "62% 38% 21% 79% / 50% 38% 62% 50%" }}
                src={bioImg}
                alt="bioImg"
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;