import { StyleSheet, Text, View,Image,TextInput, Pressable } from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import React from 'react'

const Layout = ({press}) => {

  const date = new Date()
  let time = date.getHours();
  let greet = "";
  if(time < 12){
    greet = "Good Morning"
  }else if(time < 18){
    greet = "Good Afternoon"
  }else{
    greet = "Good Evening"
  }

  return (
            <View>
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xl">{greet}
            </Text>
            <Text className="font-bold text-xs">Jima Dube</Text>
            </View>
            <Pressable onPress={press}>
            <Image 
            source={ require('../assets/Images/avatar.png') }
            className="h-9 w-9 bg-gray-300 p-4 pt-6 rounded-full " />
            </Pressable>
            </View>
            <View className="flex-row p-3">
            {/* <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2 itmes-center rounded-full">

            <Icon name="search" size={25} color="gray"/>
            <TextInput 
            placeholder="Health Measurements" 
            keyboardType='default'
            />

            </View> */}
            </View>
            </View>
  )
}

export default Layout

const styles = StyleSheet.create({})