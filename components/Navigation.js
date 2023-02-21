import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import FontIcon from 'react-native-vector-icons/EvilIcons'
const Navigation = ({Navigation}) => {
  return (
    <View className='flex-row bg-white items-center justify-cente fixed bottom-7 mx-3 space-x-28 p-1 border-t-2 border-slate-300'>
      
      <Pressable onPress={()=>Navigation.navigate("Measure")}>
      <View>
         <Icon name="thermometer-empty" size={25} color="black" />
      </View>
      </Pressable>

      <Pressable onPress={()=>Navigation.navigate("Home")}>
      <View>
         <Icon name="home" size={25} color="black" />
      </View>
      </Pressable>

    <Pressable onPress={()=>Navigation.navigate("User")}>
    <View>
         <Icon name="user" size={25} color="black" />
    </View> 
    </Pressable>
    </View>

  )
}

export default Navigation

const styles = StyleSheet.create({})