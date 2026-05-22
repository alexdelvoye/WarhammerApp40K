import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp, useRoute } from "@react-navigation/native";

import { Unit } from "../types/unit";
import UnitCard from "../components/cards/UnitCard";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

import { SelectUnitScreenStyles as styles } from "../styles/selectUnitScreenStyles";

type SelectUnitScreenRouteProps = RouteProp<
    BattleForgeStackParamList,
    "SelectUnit"
>;

export default function SelectUnitScreen() {
    const route = useRoute<SelectUnitScreenRouteProps>();
    const { units } = route.params;

    const renderUnitItem = ({ item }: { item: Unit }) => {
        return (
        <UnitCard
            unit={item}
            buttonText="+"
            onPress={() => console.log("Add unit:", item.name)}
        />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={units}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderUnitItem}
            />
        </SafeAreaView>
    );
}
