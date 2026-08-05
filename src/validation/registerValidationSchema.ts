import * as Yup from "yup";

// Registration requires a valid email and two matching password fields.
export const registerValidationSchema = Yup.object({
  // Firebase expects email-style credentials for this app.
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),

  // Firebase accepts short passwords from six characters, so the UI mirrors that rule.
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  // Confirmation prevents accidental typos before creating the account.
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
