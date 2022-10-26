import * as React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, ImageBackground,Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Screens from '../screens/';
import navigationStrings from './navigationStrings';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

 const App=()=> {
  return (
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={Screens.Home}  />
        <Drawer.Screen name="example" component={Screens.Example} />
      </Drawer.Navigator>
  );
}
const Tab=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

export const RootNavigation = () => {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName={navigationStrings.drawerMainPage}>
        <Stack.Screen name={navigationStrings.Login} component={Screens.Login}
          options={{ headerShown: false }} />


        <Stack.Screen name={navigationStrings.Signup} component={Screens.Signup} options={{ headerShown: false }} />
        <Stack.Screen name={navigationStrings.Example} component={Screens.Example} options={{ headerShown: false }} />
        <Stack.Screen name={navigationStrings.SettingsPage} component={Screens.SettingsPage} options={{ headerShown: false }} />
        {/* <Stack.Screen name={navigationStrings.Home} component={Screens.Home} options={{ headerShown: false }} /> */}
        <Stack.Screen name={navigationStrings.drawerMainPage} options={{ headerShown: false }} component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}











