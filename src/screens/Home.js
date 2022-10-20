// // import { StyleSheet, View, StatusBar, SafeAreaView, Linking, FlatList } from 'react-native'
// // import { Pressable, Input, Stack, Box, Center, Button, Image, Text, Badge, HStack, VStack, Flex, Icon, Divider, Modal, FormControl, Skeleton, NumberIncrementStepper } from "native-base";
// // import React, { useState, useEffect } from 'react';
// // import { Lock, Mail, Key, User, Eye, EyeOff } from 'react-native-feather';
// // import * as Animatable from 'react-native-animatable';
// // import { colors } from '../assets/colors/colors';
// // import { Buttons } from '../components/atoms'
// // import { useSelector, useDispatch } from 'react-redux';
// // import axios from 'axios';

// // import store from '../store/store'
// // import actions from '../store/actions'
// // // import { increment } from './../store/actions/increment';
// // // import { decrement } from './../store/actions/decrement';

// // const Home = () => {
// //   const [data, setData] = useState([]);
// //   const dispatch = useDispatch()
// //   const number = useSelector(state => state.counter.number)
// //   // const digit = store.getState()
// //   // console.log("digit",digit)

// //   useEffect(() => {

// //     (async () => {
// //       const response = await actions.getPosts()
// //       console.log("response", response.data)
// //       setData(response.data)

// //     })()
// //   }, [])



// //   return (
// //     <>


// //       <View style={{
// //         alignItems: 'center',
// //         marginTop: 20
// //       }} >
// //         <Text>No of items:{number} </Text>
// //       </View>



// //       <View style={{
// //         padding: 20,
// //         margin: 20,
// //         borderWidth: 1,
// //         borderColor: 'grey',
// //         flexDirection: 'row',
// //         justifyContent: 'space-around',
// //         backgroundColor: 'royalblue',
// //         borderRadius: 10,
// //       }} >
// //         <Text style={{
// //           textAlignVertical: 'center',
// //           fontWeight: 'bold',
// //           fontSize: 20,
// //           color: 'white',
// //         }}>price: 2500$</Text>
// //         {/* <Buttons name="Add to Cart" color="red" Add={onAdd} press={onAdd}  /> */}
// //         <Button
// //           onPress={() => dispatch(actions.increment(1))}
// //           colorScheme="green">Add to Cart</Button><Button
// //             onPress={() => dispatch(actions.decrement(1))}
// //             colorScheme="red">remove</Button>

// //       </View>


// //      <View  style={{

// //       height: "100%",
// //      }}>
// //          <FlatList
// //            data={data}
// //            keyExtractor={(item) => item.id}
// //            renderItem={({ item }) => (
// //              <View style={styles.List}>
// //                  <Text>
// //                  {item.title}
// //                </Text>
// //              </View>
// //            )}

// //          />
// //      </View>
// //     </>
// //   )
// // }

// // export default Home

// // const styles = StyleSheet.create({
// //   List:{
// //     padding: 10,

// //     margin: 10,
// //     borderRadius: 10,
// //     backgroundColor: 'teal',

// //   }
// // }) 



// import React from 'react';
// import {
//   Alert,
//   Animated,
//   StyleSheet,
//   TouchableOpacity,
//   View,
//   Text
// } from 'react-native';

// import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
// import {
//   Lock,
//   Mail,
//   Phone,
//   Plus,
//   Home,
//   Database,
//   User,
//   Eye,
//   EyeOff,
//   Settings,
// } from 'react-native-feather';
// const GensetHome = () => {
//   const _renderIcon = (routeName, selectedTab) => {

//     switch (routeName) {
//       case 'Monitering':
//         return (<>
//           <Home



//             // name={icon}
//             size={25}
//             color={routeName === selectedTab ? 'blue' : 'gray'}
//           />
//           <Text>
//             Monitering
//           </Text>
//         </>

//         );
//         break;
//       case 'Setting':
//         return (<>
//           <Settings
//             // name={icon}
//             size={25}
//             color={routeName === selectedTab ? 'blue' : 'gray'}
//           />
//           <Text>
//             Settings
//           </Text>
//         </>

//         );
//         break;
//     }


//   };
//   const renderTabBar = ({ routeName, selectedTab, navigate }) => {
//     return (
//       <TouchableOpacity
//         onPress={() => navigate(routeName)}
//         style={{
//           flex: 1,
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         {_renderIcon(routeName, selectedTab)}
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <CurvedBottomBar.Navigator
//         type="DOWN"
//         style={styles.bottomBar}
//         strokeWidth={0.5}
//         height={55}
//         circleWidth={55}
//         bgColor="white"
//         initialRouteName="home"
//         borderTopLeftRight
//         renderCircle={({ selectedTab, navigate }) => (
//           <Animated.View style={styles.btnCircle}>
//             <TouchableOpacity
//               style={{
//                 flex: 1,
//                 justifyContent: 'center',
//               }}
//               onPress={() => Alert.alert('Click Action')}>
//               < Plus
//                 stroke="black"
//                 fill="#fff"
//                 width={25}
//                 height={25}
//               />
//             </TouchableOpacity>
//           </Animated.View>
//         )}
//         tabBar={renderTabBar}>
//         <CurvedBottomBar.Screen
//           options={{ headerShown: false }}
//           name="Monitering"
//           position="LEFT"
//           component={() => (
//             // <View style={{backgroundColor: '#BFEFFF', flex: 1}} />
//             <></>
//           )}
//         />
//         <CurvedBottomBar.Screen
//           options={{ headerShown: false }}
//           name="Setting"
//           component={() => (
//             // <View style={{backgroundColor: '#FFEBCD', flex: 1}} />
//             <></>
//           )}
//           position="RIGHT"
//         />
//       </CurvedBottomBar.Navigator>
//     </View>
//   );
// };
// export default GensetHome;
// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   button: {
//     marginVertical: 5,
//   },
//   bottomBar: {},
//   btnCircle: {
//     width: 60,
//     height: 60,
//     borderRadius: 35,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 0.5,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 1,
//     bottom: 30,
//   },
//   imgCircle: {
//     width: 30,
//     height: 30,
//     tintColor: 'gray',
//   },
//   img: {
//     width: 30,
//     height: 30,
//   },
// });



import { StyleSheet, Text, View,Button } from 'react-native'
import navigationStrings from '../navigation/navigationStrings'

import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = ({navigation}) => {

  // const navigation= useNavigation()
  return (
  <View>
<Button title="go to "  onPress={()=>navigation.navigate(navigationStrings.Login)}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})