import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome5'

const MeasureCard = ({title, icon, color,bgColor}) => {
  return (
    <View className="m-3">
    <View className="flex-row pb-3 items-center mx-4 space-x-2r p-5 bg-gray-200 rounded-xl">
      <View className="flex-row flex-1 items-center space-x-2">
       <View className={`rounded-full w-10 items-center justify-center h-10  ${bgColor} `}>
        <Icon name={icon} size={25} color={color} className="flex-1 items-center "/>
       </View>
      <Text className="font-bold text-base text-gray-500">{title}</Text>
      </View>
      <View className='flex-end p-3 rounded-full  bg-blue-100'>
        <Text className="text-blue-600">Measure</Text>
      </View>
    </View>
    </View>
  )
}

export default MeasureCard

const styles = StyleSheet.create({})