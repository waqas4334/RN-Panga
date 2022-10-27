import * as React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, ImageBackground, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Screens from '../screens/';
import navigationStrings from './navigationStrings';
import { colors } from '../assets/colors/colors'
import {
  Bell
} from 'react-native-feather';


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Navigator  >
      <Drawer.Screen name="Home" component={Screens.Home} options={
        {
          headerTitle: 'Geysital Home',
          
          headerTitleAlign: 'center',
          headerTintColor: colors.plusButton,
          headerStyle: {
            backgroundColor: colors.headerBar
          },
          headerRight: () => (
            <View style={{
              marginRight: "10%",
            }}>
              <Bell
                // name={icon}
                size={25}
                color= {colors.plusButton}             />
            </View>
          )
        }
      } />
      <Drawer.Screen name="example" component={Screens.Example} />
      <Drawer.Screen name="Settings" component={Screens.SettingsPage} />
      <Drawer.Screen name="log out" component={Screens.Login} options={
        {
          headerShown: false
        }
      } />
    </Drawer.Navigator>
  );
}


export const RootNavigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={navigationStrings.drawerMainPage}>
        <Stack.Screen name={navigationStrings.Login} component={Screens.Login}
          options={{ headerShown: false }} />
        <Stack.Screen name={navigationStrings.Signup} component={Screens.Signup} options={{ headerShown: false }} />
        <Stack.Screen name={navigationStrings.Example} component={Screens.Example} options={{ headerShown: false }} />
        <Stack.Screen name={navigationStrings.SettingsPage} component={Screens.SettingsPage} options={{ headerShown: false }} />
        {/* <Stack.Screen name={navigationStrings.Home} component={Screens.Home} options={{ headerShown: false }} /> */}
        <Stack.Screen name={navigationStrings.drawerMainPage} options={{ headerShown: false }} component={App}


        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}











