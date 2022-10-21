import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import components from '../screens/';
import navigationStrings from './navigationStrings';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer  > 
      <Stack.Navigator initialRouteName={navigationStrings.Signup}>
        <Stack.Screen name={navigationStrings.Login} component={components.Login}
          options={{ headerShown: false }} />


        <Stack.Screen name={navigationStrings.Signup} component={components.Signup} options={{

          headerShown: false
        }} />
        <Stack.Screen name={navigationStrings.Example} component={components.Example} options={{ headerShown: false }} />
        <Stack.Screen name={navigationStrings.Home} component={components.Home}
         options={{ headerShown: false }} 
         />
      </Stack.Navigator>
    </NavigationContainer>
  )
}











