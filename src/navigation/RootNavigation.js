import * as React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, ImageBackground,Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import components from '../screens/';
import navigationStrings from './navigationStrings';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

 const App=()=> {
  return (
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={components.Home} />
        <Drawer.Screen name="example" component={components.Example} />
      </Drawer.Navigator>
  );
}

export const RootNavigation = () => {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName={navigationStrings.drawerMainPage}>
        <Stack.Screen name={navigationStrings.Login} component={components.Login}
          options={{ headerShown: false }} />


        <Stack.Screen name={navigationStrings.Signup} component={components.Signup} options={{ headerShown: false }} />
        <Stack.Screen name={navigationStrings.Example} component={components.Example} options={{ headerShown: false }} />
        {/* <Stack.Screen name={navigationStrings.Home} component={components.Home} options={{ headerShown: false }} /> */}
        <Stack.Screen name={navigationStrings.drawerMainPage} options={{ headerShown: false }} component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}











