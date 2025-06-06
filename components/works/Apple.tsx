import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 text-xl font-medium font-titleFont">
        Frontend Enginer
        <span className="tracking-wide text-textGreen">- Tongston Group</span>
      </h3>
      <p className="mt-1 text-sm font-medium text-textDark">
        Aug 2022 – Feb 2023, Nigeria
      </p>
      <ul className="flex flex-col gap-3 mt-6">
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          Led the development of a consultation booking application, boosting
          company revenue and improving user engagement by through a seamless,
          user-friendly interface.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          Built and maintained a responsive, scalable frontend using React.js,
          Styled Components, MUI, and Firebase, ensuring smooth functionality
          and optimal user experience.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          Integrated Flutterwave Payment Gateway, enabling secure transactions
          and increasing revenue by 10%.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
