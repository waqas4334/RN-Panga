import { Avatar, Card } from "@rneui/base/dist"
import React, { useState, useEffect } from "react"
import { View, Text, Image } from "react-native"

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen"
const manu = require("../assets/images/manu.png")
const volve = require("../assets/images/volve.png")
const burner = require("../assets/images/burner.png")
import { Power, Thermometer } from "react-native-feather"
import { LinearGradient } from "expo-linear-gradient"
import { colors } from "../assets/colors/colors"
// import ProgressCircle from "react-native-progress-circle"
// import { AnimatedCircularProgress } from "react-native-circular-progress"
import CircularProgress from "react-native-circular-progress-indicator"

export const GensetHome = () => {
  const degreeText = "80"
  return (
    <>
      {/* <View
        style={{
          flex: 1,
          // justifyContent: 'center',
          // align  Items: 'center',
          backgroundColor: colors.background,
        }}> */}

      <LinearGradient
        // Button Linear Gradient
        colors={["#1788d9", "#2756ac", "#1788d9"]}
        style={{
          flex: 1,
        }}>
        <Card
          containerStyle={{ marginBottom: 10, padding: 0, borderRadius: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: heightPercentageToDP("2.2%"),
              color: colors.plusButton,
              alignSelf: "center",
            }}>
            Hybrid Geyser
          </Text>
        </Card>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 15,
          }}>
          <View style={{}}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: heightPercentageToDP("3.5%"),
                color: "white",
              }}>
              Good Morning!
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: heightPercentageToDP("2.5%"),
                color: "white",
              }}>
              RubiTronLabs
            </Text>
          </View>
          <Image
            source={manu}
            style={{ height: 30, width: 30, tintColor: "white" }}
          />
        </View>

        <View style={{}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 15,
            }}>
            <Card
              containerStyle={{ borderRadius: 10, margin: 0, elevation: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  // justifyContent: 'space-between'
                }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: heightPercentageToDP("1.7%"),
                    color: "#0094CD",
                  }}>
                  Mode :
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: heightPercentageToDP("2%"),
                  }}>
                  {" "}
                  Electric
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  // justifyContent: 'space-between'
                }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: heightPercentageToDP("1.7%"),
                    color: "#0094CD",
                  }}>
                  Routine Status :
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: heightPercentageToDP("2%"),
                  }}>
                  {" "}
                  on
                </Text>
              </View>
            </Card>
            {/* <ProgressCircle
              percent={30}
              radius={50}
              borderWidth={8}
              color="#a50606"
              shadowColor="#999"
              bgColor="#fff">
              <Text style={{ fontSize: 18 }}>{"30%"}</Text>
            </ProgressCircle> */}
            {/* <CircularProgress
              value={degreeText}
              activeStrokeWidth={10}
              progressValueColor={"#ecf0f1"}
              inActiveStrokeWidth={25}
              activeStrokeColor={colors.orange}
            /> */}
            <View
              style={[
                {
                  marginRight: "6%",
                },
              ]}>
              <CircularProgress
                value={60}
                activeStrokeColor={"#e87c13"}
                activeStrokeSecondaryColor={"#a50606"}
                inActiveStrokeColor={"#ffff"}
                inActiveStrokeOpacity={0.1}
                colotit
                activeStrokeWidth={12}
                radius={heightPercentageToDP("9%")}
                progressValueColor={"#e87c13"}
              />
            </View>
          </View>

          <View
            style={[
              {
                marginTop: "5%",
              },
            ]}>
            <View style={{ flexDirection: "row" }}>
              <Card
                containerStyle={{
                  borderRadius: 10,
                  elevation: 5,
                  width: 190,
                  marginLeft: 10,
                }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  Geyser Status
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>On</Text>

                  <View
                    style={{
                      borderRadius: 100,
                      height: 40,
                      width: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "green",
                      borderRadius: 100,
                    }}>
                    <Power stroke={"white"} />

                    {/* <Image source={volve} style={{height: 30, width: 30}} /> */}
                  </View>
                </View>
              </Card>

              <Card
                containerStyle={{
                  borderRadius: 10,
                  elevation: 5,
                  width: 160,
                  marginLeft: 0,
                }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  Gas Valve
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>On</Text>

                  <LinearGradient
                    colors={["#9f4208", "#ffdf2a"]}
                    style={{
                      borderRadius: 100,
                      height: 40,
                      width: 40,
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Image source={volve} style={{ height: 30, width: 30 }} />
                  </LinearGradient>
                </View>
              </Card>
            </View>
            <View style={{ flexDirection: "row", marginLeft: 4 }}>
              <Card
                containerStyle={{
                  borderRadius: 10,
                  elevation: 15,
                  height: 100,
                  width: 160,
                  marginRight: 0,
                }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  Temperature
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    {" "}
                    26 ° C
                  </Text>

                  <LinearGradient
                    colors={["#9f4208", "#ffdf2a"]}
                    style={{
                      borderRadius: 100,
                      height: 40,
                      width: 40,
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Thermometer stroke={"black"} />
                    {/* <Image source={volve} style={{height: 30, width: 30}} /> */}
                  </LinearGradient>
                </View>
              </Card>
              <Card
                containerStyle={{
                  borderRadius: 10,
                  elevation: 15,
                  height: 100,
                  width: 190,
                }}>
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    Burner Status
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>On</Text>
                    <LinearGradient
                      colors={["#9f4208", "#ffdf2a"]}
                      style={{
                        borderRadius: 100,
                        height: 40,
                        width: 40,
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <Image
                        source={burner}
                        style={{ height: 30, width: 30 }}
                      />
                    </LinearGradient>
                  </View>
                </View>
              </Card>
            </View>
          </View>
        </View>
      </LinearGradient>
      {/* </View> */}
    </>
  )
}

// const styles = StyleSheet.create({})
