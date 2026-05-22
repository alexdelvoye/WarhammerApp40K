import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { Formik } from "formik";

import { createArmyCompositionValidationSchema } from "../../validation/createArmyCompositionValidationSchema";
import { CreateArmyCompositionScreenStyles as styles } from "../../styles/createArmyCompositionScreenStyles";

type CreateArmyCompositionFormProps = {
  createArmyComposition: (armyCompositionName: string) => void;
};

const CreateArmyCompositionForm = ({
  createArmyComposition,
}: CreateArmyCompositionFormProps) => {
  return (
    <View>
      <Formik
        initialValues={{ armyCompositionName: "" }}
        validationSchema={createArmyCompositionValidationSchema}
        onSubmit={(values) => {
          createArmyComposition(values.armyCompositionName);
        }}
      >
        {(props) => (
          <View>
            <Text style={styles.label}>Army Name</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter army name"
              placeholderTextColor="#777"
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

            <Pressable
              style={styles.createButton}
              onPress={() => props.handleSubmit()}
            >
              <Text style={styles.createButtonText}>Create Army</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CreateArmyCompositionForm;
