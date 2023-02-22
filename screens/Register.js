import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Title from '../components/Title'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
const Register = () => {

  const navigation = useNavigation();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')


    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:false,
      })
    },[])
    

    const register = ()=>{
      if (!name || !email || !password || !confirmPassword){
        setError("Please fill all the fields")
      }else if(email.length < 6){
        setError("Email must be at least 6 characters")
      }else if(password !== confirmPassword){
        setError("Passwords do not match")
      }else{
        setLoading(true)
        navigation.navigate("Login")
      }
    }

    const fail = ()=>{
      if (error !== ""){
        return(
          <Text className="text-red-300 font-bold">{error}</Text>
        )
      }
    }

  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      <View className="mx-3 mt-20">
      <Icon name='stethoscope' size={70} color="#53A6FF" className="bg-blue-400"/>
      <Title title={"Register"}/>
      <View className="space-y-3">
      <View className="p-3 border border-solid border-blue-500 rounded-2xl">
        <TextInput 
        onChangeText={newText => setName(newText)}
        placeholder='Full Name'
        
        />
        </View>

        <View className="p-3 border border-solid border-blue-500 rounded-2xl">
        <TextInput 
        onChangeText={newText => setEmail(newText)}
        placeholder='Email'/>
        </View>

        <View className="p-3 border border-solid border-blue-500 rounded-2xl">
        <TextInput 
        onChangeText={newText => setPassword(newText)}
        placeholder='Password'/>
        </View>

        <View className="p-3 border border-solid border-blue-500 rounded-2xl">
        <TextInput 
        onChangeText={newText => setConfirmPassword(newText)}
        placeholder='Confirm Password'/>
        </View>

        <Pressable className="p-3 bg-blue-400 rounded-full items-center"onPress={()=>register()} >
          <Text className="text-white font-bold">Register</Text>
        </Pressable>
        <View className="mx-3 mt-3">
        {fail()}
        </View>
      </View>
      </View>
      <View className="m-auto mt-20">
        <Pressable onPress={()=>register()}>
        <Text className="text-gray-500"><Text className=" text-blue-500 font-extrabold">Sign In</Text></Text>
      </Pressable>
      </View>
      
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({})