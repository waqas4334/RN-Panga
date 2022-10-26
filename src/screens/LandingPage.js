import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import screens from '../screens';
import { colors } from '../assets/colors/colors';

const Tab = createMaterialTopTabNavigator();
export const LandingPage = () => {
  return (
    <Tab.Navigator 
      initialRouteName="Home"  screenOptions={{
    tabBarStyle: { backgroundColor: colors.headerBar },
    tabBarLabelStyle: { color: "#2563eb" },
  }}
    >
    <Tab.Screen name="Home" component={screens.Example} />
    <Tab.Screen name="settings" component={screens.SettingsPage} />
  </Tab.Navigator>
  )
}




// const MainPage = () => {
//   return (
//     <View>
//       <Text>LandingPage</Text>
//     </View>
//   )
// }



const styles = StyleSheet.create({})