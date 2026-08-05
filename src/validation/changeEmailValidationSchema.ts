import * as Yup from "yup";

// Email changes are sensitive, so the form asks for the current password too.
export const changeEmailValidationSchema = Yup.object({
  // Firebase reauthenticates the current user with this password.
  currentPassword: Yup.string().required("Current password is required"),

  // The new address must look like an email before Firebase receives it.
  newEmail: Yup.string()
    .email("Enter a valid email")
    .required("New email is required"),
});
