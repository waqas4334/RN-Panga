import { Text, View, StyleSheet, Button } from "react-native"
import React, { useState, useEffect } from "react"
import { BarCodeScanner } from "expo-barcode-scanner"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { scale, verticalScale, moderateScale } from "react-native-size-matters"

export const QrScanner = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === "granted")
    }

    getBarCodeScannerPermissions()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    alert(`${data} has been scanned!`)
    setTimeout(() => {
      navigation.navigate("signup")
    }, 2000)
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.barcodebox}> */}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {/* </View> */}

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: scale(300),
    width: verticalScale(300),
    overflow: "hidden",
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: "#1e72c5",
  },
  //   mainText: {
  //     fontSize: scale(20),
  //     marginTop: verticalScale(10),
  //   },
})