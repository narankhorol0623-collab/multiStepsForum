import React from "react";
import { Input } from "../ui/Input";
import { Header } from "../ui/Header";
import Footer from "../ui/Footer";
import { steps } from "framer-motion";
import { motion } from "framer-motion";

export const PrivateInfo = ({ step, handlePrev, handleClick }) => {
  return (
    <motion.div
      className="space-y-3 pt-7 bg-white w-112.5 h-147 flex flex-col justify-center rounded-xl pl-5 pr-5 pb-7"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      <div className="space-y-3 pt-7">
        <Header />
        <Input LabelValue={"Email"} placeholderName={"Your Email"} />
        <Input
          LabelValue={"Phone Number"}
          placeholderName={"Your phone number"}
        />
        <Input
          LabelValue={"Password"}
          placeholderName={"Enter your new password"}
        />
        <Input
          LabelValue={"Confirm Password"}
          placeholderName={"Confirm your previous password"}
        />

        <Footer step={step} handleClick={handleClick} handlePrev={handlePrev} />
      </div>
    </motion.div>
  );
};

export default PrivateInfo;
