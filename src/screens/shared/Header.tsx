import React from "react";
import { View, Text, Pressable, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";

import { HeaderStyles as styles } from "../../styles/headerStyles";

import { DrawerNavigationProp } from "@react-navigation/drawer";
import { BattleForgeInformationDrawerStackParamList } from "../../navigation/BattleForgeInformationDrawerStack";

import { Ionicons } from "@expo/vector-icons";

type HeaderProps = {
  title: string;
  canGoBack?: boolean;
};

const Header = ({ title, canGoBack = false }: HeaderProps) => {
  const navigation =
    useNavigation<
      DrawerNavigationProp<BattleForgeInformationDrawerStackParamList>
    >();

  const handleMenuPress = () => {
    if (canGoBack && navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.openDrawer();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../../assets/images/header_background.png")}
        style={styles.container}
      >
        <View style={styles.header}>
          <Pressable style={styles.navigationButton} onPress={handleMenuPress}>
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

          <Text style={styles.title}>{title}</Text>

          <View style={styles.placeholder} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Header;
