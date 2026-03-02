import { Header } from "@/components/ui/Header";
import { Input } from "../ui/Input";
import { motion } from "framer-motion";
import { validateStepOne } from "@/utils/validators";
import { saveFormValues } from "@/utils/localStorage";
import { Button } from "../ui/Button";
import { animationVariant } from "../constants/animationVariant";
import { initialValues } from "../constants/initial";
import { ButtonClick } from "../Button";

export const ContactInfo = ({
  step,
  handleClick,
  handlePrev,
  handleChange,
  formValues,
  formErrors,
  setFormErrors,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepOne(formValues);

    setFormErrors(errors);

    if (isValid) {
      handleClick();
    }
    saveFormValues(formValues, step);
  };

  return (
    <motion.div
      initial="enter"
      animate="active"
      exit="exit"
      variants={animationVariant}
      transition={{ duration: 0.2 }}
      className="flex bg-gray-100 items-center min-h-screen"
    >
      <div className="flex flex-col ml-150 justify-between p-8 bg-white rounded-lg">
        <Header />

        <div className="space-y-3 pt-7">
          <Input
            LabelValue={"First name"}
            placeholderName={"Your first name"}
            name="firstName"
            onChange={handleChange}
            errors={formErrors}
            value={
              formValues && formValues.firstName ? formValues.firstName : ""
            }
          />

          <Input
            LabelValue={"Last name"}
            name="lastName"
            placeholderName={"Your last name"}
            onChange={handleChange}
            errors={formErrors}
            value={
              formValues && formValues.firstName ? formValues.lastName : ""
            }
          />

          <Input
            LabelValue={"Username"}
            placeholderName={"Your username"}
            name="userName"
            onChange={handleChange}
            errors={formErrors}
            value={
              formValues && formValues.firstName ? formValues.userName : ""
            }
          />
        </div>
        <ButtonClick
          step={step}
          handleClick={handleClick}
          handlePrev={handlePrev}
        />
      </div>
    </motion.div>
  );
};
