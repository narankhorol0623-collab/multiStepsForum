import { isEmail, isEmpty, isPhoneNumber } from "./validation-utils";

export const validateStepOne = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.firstName)) {
    errors.firstName = "Please enter your name!";
  }
  if (isEmpty(formValues.lastName)) {
    errors.lastName = "Please enter your lastname!";
  }
  if (isEmpty(formValues.userName)) {
    errors.userName = "Enter your username!";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};

export const validateStepTwo = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.email)) {
    errors.email = "Please enter your email!";
  } else {
    if (!isEmail(formValues.email)) {
      errors.email = "Please enter your email correct!";
    }
  }
  if (isEmpty(formValues.phoneNumber)) {
    errors.phoneNumber = "Enter your phone number.";
  } else {
    if (!isPhoneNumber(formValues.phoneNumber)) {
      errors.phoneNumber = "Phone number is wrong!";
    }
  }
  if (isEmpty(formValues.password)) {
    errors.password = "Please enter your password!";
  }
  if (formValues.password.length < "6") {
    errors.password = "Enter password exists 6 numbers!";
  } else {
    formValues.password;
  }

  if (isEmpty(formValues.confirmPassword)) {
    errors.confirmPassword = "Enter your password again!";
  }
  if (formValues.password !== formValues.confirmPassword) {
    errors.confirmPassword = "Password is not correct.";
  } else {
    formValues.confirmPassword;
  }
  {
  }
  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};

export const validateStepThree = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.birthDay)) {
    errors.birthDay = "Enter your birhtday!";
  } else if (formValues.birthDay > new Date()) {
    errors.birthDay = "Invalid Birthday!";
  } else if (formValues.birthDay) {
  }
  if (isEmpty(formValues.profile)) {
    errors.profile = "Please put your profile photo!";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};