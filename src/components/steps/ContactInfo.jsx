import React from "react";
import { Input } from "../ui/Input";
import { Header } from "../ui/Header";
import Footer from "../ui/Footer";
import { motion } from "framer-motion";
import { animationVariant } from "../constants/animation-variant";

export const ContactInfo = ({ step, handlePrev, handleClick }) => {
  return (
    <motion.div
      className="space-y-3 pt-7 bg-white w-112.5 h-125 flex flex-col justify-center rounded-xl p-5"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <Input LabelValue={"First name"} placeholderName={"Your first name"} />
      <Input LabelValue={"Last name"} placeholderName={"Your last name"} />
      <Input LabelValue={"Username"} placeholderName={"Your username"} />

      <Footer step={step} handleClick={handleClick} />
    </motion.div>
  );
};
