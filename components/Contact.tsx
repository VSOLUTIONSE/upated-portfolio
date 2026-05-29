import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-4 py-10 mx-auto max-w-contentContainer xl:py-32"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center text-lg font-semibold tracking-wide font-titleFont text-textGold"
      >
        Have an idea?
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl font-semibold sml:text-5xl font-titleFont"
      >Get In Touch</motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-[600px] text-center text-textDark"
      >
        
        I crafting pixel-perfect UIs, build scalable apps, and 
        optimize performance. I am always open to new opportunities,
        collaborations, and mentorship on building exceptional digital
        experiences.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        href="mailto:femmaje@gmail.com"
      >
        <button className="w-40 mt-6 text-sm tracking-wider duration-300 border rounded-md h-14 border-textGold font-titleFont text-textGold hover:bg-hoverColor">
          Say Hello
        </button>
      </motion.a>
    </section>
  );
};

export default Contact;
