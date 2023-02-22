import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Layout from '../components/Layout'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Navigation from '../components/Navigation'


const User = () => {

    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    },[])


  return (
    <SafeAreaView>
    <ScrollView className="mb-32 pb-16">
    <View>
      <Layout/>
      
      <View className="p-2 mx-2 space-y-2">
           
        <Pressable className="p-3 bg-white  rounded-md" onPress={()=>navigation.navigate("Profile")}>
                <Text className="text-xl font-bold">Profile</Text>
        </Pressable>
        
        
        <Pressable className="p-3 bg-white  rounded-md" onPress={() => navigation.navigate("Login")}>
                <Text className="text-xl font-bold">Logout</Text>
        </Pressable>

      </View>
    </View>
    </ScrollView>
    <View className="mt-64">
    <Navigation Navigation={navigation} />
    </View>
    </SafeAreaView>
  )
}

export default User

const styles = StyleSheet.create({})