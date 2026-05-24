import React from "react";
import { FlatList, Modal, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Unit } from "../../types/unit";

import { useTheme } from "../../hooks/useTheme";

import UnitCard from "../cards/UnitCard";

import { SelectUnitModalStyles as styles } from "../../styles/selectUnitModalStyles";
import { themeColors } from "../../styles/themeColors";

type SelectUnitModalProps = {
  visible: boolean;
  units: Unit[];
  totalPoints: number;
  maxPoints: number;
  onClose: () => void;
  onAddUnit: (unit: Unit) => void;
};

const SelectUnitModal = ({
  visible,
  units,
  totalPoints,
  maxPoints,
  onClose,
  onAddUnit,
}: SelectUnitModalProps) => {
  const { theme } = useTheme();
  const colors = themeColors[theme];

  const renderUnitItem = ({ item }: { item: Unit }) => {
    // In the modal, the same UnitCard uses a plus button to add units.
    return (
      <UnitCard unit={item} buttonText="+" onPress={() => onAddUnit(item)} />
    );
  };

  // Shows red points text when the composition is above the allowed limit.
  const isOverPointLimit = totalPoints > maxPoints;

  return (
    <Modal visible={visible} animationType="slide">
      {/* Modal uses its own SafeAreaView because it is displayed as a separate screen layer. */}
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <Pressable onPress={onClose}>
          <Text style={[styles.closeText, { color: colors.text }]}>Close</Text>
        </Pressable>

        <Text
          style={[
            styles.pointsText,
            { color: colors.text },
            isOverPointLimit && styles.pointsTextError,
          ]}
        >
          {totalPoints}/{maxPoints} Points
        </Text>

        {/* The modal receives units from the selected army, so only valid units are shown. */}
        <FlatList
          data={units}
          renderItem={renderUnitItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default SelectUnitModal;
