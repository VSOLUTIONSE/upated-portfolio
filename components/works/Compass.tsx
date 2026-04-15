import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Compass = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 text-xl font-medium font-titleFont">
        Software Engineer
        <span className="tracking-wide text-textGreen">Inner Compass Wellbeing</span>
      </h3>
      <p className="mt-1 text-sm font-medium text-textDark">
        Oct 2025 - Apr 2026, Canada (Remote)
      </p>
      <ul className="flex flex-col gap-3 mt-6">
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          <span>
            Coordinated day-to-day software project execution with Frontend & backend developers to track tasks, timelines, and milestones across multiple workstreams.
          </span>
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          <span>
            Served as the primary bridge between backend engineering, design, and stakeholders, translating requirements into clear technical tasks.
          </span>
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          <span>
            Maintained project documentation and progress reports to ensure visibility, accountability, and on-time delivery.
          </span>
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          <span>
            Reviewed project progress, identified risks early, and supported resolution through structured communication.
          </span>
        </li>
      </ul>
    </motion.div>
  );
};

export default Compass;