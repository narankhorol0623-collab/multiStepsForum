import { animationVariant } from "@/constants/animationVariants";
import { Header } from "../ui/Header";

import { Input } from "../ui/Input";
import { motion } from "framer-motion";
import { Button } from "../Button";
import { validateStepTwo } from "@/utils/validators";
import { saveFormValues } from "@/utils/localStorage";

export const PrivateInfo = ({
	step,
	handleClick,
	handlePrev,
	handleChange,
	formValues,
	formErrors,
	setFormErrors,
	errors,
	value,
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
			className="flex bg-gray-100 items-center min-h-screen">
			<div className="flex flex-col ml-150 justify-between p-8 bg-white rounded-lg">
				<Header />
				<div className="pt-7 space-y-3">
					<Input
						type="text"
						name="email"
						LabelValue={"Email"}
						placeholderName={"Your email"}
						onChange={handleChange}
						errors={formErrors}
						value={formValues.email}
					/>
					<Input
						type="text"
						name="phoneNumber"
						LabelValue={"Phone number"}
						placeholderName={"Your phone number"}
						onChange={handleChange}
						errors={formErrors}
						value={formValues.phoneNumber}
					/>
					<Input
						type="password"
						name="password"
						LabelValue={"Password"}
						placeholderName={"Your password"}
						onChange={handleChange}
						errors={formErrors}
						value={formValues.password}
					/>
					<Input
						type="password"
						name="confirmPassword"
						LabelValue={"Confirm password"}
						placeholderName={"Confirm password"}
						onChange={handleChange}
						errors={formErrors}
						value={formValues.confirmPassword}
					/>
				</div>
				<Button
					step={step}
					handleClick={handleSubmitSecond}
					handlePrev={handlePrev}
				/>
			</div>
		</motion.div>
	);
};
