import { createStackNavigator } from "@react-navigation/stack";
import GameRulesScreen from "../screens/GameRulesScreen";
import ArmyRulesScreen from "../screens/ArmyRulesScreen";
import AccountScreen from "../screens/AccountScreen";

export type InformationStackParamList = {
  GameRules: undefined;
  ArmyRule: undefined;
  Account: undefined;
};

const Stack = createStackNavigator<InformationStackParamList>();

export default function InformationStack() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="GameRules"
        component={GameRulesScreen}
        options={{
          title: "Game Rules",
        }}
      />
      <Stack.Screen
        name="ArmyRule"
        component={ArmyRulesScreen}
        options={{
          title: "Army Rules",
        }}
      />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Account",
        }}
      />
    </Stack.Navigator>
  );
}
