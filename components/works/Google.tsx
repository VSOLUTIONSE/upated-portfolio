import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 text-xl font-medium font-titleFont">
        Frondend Developer (intern)
        <span className="tracking-wide text-textGreen">- NinoHairs</span>
      </h3>
      <p className="mt-1 text-sm font-medium text-textDark">
      March 2024 - July 2024, Nigeria
      </p>
      <ul className="flex flex-col gap-3 mt-6">
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          Transforming Figma designs into sleek, functional, and pixel-perfect
          interfaces for Blockchain Decentralized Applications (dApps), ensuring
          seamless user experiences.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          Building and maintaining a scalable design system, creating reusable
          UI components that enhance consistency and efficiency across projects.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          Working closely with fellow developers, leveraging version control
          (Git & GitHub) to maintain clean, efficient, and scalable codebases.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
