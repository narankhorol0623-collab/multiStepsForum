import { Header } from "../ui/Header";

import { Input } from "../ui/Input";
import { motion } from "framer-motion";
import { validateStepTwo } from "@/utils/validators";
import { saveFormValues } from "@/utils/localStorage";
import { Button } from "../ui/Button";
import { animationVariant } from "../constants/animationVariant";
import { ButtonClick } from "../Button";

export const PrivateInfo = ({
	step,
	handleClick,
	handlePrev,
	handleChange,
	formValues,
	formErrors,
	setFormErrors,
}) => {
	const handleSubmitSecond = () => {
		const { errors, isValid } = validateStepTwo(formValues);

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
			transition={{ duration: 1 }}
			className="space-y-3 pt-7 bg-white w-112.5 h-147 flex flex-col justify-center rounded-xl pl-5 pr-5 pb-7">
			<div className="space-y-3 pt-7">
				<Header />
				<div className="pt-7 space-y-3">
					<Input
						type="text"
						name="email"
						LabelValue={"Email"}
						placeholderName={"Enter your email"}
						onChange={handleChange}
						errors={formErrors}
						value={formValues && formValues.firstName ? formValues.email : ""}
					/>
					<Input
						type="text"
						name="phoneNumber"
						LabelValue={"Phone number"}
						placeholderName={"Enter your phone number"}
						onChange={handleChange}
						errors={formErrors}
						value={
							formValues && formValues.firstName ? formValues.phoneNumber : ""
						}
					/>
					<Input
						type="password"
						name="password"
						LabelValue={"Password"}
						placeholderName={"Enter your password"}
						onChange={handleChange}
						errors={formErrors}
						value={
							formValues && formValues.firstName ? formValues.password : ""
						}
					/>
					<Input
						type="password"
						name="confirmPassword"
						LabelValue={"Confirm password"}
						placeholderName={"Please confirm your password"}
						onChange={handleChange}
						errors={formErrors}
						value={
							formValues && formValues.firstName
								? formValues.confirmPassword
								: ""
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
