import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Backward from '../components/Backward'
import Title from '../components/Title'
import { useNavigation } from '@react-navigation/native'
// import { LineChart } from 'react-native-chart-kit'

const WeightMeasure = (props) => {

    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })

    },[])


  return (
    <SafeAreaView>
    <View>
      <Pressable onPress={()=>navigation.pop()}>
      <Backward />
      </Pressable>
    <Title title={"What is your weight?"}/>
    <View className="flex-row p-3">
            <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2 itmes-center rounded-2xl">

            <TextInput 
            placeholder="Health Measurements" 
            keyboardType='default'
            />

            </View>
            </View>
    <View className="px-20 py-5">
    <Button title='save your weight' color={"#424242"} style={styles.button} onPress={()=>alert("jima")}/>
    </View>
    </View>

 
    </SafeAreaView>
  )
}

export default WeightMeasure

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#424243',
    color: '#000',
    padding: 10,
    borderRadius: 10,
  }
})