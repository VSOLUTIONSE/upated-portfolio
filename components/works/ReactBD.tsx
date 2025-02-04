import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 text-xl font-medium font-titleFont">
        Frontend Engineer
        <span className="tracking-wide text-textGreen">- NamuLabs</span>
      </h3>
      <p className="mt-1 text-sm font-medium text-textDark">
        Oct 2024 - present
      </p>
      <ul className="flex flex-col gap-3 mt-6">
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          Translated high-fidelity UI/UX prototypes into functional, interactive
          web pages using Next.js, Tailwind CSS, and MUI.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          Designed and developed both user and admin dashboards, ensuring a
          seamless experience for different user roles. Integrated APIs
          efficiently, enabling smooth communication between the frontend and
          backend for optimal functionality.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          Worked closely with Product Managers, UX Designers, and Backend
          Engineers to analyze requirements, strategize product design, and
          implement key features.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
