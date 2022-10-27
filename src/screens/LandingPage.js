import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import screens from '../screens';
import { colors } from '../assets/colors/colors';


// import ProgressCircle from 'react-native-progress-circle';
import { Card, Avatar } from '@rneui/base';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';
import { View, Text, StatusBar, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Menu, Bell, Settings, ArrowDown, Thermometer, Power } from 'react-native-feather';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';



const Tab = createMaterialTopTabNavigator();
export const LandingPage = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home" screenOptions={{
        tabBarStyle: { backgroundColor: colors.headerBar },
        tabBarLabelStyle: { color: "#2563eb" },
      }}
       >
      <Tab.Screen name="Home" component={screens.Example} />
      <Tab.Screen name="settings" component={screens.SettingsPage} />
    </Tab.Navigator>
  )
}



// const GensetHome = () => {
  
//   return (
//     <>       
//       <View
//         style={{
//           flex: 1,
//           // justifyContent: 'center',
//           // align  Items: 'center',
//           backgroundColor: '#BFEFFF',
//         }}>
             
//                   <Card containerStyle={{marginBottom:10,padding:0,borderRadius:10}}>
//         <Text
//               style={{
            
//                 fontWeight: 'bold',
//                 fontSize: heightPercentageToDP('2.2%'),
//                 color: '#0094CD',
//                 alignSelf:'center'
//               }}>
//               Hybrid Geyser
//             </Text>
//         </Card>
      
//         <View

//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             padding: 15,
//           }}>
//           <View style={{}}>
//             <Text
//               style={{
//                 fontWeight: 'bold',
//                 fontSize: heightPercentageToDP('3.5%'),
//                 color: '#0094CD',
//               }}>
//               GOoD Morning,
//             </Text>
//             <Text
//               style={{
//                 fontWeight: 'bold',
//                 fontSize: heightPercentageToDP('2.5%'),
//               }}>
//               RubiTronLabs!!
//             </Text>
         
//           </View>
//           <Image source={manu} style={{height: 30, width: 30}} />
//         </View>

//         <View style={{}}>
//           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:15}} >
//           <Card containerStyle={{borderRadius:10,margin:0,elevation:10}}>
//           <View
//               style={{flexDirection: 'row', 
//               // justifyContent: 'space-between'
//               }}>
//               <Text
//                 style={{
//                   fontWeight: 'bold',
//                   fontSize: heightPercentageToDP('1.7%'),
//                   color: '#0094CD',
//                 }}>
//                Mode :          
//               </Text>
//               <Text
//                 style={{
//                   fontWeight: 'bold',
//                   fontSize: heightPercentageToDP('2%'),
//                 }}>  Electric</Text>
//             </View>
//             <View
//               style={{flexDirection: 'row', 
//               // justifyContent: 'space-between'
//               }}>
//               <Text
//                 style={{
//                   fontWeight: 'bold',
//                   fontSize: heightPercentageToDP('1.7%'),
//                   color: '#0094CD',
//                 }}>
//                Routine Status :          
//               </Text>
//               <Text
//                 style={{
//                   fontWeight: 'bold',
//                   fontSize: heightPercentageToDP('2%'),
//                 }}>  on</Text>
//             </View>
//             </Card>
//           <ProgressCircle
//             percent={30}
//             radius={80}
//             borderWidth={7}
//             color="#0094CD"
//             shadowColor="#BFEFFF"
//             bgColor="#fff">
         
    
//           <Text style={{fontSize: 18}}>{'30%'}</Text>
    
//           </ProgressCircle>
//           </View>
//           <View style={{flexDirection: 'row'}}>
//           <Card containerStyle={{borderRadius: 10, elevation: 5, width: 190, marginLeft:0}}>
//             <Text style={{fontWeight: 'bold', fontSize: 18}}>Geyser Status</Text>
//               <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
//               <Text style={{fontWeight: 'bold', fontSize: 16}}>On</Text>

//               <View
          
//             style={{borderRadius:100,height:40,width:40,justifyContent:'center',alignItems:'center' ,backgroundColor:'green',borderRadius:100}}
//             >
//               <Power stroke={'white'}/>

//                     {/* <Image source={volve} style={{height: 30, width: 30}} /> */}
//                     </View>
            
//               </View>
//             </Card>
          
//             <Card containerStyle={{borderRadius: 10, elevation: 5, width: 160,marginLeft:0}}>
//             <Text style={{fontWeight: 'bold', fontSize: 18}}>Gas Valve</Text>
//               <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
//               <Text style={{fontWeight: 'bold', fontSize: 16}}>On</Text>

//               <LinearGradient
//             // Button Linear Gradient
//             colors={['#ffa500', '#402a00']}
//             style={{borderRadius:100,height:40,width:40,justifyContent:'center',alignItems:'center'}}

//             >
//                     <Image   source={volve} style={{height: 30, width: 30}} />
//                     </LinearGradient>
//               </View>
//             </Card>
//           </View>
//           <View style={{flexDirection: 'row',marginLeft:14}}>
//             <Card
//               containerStyle={{
//                 borderRadius: 10,
//                 elevation: 15,
//                 height: 100,
//                 width: 160,
//                 marginRight:0,
//               }}>
//             <Text style={{fontWeight: 'bold', fontSize: 18}}>Temperature</Text>
//               <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
//               <Text style={{fontWeight: 'bold', fontSize: 16}}>  26 ° C</Text>

//               <LinearGradient
//             // Button Linear Gradient
//             colors={['#ffa500', '#402a00']}
//             style={{borderRadius:100,height:40,width:40,justifyContent:'center',alignItems:'center'}}

//             >
//             <Thermometer stroke={'white'}/>
//                     {/* <Image source={volve} style={{height: 30, width: 30}} /> */}
//                     </LinearGradient>
            
//               </View>
//             </Card>
//             <Card
//               containerStyle={{
//                 borderRadius: 10,
//                 elevation: 15,
//                 height: 100,
//                 width: 190,
//               }}>
//               <View>
//                 <Text style={{fontWeight: 'bold', fontSize: 18}}>
//                   Burner Status
//                 </Text>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                   }}>
//                   <Text style={{fontWeight: 'bold', fontSize: 16}}>On</Text>
//                   <LinearGradient
//             // Button Linear Gradient
//             colors={['#ffa500', '#402a00']}
//             style={{borderRadius:100,height:40,width:40,justifyContent:'center',alignItems:'center'}}

//             >
//                     <Image source={burner} style={{height: 30, width: 30}} />
//                     </LinearGradient>
//                 </View>
//               </View>
//             </Card>
//           </View>
       
//         </View>
//       </View>
//     </>
//   );
// };
