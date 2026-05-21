import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Formik } from "formik";
import { selectArmyValidationSchema } from "../validation/selectArmyValidationSchema";

import { Army } from "../types/army";

import { armies } from "../data/mockArmies";

import { SelectArmyScreenStyles as styles } from "../styles/selectArmyScreenStyles";

export default function SelectArmyScreen() {
  const [selectedArmy, setSelectedArmy] = useState<Army | null>(null);
  const [armySelectionError, setArmySelectionError] = useState("");

  const renderArmyItem = ({ item }: { item: Army }) => {
    const isSelected = selectedArmy?.id === item.id;

    return (
      <Pressable
        style={[styles.armyButton, isSelected && styles.selectedArmyButton]}
        onPress={() => {
          setSelectedArmy(item);
          setArmySelectionError("");
        }}
      >
        <Text style={styles.armyText}>{item.name}</Text>
        <Text style={styles.armyRule}>{item.armyRule}</Text>
      </Pressable>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Formik
          initialValues={{ armyCompositionName: "" }}
          validationSchema={selectArmyValidationSchema}
          onSubmit={(values) => {
            if (!selectedArmy) {
              setArmySelectionError("Please select an army");
              return;
            }

            console.log("Army composition name:", values.armyCompositionName);
            console.log("Selected army:", selectedArmy.name);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <Text style={styles.label}>Army Name</Text>

              <TextInput
                style={styles.input}
                placeholder="enter army name"
                placeholderTextColor="#777"
                value={values.armyCompositionName}
                onChangeText={handleChange("armyCompositionName")}
                onBlur={handleBlur("armyCompositionName")}
              />

              {touched.armyCompositionName && errors.armyCompositionName && (
                <Text style={styles.errorText}>
                  {errors.armyCompositionName}
                </Text>
              )}

              <Text style={styles.label}>Select Army</Text>

              <FlatList
                data={armies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderArmyItem}
              />

              {armySelectionError !== "" && (
                <Text style={styles.errorText}>{armySelectionError}</Text>
              )}

              <Pressable
                style={styles.createButton}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.createButtonText}>Create Army</Text>
              </Pressable>
            </>
          )}
        </Formik>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
