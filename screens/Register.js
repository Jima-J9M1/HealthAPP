import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Title from '../components/Title'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
const Register = () => {

  const navigation = useNavigation();

    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:false,
      })
    },[])

  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      <View className="mx-3 mt-20">
      <Icon name='stethoscope' size={70} color="#53A6FF" className="bg-blue-400"/>
      <Title title={"Register"}/>
      <View className="space-y-3">
      <View className="p-3 border border-solid border-blue-500 rounded-2xl">
        <TextInput placeholder='Full Name'/>
        </View>

        <View className="p-3 border border-solid border-blue-500 rounded-2xl">
        <TextInput placeholder='Email'/>
        </View>

        <View className="p-3 border border-solid border-blue-500 rounded-2xl">
        <TextInput placeholder='Password'/>
        </View>

        <View className="p-3 border border-solid border-blue-500 rounded-2xl">
        <TextInput placeholder='Confirm Password'/>
        </View>

        <Pressable className="p-3 bg-blue-400 rounded-full items-center" >
          <Text className="text-white font-bold">Register</Text>
        </Pressable>

      </View>
      </View>
      <View className="m-auto mt-20">
      <Text className="text-gray-500"><Text className=" text-blue-500 font-extrabold">Sign In</Text></Text>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({})