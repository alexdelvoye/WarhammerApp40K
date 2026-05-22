import React from "react";
import { Text, Pressable } from "react-native";

import { AddUnitButtonStyles as styles } from "../../styles/addUnitButtonStyles";

type AddUnitButtonProps = {
    onPress: () => void;
};

const AddUnitButton = ({ onPress }: AddUnitButtonProps) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Add Unit</Text>
        </Pressable>
    );
}

export default AddUnitButton;