import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Banner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col gap-4 py-10 mx-auto max-w-contentContainer mdl:py-24 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        style={{ y, opacity }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg tracking-wide font-titleFont text-textGold"
      >
        Hello there!, I&apos;m
      </motion.h3>
      <motion.h1
        style={{ y, opacity }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex flex-col text-4xl font-semibold lgl:text-6xl font-titleFont"
      >
        <span>
          Favour Emmanuel<span className="text-textGold lgl:text-7xl">.</span>
        </span>
<span className="mt-2 text-textDark lgl:text-5xl lgl:mt-4">
          Frontend Developer
        </span>
      </motion.h1>
      <motion.p
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 40]), opacity }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        The future isn&apos;t just something we wait for. It&apos;s something we create.
        With every pixel, every interaction, and every seamless experience, I
        bring ideas to life through code.
        <br /><br/>
        Let&apos;s collaborate, innovate, and craft the next big thing together. The
        future is ours to build!
      </motion.p>
      <a href="/assets/cv.pdf" target="_blank">
        <motion.button
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 20]), opacity }}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-sm tracking-wide duration-300 border rounded-[40px] w-52 h-14 font-titleFont border-textGold text-textGold hover:bg-hoverColor"
        >
          Check out my resume
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
