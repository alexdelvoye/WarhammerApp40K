import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { Formik } from "formik";

import { createArmyCompositionValidationSchema } from "../../validation/createArmyCompositionValidationSchema";

import { useTheme } from "../../hooks/useTheme";

import { CreateArmyCompositionScreenStyles as styles } from "../../styles/createArmyCompositionScreenStyles";
import { themeColors } from "../../styles/themeColors";

type CreateArmyCompositionFormProps = {
  createArmyComposition: (armyCompositionName: string) => void;
  children: React.ReactNode;
};

const CreateArmyCompositionForm = ({
  createArmyComposition,
  children,
}: CreateArmyCompositionFormProps) => {
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    <View style={styles.formContainer}>
      <Formik
        // Formik stores the input value and validation state for this form.
        initialValues={{ armyCompositionName: "" }}
        validationSchema={createArmyCompositionValidationSchema}
        onSubmit={(values) => {
          // Formik validates first; this submit only runs with a valid army name.
          createArmyComposition(values.armyCompositionName);
        }}
      >
        {(props) => (
          <View style={styles.formContent}>
            <Text style={styles.label}>Army Name</Text>

            {/* TextInput is controlled by Formik, so the form state always matches the input. */}
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              placeholder="Enter army name"
              placeholderTextColor={colors.subText}
              onChangeText={props.handleChange("armyCompositionName")}
              value={props.values.armyCompositionName}
              onBlur={props.handleBlur("armyCompositionName")}
            />

            <Text style={styles.errorText}>
              {props.errors.armyCompositionName &&
              props.touched.armyCompositionName
                ? props.errors.armyCompositionName
                : ""}
            </Text>

            {children}

            {/* handleSubmit runs validation and then calls onSubmit if the data is valid. */}
            <Pressable
              style={[styles.createButton, { backgroundColor: colors.button }]}
              onPress={() => props.handleSubmit()}
            >
              <Text
                style={[styles.createButtonText, { color: colors.buttonText }]}
              >
                Create Army
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CreateArmyCompositionForm;
