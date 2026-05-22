import { Pressable, Text } from "react-native";
import { AddArmyCompositionButtonStyles as styles } from "../../styles/addArmyCompositionButtonStyles";

type addButtonProps = {
  onPress: () => void;
};

const AddArmyCompositionButton = ({ onPress }: addButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.plusText}>+</Text>
    </Pressable>
  );
};

export default AddArmyCompositionButton;
