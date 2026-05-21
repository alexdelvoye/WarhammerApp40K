import * as Yup from "yup";

export const selectArmyValidationSchema = Yup.object({
  armyCompositionName: Yup.string()
    .required("Army name is required")
    .min(3, "Army name must be at least 3 characters long"),
});
