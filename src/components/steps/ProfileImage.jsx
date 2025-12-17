import React from "react";
import { Input } from "../ui/Input";
import { Header } from "../ui/Header";
import Footer from "../ui/Footer";
import { steps } from "framer-motion";
import { motion } from "framer-motion";

export const ProfileImage = ({ step, handlePrev, handleClick }) => {
  return (
    <motion.div
      className="space-y-3 pt-7 bg-white w-112.5 h-140 flex flex-col justify-center rounded-xl pr-5 pl-5 pb-10"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      <div className="space-y-3 pt-7">
        <Header />
        <Input type="date" LabelValue={"Date of birth"} />
        <Input type="file" LabelValue={"Profile Image"} hidden={true} />
        <div className="h-45 w-104 bg-gray-200 rounded-xl flex flex-col items-center justify-center">
          <img src="iconpic.png" alt="" className="h-7 w-7" />
          <p className="text-md font-bold text-black">Add Image</p>
        </div>

        <Footer step={step} handleClick={handleClick} handlePrev={handlePrev} />
      </div>
    </motion.div>
  );
};
