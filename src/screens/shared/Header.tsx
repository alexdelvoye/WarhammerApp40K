import { View, Text, TouchableOpacity } from "react-native";
import { HomeStackParamList } from "../../navigation/HomeStack";
import React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/core";
import { HeaderStyles as styles } from "../../styles/header.styles";
import { Ionicons } from "@expo/vector-icons";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation<DrawerNavigationProp<HomeStackParamList>>();

  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
