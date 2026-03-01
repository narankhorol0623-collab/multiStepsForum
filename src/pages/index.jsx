import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  ContactInfo,
  PrivateInfo,
  ProfileImage,
  Success,
} from "@/components/steps";


export const Home = () => {
  const [step, setStep] = useState(0);
  const handlePrev = () => {
    setStep(step - 1);
  };
  const handleClick = () => {
    setStep(step + 1);
  };
  const Container = [ContactInfo, PrivateInfo, ProfileImage, Success][step];
  return (
    <div className="flex justify-center shadow-2xl items-center m-auto min-h-screen">
      <div className="flex flex-col p-9 text-white rounded-lg">
        <div>
          <AnimatePresence mode="wait">
            <Container
              handlePrev={handlePrev}
              handleClick={handleClick}
              step={step}

            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Home;
