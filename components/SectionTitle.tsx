import { motion } from "framer-motion";

interface Props {
  title: string;
  titleNo: string;
}

const SectionTitle = ({ title, titleNo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center mb-8 text-2xl font-semibold font-titleFont"
    >
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="hidden md:inline-flex top-4 relative md:w-40 lgl:w-52 h-[.5px] bg-gray-700 ml-6"
      ></motion.span>
      <span className="w-full text-center sml:text-left">
        <span className="text-6xl text-textGold">.</span>
        <span className=""> {title}</span>
      </span>
    </motion.div>
  );
};

export default SectionTitle;
