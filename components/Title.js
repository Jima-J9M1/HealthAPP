import { StyleSheet, Text, View } from 'react-native'
import  Icon  from 'react-native-vector-icons'
import React from 'react'

const Title = ({title,className}) => {
  return (
    <View className={`p-3 ${className}`}>
      <Text className="font-bold text-gray-400 text-2xl">{title}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({})