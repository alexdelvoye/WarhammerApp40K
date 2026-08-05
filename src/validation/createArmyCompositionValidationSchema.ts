import * as Yup from "yup";

// Formik uses this schema for the army-composition name input.
export const createArmyCompositionValidationSchema = Yup.object({
  // A short minimum keeps list names readable on cards and detail screens.
  armyCompositionName: Yup.string()
    .required("Army name is required")
    .min(3, "Army name must be at least 3 characters long"),
});
