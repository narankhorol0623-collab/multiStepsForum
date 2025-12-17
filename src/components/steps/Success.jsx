import React from "react";
import { Input } from "../ui/Input";
import { Header } from "../ui/Header";
import Footer from "../ui/Footer";
import { steps } from "framer-motion";
import SuccessInfo from "./SuccessInfo";
import { motion } from "framer-motion";

export const Success = ({ step, handlePrev, handleClick }) => {
  return (
    <motion.div
      className="space-y-3 pt-7 bg-white w-112.5 h-60 flex flex-col justify-center rounded-xl pr-5 pl-5 pb-15"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      <div className="space-y-3 pt-7">
        <SuccessInfo />
      </div>
    </motion.div>
  );
};
