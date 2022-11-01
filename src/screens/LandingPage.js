import React from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import screens from "./index"
import { colors } from "../assets/colors/colors"

// import ProgressCircle from 'react-native-progress-circle';
import { Card, Avatar } from "@rneui/base"
import { CardTitle } from "@rneui/base/dist/Card/Card.Title"
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native"
import {
  Menu,
  Bell,
  Settings,
  ArrowDown,
  Thermometer,
  Power,
} from "react-native-feather"
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen"
import { LinearGradient } from "expo-linear-gradient"

const Tab = createMaterialTopTabNavigator()
export const LandingPage = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.tabBar,
        },
        tabBarLabelStyle: { color: colors.plusButton },
      }}>
      <Tab.Screen name="Home" component={screens.GensetHome} />
      <Tab.Screen name="settings" component={screens.SettingsPage} />
    </Tab.Navigator>
  )
}
