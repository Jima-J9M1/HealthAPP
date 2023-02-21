import { Pressable, StyleSheet, Text, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/EvilIcons'
import React from 'react'


const Backward = () => {
  return (
    <View>
      
      <View className= "bg-blue-100 mx-2 my-2 border-solid border-2 border-sky-500  space-x-2 rounded-full w-10 items-center justify-center h-10">
        <Icon name="chevron-left" size={40} color={"black"} className="flex-1 items-center"/> 
      </View>
      
    </View>
  )
}

export default Backward

const styles = StyleSheet.create({})