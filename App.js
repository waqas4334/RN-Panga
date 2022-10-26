// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
// // Spread operator ander ki chezein nikl le ata ha 
//   const hobbies = ["waqas", "ahmed"];
//   const copiedArray = [...hobbies];
//   console.log(copiedArray);


// //Rest operator 
//   const toArray = (...args) => {
//     return args;
//   }
//   console.log(toArray(1,2,3));

// //object destructuring
//   const person = {
//     name: "waqas",
//     age: 22

//   }
//   const printName = ({ name, age }) => {
//     console.log(name, age);
//   }
//   printName(person)
//   const { name, age } = person;
//   console.log(age, name);

// //array destructuring [marzi k name rakho]
//   const [hobby1, hobby2] = hobbies;
//   console.log(hobby1, hobby2);

 
//   return (
//     <View style={styles.container}>
//       <Text> waqas</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import * as React from 'react';
import { RootNavigation } from './src/navigation/RootNavigation'
import { NativeBaseProvider, Text, Box } from "native-base";
import { View, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
// import { Provider } from 'react-redux'
import {colors}  from './src/assets/colors/colors'
// import store from './src/store/store'


const App = () => {
  return (<>
    {/* <Provider store={store}> */}
      <NativeBaseProvider>
        <StatusBar

backgroundColor={colors.statusbar}
          barStyle="dark-content"/>
        <RootNavigation />

      </NativeBaseProvider>
    {/* </Provider> */}
  </>
  )
}
export default App

const styles = StyleSheet.create({})







