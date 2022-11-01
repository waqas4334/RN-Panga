import React, { useState } from "react"
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"
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
  Tooltip,
  Avatar,
  Switch,
  Text,
  Fab,
} from "native-base"

import { LinearGradient } from "expo-linear-gradient"
import { Card } from "@rneui/base"
import { CardTitle } from "@rneui/base/dist/Card/Card.Title"
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons"
import ModalDropdown from "react-native-modal-dropdown"

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
  Thermometer,
} from "react-native-feather"
import { colors } from "../assets/colors/colors"
import { List } from "react-native-paper"

export const SettingsPage = () => {
  const [expanded, setExpanded] = React.useState(true)

  const handlePress = () => setExpanded(!expanded)
  const [service, setService] = useState("Select Service")

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#1788d9", "#2756ac", "#1788d9"]}
      style={{
        flex: 1,
      }}>
      <Card
        containerStyle={{
          marginLeft: 0,
          borderTopEndRadius: 10,
          borderTopEndRadius: 15,
          borderBottomEndRadius: 15,
        }}>
        <CardTitle>Temperature (Upper Threshold)</CardTitle>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Text fontSize={30} style={{ color: "#0094CD", fontWeight: "bold" }}>
            5 %
          </Text>
          <Select
            rounded={25}
            borderColor="#0094cd"
            borderWidth={2}
            placeholderTextColor="blue.900"
            color="red.900"
            w="100"
            maxW="100%"
            accessibilityLabel="Set"
            placeholder="Set"
            _selectedItem={{
              bg: "teal.900",
              endIcon: <CheckIcon size={4} />,
            }}
            mt="1">
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="UX Research" value="ux" />
          </Select>

          <LinearGradient
            // Button Linear Gradient
            colors={["#ffa500", "#402a00"]}
            style={{
              borderRadius: 20,
              padding: 5,
            }}>
            <Thermometer
              // name={icon}
              size={15}
              color="white"
            />
          </LinearGradient>
        </View>
      </Card>

      <Card
        containerStyle={{
          marginLeft: 0,
          borderTopEndRadius: 10,
          borderTopEndRadius: 15,
          borderBottomEndRadius: 15,
        }}>
        <CardTitle>Modes</CardTitle>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Button.Group
            isAttached
            colorScheme="blue"
            mx={{
              base: "auto",
              md: 0,
            }}
            size="sm">
            <Button>GAS</Button>
            <Button variant="solid">Hybrid</Button>
            <Button variant="outline">Electric</Button>
          </Button.Group>
        </View>
      </Card>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          // borderWidth: 1,
        }}>
        <View
          style={{
            justifyContent: "center",
          }}>
          <Text bold fontSize="17" color={"white"}>
            {" "}
            Routine:{" "}
          </Text>
        </View>
        <View>
          <View>
            <Switch
              onPress={() => {}}
              size="lg"
              offTrackColor="red.900"
              onTrackColor="green.900"
            />
          </View>
        </View>
      </View>

      <View
        style={[
          {
            // borderWidth: 1,
            flexDirection: "row",
            paddingLeft: "5%",
          },
        ]}>
        <Button
          variant={"solid"}
          style={{
            backgroundColor: "#e93a39",
          }}
          onPress={() => alert("waqas")}
          leftIcon={<Icon as={AntDesign} name="addfile" size="sm" />}>
          Add Routine
        </Button>
      </View>

      <View
        style={[
          {
            padding: "5%",
            // borderWidth: 1,
          },
        ]}>
        <List.Section>
          <List.Accordion
            // title="Set Routine on/off"
            // titleStyle={{
            //   color: "black",
            //   fontWeight: "bold",
            //   alignSelf: "center",
            // }}
            onPress={handlePress}
            expanded={expanded}
            left={props => (
              <Text bold fontSize={18}>
                Set Routine On/Off -1
              </Text>
            )}
            right={props => (
              <View
                style={[
                  {
                    // borderWidth: 1,
                    flexDirection: "row",
                  },
                ]}>
                <Text
                  bold
                  fontSize={20}
                  style={{ textAlignVertical: "center" }}
                  color="red.700">
                  60° C
                </Text>
                <Button
                  ml={5}
                  variant="solid"
                  bgColor="green.900"
                  size={"xs"}
                  onPress={() => console.log("hello world")}>
                  On
                </Button>
              </View>
            )}></List.Accordion>
          <View
            style={[
              {
                backgroundColor: "white",
                // borderWidth: 1,
                flexDirection: "row",
                padding: "2%",
              },
            ]}>
            <Select
              height={"8"}
              selectedValue={service}
              borderColor="#0094cd"
              borderWidth={2}
              placeholderTextColor="blue.900"
              minWidth="60"
              w={140}
              accessibilityLabel="Choose Service"
              placeholder="Set Threshold"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={itemValue => setService(itemValue)}>
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
            <View
              style={[
                {
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  flex: 1,
                },
              ]}>
              <Text bold>From: 14:34 </Text>
              <Text bold>To: 15:56 </Text>
            </View>
            {/* <View
              style={[
                {
                  borderWidth: 1,
                },
              ]}>
              <Switch
                onPress={() => {}}
                size="md"
                offTrackColor="red.900"
                onTrackColor="green.900"
              />
            </View> */}
          </View>
        </List.Section>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  cardThreshold: {
    height: "17%",
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: hp("2%"),
  },
  cardstext: {
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    fontSize: 16,
    // borderWidth: 1,
  },
  cardThresholdInner: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: wp("2%"),
    // paddingTop: '1%',
    padding: "3%",
    borderWidth: 1,
  },
})
