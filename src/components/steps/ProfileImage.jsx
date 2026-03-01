import { isDragging, px } from "framer-motion";

import { Header } from "../ui/Header";
import { Input } from "../ui/Input";
import { motion } from "framer-motion";
import { animationVariant } from "@/constants/animationVariants";
import { Button } from "../Button";
import { validateStepThree } from "@/utils/validators";
import { ErrorMessage } from "../ui/ErrorMessage";
import { saveFormValues } from "@/utils/localStorage";

export const ProfileImage = ({
	step,
	handleClick,
	handlePrev,
	handleChange,
	formValues,
	formErrors,
	isDragging,
	inputRef,
	handleBrowserClick,
	imageUrl,
	handleDrop,
	handleDragOver,
	handleDragLeave,
	handleChangeProfile,
	clearImage,
	setImageUrl,
	setIsDragging,
	setFormErrors,
	value,
}) => {
	const handleSubmitThird = () => {
		const { errors, isValid } = validateStepThree(formValues);

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
				<div className="pt-7 flex flex-col ">
					<Input
						type="date"
						name="birthDay"
						LabelValue={"Date of Birth"}
						onChange={handleChange}
						errors={formErrors}
						value={formValues.birthDay}
					/>
					<Input
						type="file"
						name="profile"
						LabelValue={"Profile image"}
						hidden
						errors={formErrors}
						onChange={handleChangeProfile}
						ref={inputRef}
					/>

					<button
						onClick={clearImage}
						style={{
							display: "flex",
							alignItems: "flex-end",
							justifyContent: "flex-end",
						}}>
						x
					</button>
					<div
						onDrop={handleDrop}
						errors={formErrors}
						onChange={handleChange}
						onDragOver={handleDragOver}
						onClick={handleBrowserClick}
						onDragLeave={handleDragLeave}
						style={{
							width: 416,
							height: 180,
							borderRadius: 6,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							fontSize: 14,
							rowGap: 4,
							backgroundColor: "#7F7F800D",
							border: isDragging ? "1px solid black" : "1px solid transparent",
							position: "relative",
						}}>
						<div className="flex justify-center items-center rounded-full w-7 h-7 bg-white">
							<img src="/image.png" alt="" className="w-3 h-3" />
						</div>
						<div>Browse or drop image</div>{" "}
						{imageUrl && (
							<img
								src={imageUrl}
								alt="image"
								style={{
									width: 416,
									height: 180,
									objectFit: "cover",
									position: "absolute",
								}}
							/>
						)}
					</div>
				</div>
				<Button
					step={step}
					handleClick={handleSubmitThird}
					handlePrev={handlePrev}
				/>
			</div>
		</motion.div>
	);
};
