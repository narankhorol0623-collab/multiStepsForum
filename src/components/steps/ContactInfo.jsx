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
			className="space-y-3 pt-7 bg-white w-112.5 h-125 flex flex-col justify-center rounded-xl p-5">
			<div className="">
				<Header />

				<div className="space-y-3 pt-7">
					<Input
						LabelValue={"First name"}
						placeholderName={"Enter your first name"}
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
						placeholderName={"Enter your last name"}
						onChange={handleChange}
						errors={formErrors}
						value={
							formValues && formValues.firstName ? formValues.lastName : ""
						}
					/>

					<Input
						LabelValue={"Username"}
						placeholderName={"Enter your username"}
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
