import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Backward from '../components/Backward'
import Title from '../components/Title'
import { useNavigation } from '@react-navigation/native'

const WeightMeasure = (props) => {
    
    const [weight, setWeight] = useState(0)
    const [error, setError] = useState("")




    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })

    },[])
    

    const submit = ()=>{
        if (!weight || weight <= 35){
            setError("Please enter your weight in kg(>35)")
        }else{
            props.navigation.navigate("GetValue", {weight: weight})
        }
    }

    const fail = ()=>{
        if (error !== ""){
            return(
                <Text className="text-red-300 font-bold mx-4">{error}</Text>
            )
        }
    }


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
            onChangeText={newText => setWeight(newText)}
            placeholder="Health Measurements" 
            keyboardType='default'
            />

            </View>
            </View>
            {fail()}
    <View className="px-20 py-5">
    <Button title='save your weight' color={"#424242"} style={styles.button} onPress={()=>submit()}/>
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