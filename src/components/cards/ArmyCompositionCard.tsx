import { ImageBackground, TouchableOpacity, View, Text } from "react-native";
import { ArmyComposition } from "../../types/army_composition";
import { ArmyCompositionCardStyles as styles } from "../../styles/army_composition_card.styles";

export function ArmyCompositionCard({ item }: { item: ArmyComposition }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.cardImage}
        imageStyle={styles.cardImageStyle}
      >
        <View style={styles.overlay}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardSubtitle}>{item.army.name}</Text>
          <Text style={styles.cardText}>{item.units.length} units</Text>

          <View style={styles.pointsBadge}>
            <Text style={styles.pointsText}>{item.totalPoints} Points</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
