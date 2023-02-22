import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const BloodMeasure = () => {
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

export default BloodMeasure

const styles = StyleSheet.create({})