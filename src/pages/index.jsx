import { useState } from "react";
import { Name, Phone, ProfileImage, Success } from "@/components/steps";
import { Header } from "@/components/ui/Header";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import Footer from "@/components/ui/Footer";

export const Home = () => {
  return (
    <div className="flex bg-gray-100 justify-center items-center m-auto min-h-screen">
      <div className="flex flex-col p-8 bg-white rounded-lg">
        <Header />
        <div className="space-y-3 pt-7">
          <Input
            LabelValue={"First name"}
            placeholderName={"Your first name"}
          />
          <Input LabelValue={"Last name"} placeholderName={"Your last name"} />
          <Input LabelValue={"Username"} placeholderName={"Your username"} />
        </div>
        <div className="pt-6">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
