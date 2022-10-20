import * as React from 'react';
import { NativeBaseProvider, Box, HStack, VStack, Text, Pressable, Image, Center } from 'native-base';

export const Example=()=> {
  return (

      <Box bg="black" py="6" px="5"  rounded="xl" width="90%" maxWidth="100%">
        <HStack justifyContent="space-between" >
          <Box >
            <VStack space="2">
              <Text fontSize="sm" color="white">
                Today @ 9PM
              </Text>
              <Text color="white" fontSize="xl">
                Let's talk about avatar!
              </Text>
            </VStack>
            <Pressable rounded="xs" bg="primary.400" alignSelf="flex-start" py="1" px="3">
              <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="white">
                Remind me
              </Text>
            </Pressable>
          </Box>

          <Image source={{
              uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
        }} alt="Aang flying and surrounded by clouds" height="100%" rounded="full"  width="30%" />
        </HStack>
      </Box>

)
}


