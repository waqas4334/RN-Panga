
import { StyleSheet, View, StatusBar, SafeAreaView, Linking, ImageBackground } from 'react-native';
import {
  Pressable,
  Input,
  Stack,
  Box,
  Center,
  Button,
  Image,
  Text,
  HStack,
  VStack,
  Flex,
  Icon,
  Divider,
  Modal,
  FormControl,

} from 'native-base';
import React, { useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Lock, Mail, Key, User, Eye, EyeOff } from 'react-native-feather';
import * as Animatable from 'react-native-animatable';
import { colors } from '../assets/colors/colors';

export const Login = ({ navigation }) => {
  //  const dispatch = useDispatch()

  const [data, setData] = useState({
    Email: null,
    password: null,
    isValidEmail: true,
    isInValidPassword: false,
  });
  const [show, setShow] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const isValidEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('REGIX: ' + email);
    return re.test(email);
  };
  const validatePassord = text => {
    if (text.trim().length >= 7) {
      setData({
        ...data,
        isInValidPassword: false,
        password: text,
      });
    } else {
      setData({
        ...data,
        isInValidPassword: true,
      });
    }
  };
  const handeSubmit = () => {
    console.log('Pressed', data.Email, data.password);
    if ((data.Email === null || data.Email === undefined) && (data.password === null || data.password === undefined)) {
      setData(
        {
          ...data,
          isValidEmail: false,
          isInValidPassword: true,
        }
      )
    }
    else if (data.Email === null || data.Email === undefined) {
      setData(
        {
          ...data,
          isValidEmail: false,
        }
      )
    }
    else if (data.password === null || data.password === undefined) {
      setData(
        {
          ...data,
          isInValidPassword: true,
        }
      )
    }
    else {

      console.log('+++++++++++++++++++++++++++', data.Email, data.password)
    }
  }
  return (
    <>
      <SafeAreaView style={styles.AreaView}>
        <Stack flex={1}>

          <ImageBackground source={require('../assets/images/background.jpeg.jpg')} style={{ width: '100%', height: '100%' }}
            blurRadius={4}
          >


            <Animatable.View
              style={{
                // borderWidth: 1,
                borderColor: "black",
                justifyContent: "center",
                alignItems: "center",
                marginTop: hp("2%")

              }}
              animation="bounceIn"
              duration={3000}
              delay={500}

            >

              <Image
                source={require('../assets/images/Geysital.png')}
                alt="Alternate Text"
                width={"35%"}
                height={hp('19%')}

              />
              <Text fontSize={['2xl', '4xl']} color={colors.mainColor} bold>
                Geysital{' '}
              </Text>

            </Animatable.View>



            <Animatable.View
              animation="fadeInUp"
              duration={2000}
              iterationDelay={1}
              style={{
                borderWidth: 2,
                borderColor: colors.mainColor,
                flex: 1,
                margin: "4%",
                borderRadius: 40,
                padding: "4%",
                backgroundColor:"white",
                // elevation:0.5,
                // shadowColor:colors.mainColor
              }}

            >

              <Stack space={8} w={'100%'}>
                <Text bold color={colors.mainColor} fontSize={['2xl', '5xl']}>
                  Login
                </Text>
                <Stack space={[4, 12]}>
                  <HStack space={2}>
                    <Box flexDirection="row" alignItems="flex-end">
                      <Mail stroke="black" width={25} height={25} />
                    </Box>
                    <Input
                      variant="underlined"
                      placeholder="Email"
                      placeholderTextColor={"black"}

                      w="90%"
                      onChangeText={t =>
                        t !== null && isValidEmail(t)
                          ? setData({
                            ...data,
                            isValidEmail: true,
                            Email: t,
                          })
                          : setData({ isValidEmail: false })
                      }
                    />
                  </HStack>
                  <Stack  >
                    {data.isValidEmail === false ? (
                      <Text color={'#FF0000'}>Enter Valid Email </Text>
                    ) : null}
                  </Stack>
                  <HStack space={2}>
                    <Box flexDirection="row" alignItems="flex-end">
                      <Lock stroke="black" width={25} height={25} />
                    </Box>
                    <Input
                      type={show ? 'password' : 'text'}
                      variant="underlined"

                      placeholder="Password i.e min 7 characters"
                      placeholderTextColor={"black"}
                      w="90%"
                      onChangeText={text => validatePassord(text)}
                      InputRightElement={
                        <Pressable onPress={() => setShow(!show)}>
                          <Icon
                            as={
                              show ? (
                                <EyeOff
                                  stroke="black"
                                  fill="#fff"
                                  width={20}
                                  height={20}
                                />
                              ) : (
                                <Eye
                                  stroke="black"
                                  fill="#fff"
                                  width={20}
                                  height={20}
                                />
                              )
                            }
                          />
                        </Pressable>
                      }
                    />
                  </HStack>
                  <Stack >
                    {data.isInValidPassword ? (
                      <Text color={'#FF0000'}>Enter Valid Password</Text>
                    ) : null}
                  </Stack>
                </Stack>
              </Stack>
              <Stack space={2}>
                <HStack justifyContent="flex-end">
                  <Text
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                    italic
                    bold
                    fontSize={['sm', 'xl']}
                    color={colors.textColor1}
                    mt={['2%', '4%']}>
                    Forgot Password?
                  </Text>
                </HStack>
                <Stack
                  space={[3, 10]}
                  style={styles.border}
                  justifyContent="space-between">
                  <Button
                    onPress={() => handeSubmit()}
                    mx="3"
                    mt={['1%', '3%']}
                    colorScheme="darkBlue">
                    LogIn
                  </Button>
                  <Center>
                    <Text
                      italic
                      bold
                      color={colors.darkBlue}
                      fontSize={['md', '2xl']}>
                      OR
                    </Text>
                  </Center>
                  <Center>
                    <Text
                      onPress={() => navigation.navigate('signup')}
                      color={colors.mainColor}
                      bold
                      fontSize={['lg', '2xl']}>
                      New to Geysital?{' '}
                      <Text fontSize={['md', '2xl']} color={colors.textColor1}>
                        Register
                      </Text>
                    </Text>
                  </Center>
                </Stack>
              </Stack>
              <Stack flex={1} justifyContent="flex-end" alignItems="center" >

                <Text color={colors.mainColor} bold fontSize={['lg', '2xl']}

                >
                  FAQs and Operations Guide
                </Text>

                {/* <Text
                  style={
                    {
                      //add line on bottom 
                      borderTopColor: colors.mainColor,
                      borderTopWidth: 1,
                    }
                  }
                  color={colors.mainColor} bold fontSize={['lg', '2xl']}>
                  Powered By Sync & Secure
                </Text> */}

              </Stack>

            </Animatable.View>
          </ImageBackground>

        </Stack>

      </SafeAreaView>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        justifyContent="center"
        size="lg">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Forgot Password?</Modal.Header>
          <Modal.Body>
            Enter email and we'll send a new passsword to your email .
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              colorScheme="darkBlue"
              onPress={() => {
                setModalVisible(false);
              }}>
              Proceed
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  AreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    padding: 15,
  },
  GeysitalLogo: {
    width: 100,
    height: 100,
  },
  border: {
    // borderWidth: 1,
  },
});