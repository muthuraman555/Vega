import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
      first_name: yup
      .string()
      .required("First Name Required"),
      last_name: yup
      .string()
      .required("Last Name Required"),
      message: yup
      .string()
      .required("Message Required"),
  });
  