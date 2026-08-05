import { Pressable, Text } from "react-native";

import { useTheme } from "../../hooks/useTheme";

import { AddArmyCompositionButtonStyles as styles } from "../../styles/addArmyCompositionButtonStyles";
import { themeColors } from "../../styles/themeColors";

// Parent screens pass the navigation action into this reusable floating button.
type addButtonProps = {
  onPress: () => void;
};

const AddArmyCompositionButton = ({ onPress }: addButtonProps) => {
  // The button follows the current global theme.
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    // The plus button opens the create-composition screen from Home.
    <Pressable
      style={[styles.button, { backgroundColor: colors.button }]}
      onPress={onPress}
    >
      <Text style={[styles.plusText, { color: colors.buttonText }]}>+</Text>
    </Pressable>
  );
};

export default AddArmyCompositionButton;
