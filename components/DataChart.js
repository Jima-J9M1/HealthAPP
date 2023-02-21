import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DataChart = ({Title,num,unit}) => {
    const date = new Date();

    const val_date =date.toDateString();
    const new_date = val_date.toUpperCase(); 
  return (
    <View>
    <View className="mt-2 mx-2 p-3">
       <Text className="font-bold text-xl text-gray-600 w-26">{new_date}</Text>
       <Text className="text-gray-400 font-bold">55 bpm, 2 days ago</Text>
    </View>
    <View className="mx-4 mt-3 bg-white p-12 flex items-center justify-center rounded-2xl">
        <Text className="text-xl font-bold text-gray-600">{Title}</Text>
        <View className="flex-row justify-center items-center space-x-2">
        <Text className="text-2xl font-bold text-green-400">{num}</Text>
        <Text className="font-bold text-gray-500">{unit}</Text>
        </View>
     </View>
     </View>
  )
}

export default DataChart

const styles = StyleSheet.create({})