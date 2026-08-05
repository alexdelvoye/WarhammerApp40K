import * as Yup from "yup";

// Login only needs the credentials Firebase can verify.
export const loginValidationSchema = Yup.object({
  // Validate format locally before sending the email to Firebase.
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),

  // The exact password is checked remotely by Firebase Authentication.
  password: Yup.string().required("Password is required"),
});
