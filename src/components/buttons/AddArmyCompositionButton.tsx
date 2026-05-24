import { Pressable, Text } from "react-native";

import { useTheme } from "../../hooks/useTheme";

import { AddArmyCompositionButtonStyles as styles } from "../../styles/addArmyCompositionButtonStyles";
import { themeColors } from "../../styles/themeColors";

type addButtonProps = {
  onPress: () => void;
};

const AddArmyCompositionButton = ({ onPress }: addButtonProps) => {
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    <Pressable
      style={[styles.button, { backgroundColor: colors.button }]}
      onPress={onPress}
    >
      <Text style={[styles.plusText, { color: colors.buttonText }]}>+</Text>
    </Pressable>
  );
};

export default AddArmyCompositionButton;
