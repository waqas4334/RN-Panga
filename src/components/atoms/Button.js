import { StyleSheet, View, StatusBar, SafeAreaView, Linking } from 'react-native'
import { Pressable, Input, Stack, Box, Center, Button, Image, Text, HStack, VStack, Flex, Icon, Divider, Modal, FormControl,Skeleton } from "native-base";
import React, { useState } from 'react';
import store from '../../store/store'



export const Buttons = ({name,color, press, Add}) => {

  return (
    <Button
    onPress={press} 
     colorScheme={color}>{name}</Button>
  )
}


const styles = StyleSheet.create({})