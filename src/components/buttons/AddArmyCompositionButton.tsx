import { Pressable, Text } from "react-native";
import { addArmyCompositionButtonStyles as styles } from "../../styles/addArmyCompositionButtonStyles";

type addButtonProps = {
    onPress: () => void;
};

export default function AddArmyCompositionButton ({ onPress }: addButtonProps) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.plusText}>+</Text>
        </Pressable>
    );
};