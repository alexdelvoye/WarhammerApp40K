import * as Yup from "yup";

export const changeEmailValidationSchema = Yup.object({
  currentPassword: Yup.string().required("Current password is required"),

  newEmail: Yup.string()
    .email("Enter a valid email")
    .required("New email is required"),
});
