import { StyleSheet, Text, View,Image } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';
import React from 'react'

const Card = ({title, value, date1,date2,image,imageColor,color,bgColor="bg-gray-50" }) => {
  return (
    <View className={`p-3 rounded-2xl  w-80 m-auto mb-3 ${bgColor}`}>
        {/* For the title of the card  */}
          <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <View className="flex-1">
                    <Text className="font-bold text-gray-600 text-xl">{title}
                    </Text>
                    <Text className="font-bold text-gray-300 text-xs">{date1}</Text>
                </View>
                <Icon name="chevron-right" size={25} color="gray"/>
            </View>

            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <View className="flex-1">
                    <Text className={`font-bold  text-xl ${color}`}>{value}
                    </Text>
                    <Text className={`font-bold text-xs ${color}`}>{date2}</Text>
                </View>
                <Image 
                source={image}
                color={imageColor}
                className="h-10 w-20  p-4 pt-6  text-blue-200" />
            </View>


        <View>
          
        </View>


    </View>
  )
}

export default Card

const styles = StyleSheet.create({})