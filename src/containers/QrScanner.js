import { Text, View, StyleSheet } from "react-native"
import React, { useState, useEffect } from "react"
import { BarCodeScanner } from "expo-barcode-scanner"
import { useToast, Center, NativeBaseProvider, Button } from "native-base"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { scale, verticalScale, moderateScale } from "react-native-size-matters"

export const QrScanner = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [scannedData, setScannedData] = useState()

  const toast = useToast()
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

    setScannedData(data)
    // setTimeout(() => {
    //   navigation.navigate("signup", {
    //     geyrserModalId: data,
    //   })
    // }, 1000)
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
      {() =>
        toast.show({
          description: "Hello world",
        })
      }
      {scanned && (
        <Button onPress={() => setScanned(false)}>click to scan again</Button>
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
