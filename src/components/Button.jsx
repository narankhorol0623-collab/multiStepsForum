import { motion } from "framer-motion";

export const ButtonClick = ({ step, handleClick, handlePrev }) => {
  return (
    <motion.div className="flex space-x-2">
      <button
        onClick={handlePrev}
        className={`w-32 h-11 mt-30 border rounded-md ${
          step === 0 ? "hidden" : "block"
        } ${step === 3 ? "hidden" : "block"} `}
      >
        Back
      </button>
      <button
        onClick={handleClick}
        className={`w-70 h-11 flex grow items-center justify-center border mt-30 rounded-md bg-black text-white ${
          step === 3 ? "hidden" : "block"
        }`}
      >
        {step === 2 ? `Submit ${step + 1}/3` : `Continue ${step + 1}/3`}
      </button>
    </motion.div>
  );
};
