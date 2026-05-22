import React from "react";
import { Pressable, Text, View } from "react-native";

import { Unit } from "../../types/unit";

import { UnitCardStyles as styles } from "../../styles/unitCardStyles";

type UnitCardProps = {
    unit: Unit;
    buttonText: string;
    onPress: () => void;
};

const UnitCard = ({ unit, buttonText, onPress }: UnitCardProps) => {
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <Text style={styles.name}>{unit.name}</Text>

                <Text style={styles.stats}>
                    M {unit.movement}" | T {unit.toughness} | Sc {unit.save} | W{" "}{unit.wounds}
                </Text>

                <Text style={styles.points}>{unit.points} Points</Text>
            </View>

            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>
        </View>
    );
}

export default UnitCard;