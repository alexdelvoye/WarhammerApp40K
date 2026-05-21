import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { HomeScreenStyles as styles } from "../styles/home_screen.styles";
import { ArmyComposition } from "../types/army_composition";
import { Unit } from "../types/unit";
import { Army } from "../types/army";
import { Weapon } from "../types/weapon";
import { ArmyCompositionCard } from "../components/cards/ArmyCompositionCard";

const lasgun: Weapon = {
  id: 1,
  name: "Lasgun",
  range: 24,
  attacks: 1,
  weaponSkill: 4,
  strength: 3,
  armorPenetration: 0,
  damage: 1,
};

const plasmagun: Weapon = {
  id: 2,
  name: "Plasmagun",
  range: 24,
  attacks: 1,
  weaponSkill: 4,
  strength: 7,
  armorPenetration: -3,
  damage: 1,
};

const cadianShockTroops: Unit = {
  id: 1,
  name: "Cadian Shock Troops",
  movement: 6,
  toughness: 3,
  save: 5,
  wounds: 1,
  leadership: 7,
  objectControl: 2,
  weapons: [lasgun, plasmagun],
  ability:
    "This unit can fire Overwatch even if it has already fired a weapon this turn.",
  points: 65,
  image: "cadian_shock_troops_image.png",
};

const cadianCommandSquad: Unit = {
  id: 2,
  name: "Cadian Command Squad",
  movement: 6,
  toughness: 3,
  save: 5,
  wounds: 1,
  leadership: 7,
  objectControl: 1,
  weapons: [lasgun, plasmagun],
  ability:
    'This unit can issue orders to friendly ASTRA MILITARUM units within 6" of it.',
  points: 65,
  image: "cadian_command_squad_image.png",
};

const AstraMilitarum: Army = {
  id: 1,
  name: "Astra Militarum",
  armyRule: "All units have the LETHAL hits ability.",
  units: [cadianShockTroops, cadianCommandSquad],
  image: "astra_militarum_image.png",
};

const MyFirstArmy: ArmyComposition = {
  id: 1,
  name: "My First Army",
  army: AstraMilitarum,
  units: [cadianShockTroops, cadianCommandSquad],
  totalPoints: 130,
  image: "${AstraMilitarum.image}",
};

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>BATTLE FORGE</Text>

      <FlatList
        data={[MyFirstArmy]} // Replace with your actual data
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ArmyCompositionCard item={item} />}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
