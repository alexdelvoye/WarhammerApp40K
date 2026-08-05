import React from "react";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import { BattleForgeInformationDrawerStackParamList } from "../../navigation/BattleForgeInformationDrawerStack";

import { HeaderStyles as styles } from "../../styles/headerStyles";

// Header can behave as a drawer opener or a back button depending on the screen.
type HeaderProps = {
  title: string;
  canGoBack?: boolean;
  onBackPress?: () => void;
};

const Header = ({ title, canGoBack = false, onBackPress }: HeaderProps) => {
  // The header needs drawer access because top-level screens open the side menu.
  const navigation =
    useNavigation<
      DrawerNavigationProp<BattleForgeInformationDrawerStackParamList>
    >();

  const handleMenuPress = () => {
    // The same button acts as Back on detail screens and Menu on top-level screens.
    if (canGoBack && onBackPress) {
      onBackPress();
    } else if (canGoBack && navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.openDrawer();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      {/* The header uses an image background, so title/icons stay white for readability. */}
      <ImageBackground
        source={require("../../assets/images/header_background.png")}
        style={styles.container}
      >
        <View style={styles.header}>
          <Pressable style={styles.navigationButton} onPress={handleMenuPress}>
            {/* Icon changes depending on whether this screen can go back. */}
            {canGoBack ? (
              <Ionicons name="arrow-back" size={24} color="white" />
            ) : (
              <Ionicons name="menu" size={24} color="white" />
            )}
          </Pressable>

          <Image
            source={require("../../assets/images/header_icon.png")}
            style={styles.icon}
          />

          {/* Title text uses the custom loaded MedievalSharp font. */}
          <Text style={styles.title}>{title}</Text>

          {/* Placeholder balances the left nav button so the title stays visually centered. */}
          <View style={styles.placeholder} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Header;
