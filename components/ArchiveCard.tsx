import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";

interface Props {
  title: string;
  des: string;
  listItem: string[];
  link: string;
}

const ArchiveCard = ({ title, des, listItem, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 group"
      >
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textGreen" />
          <RxOpenInNewWindow className="text-2xl hover:text-textGreen" />
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {title}
          </h2>
          <p className="text-sm mt-3">{des}</p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </a>
  );
};

export default ArchiveCard;
