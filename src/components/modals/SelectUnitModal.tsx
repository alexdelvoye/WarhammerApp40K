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
    return (
      <UnitCard unit={item} buttonText="+" onPress={() => onAddUnit(item)} />
    );
  };

  const isOverPointLimit = totalPoints > maxPoints;

  return (
    <Modal visible={visible} animationType="slide">
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
