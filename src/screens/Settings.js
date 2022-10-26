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
  Text,
  HStack,
  VStack,
  Flex,
  Icon,
  Tooltip, Avatar
} from 'native-base';

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
export const SettingsPage = () => {
  return (

    <View style={{
      flex: 1,
      // borderWidth: 1,
      // borderColor: 'red',
      backgroundColor: '#d9e6ff',
      alignItems: 'center',
    }}>




      <View style={styles.cardThreshold}>
        <View style={{
          // borderWidth: 1,
          padding: 10,
        }}>
          <Text style={styles.cardstext}>
            Temperature (Threshold lower)
          </Text>
          <View style={styles.cardThresholdInner}>

            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 20
              }
              }
            >5%</Text>
            <Select  rounded={25}  borderColor="blue" placeholderTextColor="blue.900" color="red.900" w="100" maxW="100%" accessibilityLabel="Set" placeholder="Set" _selectedItem={{
              bg: "teal.900",
              endIcon: <CheckIcon size={5} />
            }} mt="1">
              <Select.Item label="UX Research" value="ux" />

            </Select>


            <Box bg="red.800" rounded="full" p='1.5'    >
              <Thermometer
                // name={icon}
                size={15}
                color="white"

              />
            </Box>
          </View>
        </View>
      </View>


      <View style={styles.cardThreshold}>
        <View style={{
          padding: 10,
          flex: 1,
        }}>
          <Text style={styles.cardstext}>
            Modes
          </Text>
          <View
            style={{
              justifyContent: 'flex-end',
              flex: 1,
            }}
          >

            <Button.Group isAttached colorScheme="blue" mx={{
              base: "auto",
              md: 0
            }} size="sm">
              <Button>GAS</Button>
              <Button variant="solid">Hybrid</Button>
              <Button variant="outline">Electric</Button>
            </Button.Group>
          </View>
        </View>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({

  cardThreshold: {
    height: '15%',
    width: '90%',
    // borderWidth: 1,
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
    paddingTop: '1%',
    // borderWidth: 1,
  }
})