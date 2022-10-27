import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, ImageBackground } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Select,
  CheckIcon,
  WarningOutlineIcon,
  FormControl,
  Pressable,
  Input,
  Stack,
  Box,
  Center,
  Button,
  ScrollView,
  Image,

  HStack,
  VStack,
  Flex,
  Icon,
  Tooltip, Avatar, Switch, Text, Fab
} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from '@rneui/base';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import {
  Lock,
  Mail,
  Phone,
  Plus,
  Home,
  Database,
  User,
  Eye,
  EyeOff,
  Settings,
  Thermometer
} from 'react-native-feather';
import { colors } from '../assets/colors/colors';
export const SettingsPage = () => {
  return (

    <View style={{
      flex: 1,
      // borderWidth: 1,
      // borderColor: 'red',
      backgroundColor: colors.background,

    }}>



      <Card
        containerStyle={{ marginLeft: 0, borderTopEndRadius: 10, borderTopEndRadius: 15, borderBottomEndRadius: 15, }}>
        <CardTitle>
          Temperature (Upper Threshold)
        </CardTitle>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text fontSize={30} style={{ color: '#0094CD', fontWeight: 'bold' }}>
            5 %
          </Text>
          <Select rounded={25} borderColor="#0094cd" borderWidth={2} placeholderTextColor="blue.900" color="red.900" w="100" maxW="100%" accessibilityLabel="Set" placeholder="Set" _selectedItem={{
            bg: "teal.900",
            endIcon: <CheckIcon size={4} />
          }} mt="1">
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="UX Research" value="ux" />

          </Select>


          <LinearGradient
            // Button Linear Gradient
            colors={['#ffa500', '#402a00']}
            style={{
              borderRadius: 20,
              padding: 5,
            }}
          >
            <Thermometer
              // name={icon}
              size={15}
              color="white"
            />
          </LinearGradient>

        </View>

      </Card>


      <Card
        containerStyle={{ marginLeft: 0, borderTopEndRadius: 10, borderTopEndRadius: 15, borderBottomEndRadius: 15 }}>
        <CardTitle >
          Modes
        </CardTitle>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

          <Button.Group isAttached colorScheme="blue" mx={{
            base: "auto",
            md: 0
          }} size="sm">
            <Button>GAS</Button>
            <Button variant="solid">Hybrid</Button>
            <Button variant="outline">Electric</Button>
          </Button.Group>
        </View>

      </Card>


      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // borderWidth: 1,


      }}>

        <View style={{
          justifyContent: 'center',
        }} >
          <Text bold fontSize='17'  > Routine: </Text>
        </View>
        <View  >
          <Switch onPress={()=>{}} size="md" offTrackColor="red.900" onTrackColor="green.900" />
        </View>

      </View>

      <View style={[{}]}>
        <Fab renderInPortal={false} shadow={2}  placement="top-left" size="xs" icon={<Icon color="white" as={AntDesign} name="addfile" size="4" />} label="Add Routine" />


      </View>

    </View>
  )
}


const styles = StyleSheet.create({

  cardThreshold: {
    height: '17%',
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: hp('2%'),




  },
  cardstext: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    // borderWidth: 1,

  },
  cardThresholdInner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: wp('2%'),
    // paddingTop: '1%',
    padding: '3%',
    borderWidth: 1,

  }
})