import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DetailsScreen from "../screens/DetailsScreen";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tabs = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "#A7CCF6",
        tabBarStyle: {
          backgroundColor: "white",
          justifyContent: "center",
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        options={{
          title: "Home",
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tabs.Screen
        options={{
          title: "Details",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account-details"
              size={24}
              color="black"
            />
          ),
        }}
        name="Details"
        component={DetailsScreen}
      />
      <Tabs.Screen
        options={{
          title: "Settings",
          tabBarIcon: () => (
            <Ionicons name="settings" size={24} color="black" />
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tabs.Navigator>
  );
}
