import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Title from '../components/Title'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
const Login = () => {

  const navigation = useNavigation();

    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:false,
      })
    },[])

  return (
    <SafeAreaView>
    <View>
      <View className="mx-3 mt-36">
      <Icon name='heartbeat' size={70} color="#53A6FF" className="bg-blue-400"/>
      <Title title={"Login"}/>
      <View className="space-y-3">
        <View className="p-3 border border-solid border-blue-500 rounded-2xl">
        <TextInput placeholder='@password'/>
        </View>
        <View className="p-3 border border-solid border-blue-500 rounded-2xl">
        <TextInput placeholder='@email'/>
        </View>
        <Pressable className="p-3 bg-blue-400 rounded-full items-center" >
          <Text className="text-white font-bold">Login</Text>
        </Pressable>
      </View>
      </View>
      <View className="m-auto mt-36">
      <Text className="text-gray-500">New To Health Monitor App <Text className="font-bold text-blue-500">Register</Text></Text>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})