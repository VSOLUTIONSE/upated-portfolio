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
        Frondend Developer
        <span className="tracking-wide text-textGreen">- NinoHairs</span>
      </h3>
      <p className="mt-1 text-sm font-medium text-textDark">
      March 2024 - July 2024, Nigeria
      </p><ul className="flex flex-col gap-3 mt-6">
              <li className="flex gap-2 text-base text-textDark">
                <span className="mt-1 text-textGreen">
                  <TiArrowForward />
                </span>
                Built intuitive, pixel-perfect user interfaces for decentralized
                applications using Next.js, TypeScript, and Tailwind CSS.
              </li>
              <li className="flex gap-2 text-base text-textDark">
                <span className="mt-1 text-textGreen">
                  <TiArrowForward />
                </span>
                Refactored and optimized a legacy codebase, reducing load times by
                20%. Developed and integrated new features into pre-existing
                blockchain apps, improving user engagement by 15%.
              </li>
              <li className="flex gap-2 text-base text-textDark">
                <span className="mt-1 text-textGreen">
                  <TiArrowForward />
                </span>
                Designed and implemented a scalable design system, ensuring consistent
                branding across all products. Collaborated cross-functionally with
                developers, product designers, and project leads to meet tight project
                deadlines.
              </li>
            </ul>
      
    </motion.div>
  );
};

export default Google;
