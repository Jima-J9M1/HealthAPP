import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../components/Title'
import Data from '../Data/Data'
const GetValue = ({ route, navigation}) => {

    const {weight} = route.params;

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    })


  return (
    <SafeAreaView >
    <View>
      <View>
      </View>
      <Title title={"Result"}/>
      <View className="items-center mt-16">
        <View className="bg-gray-200 p-3 rounded-full">
        <Text className="font-bold text-xl">{weight}</Text>
      </View>
      </View>

      <View>
            <Text className="font-bold text-xl mt-5 mx-2">Recommended</Text>
            <View  className="flex-column justify-between p-3 mt-5 space-y-5">
                <View className="flex-row justify-center align-center p-2 bg-gray-200 rounded-xl">
                    <Text className="font-bold text-xl">Maintaining a healthy weight or losing weight</Text>
                </View>
                <View className="flex-row justify-center align-center p-2 bg-gray-200 rounded-xl">
                    <Text className="font-bold text-xl">Eating a heart-healthy diet with less salt</Text>
                </View>
                <View className="flex-row justify-center align-center p-2 bg-gray-200 rounded-xl">
                    <Text className="font-bold text-xl">Getting regular physical activity</Text>
                </View>
                <View className="flex-row justify-center align-center p-2 bg-gray-200 rounded-xl">
                    <Text className="font-bold text-xl">Getting 7 to 9 hours of sleep daily</Text>
                </View>
            </View>

            <View className="px-20 py-5">
    <Button title='Back To Home' color={"#424242"} style={styles.button} onPress={()=>{
        navigation.navigate('Home')
    }}/>
    </View>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default GetValue

const styles = StyleSheet.create({
    button:{
      backgroundColor: '#424240',
      color: '#000',
      padding: 10,
      borderRadius: 10,
    }
  })