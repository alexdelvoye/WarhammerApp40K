import * as Yup from "yup";

// Profile password changes need the old password plus a confirmed new password.
export const changePasswordValidationSchema = Yup.object({
  // Firebase uses this value for reauthentication before allowing the update.
  currentPassword: Yup.string().required("Current password is required"),

  // Keep the same minimum length used by registration.
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New password is required"),

  // Confirmation catches typos before the app asks Firebase to update the password.
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});
