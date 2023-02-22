import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Title from '../components/Title'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {

    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    })
  return (
    <SafeAreaView>
        <ScrollView>
            <View>
                <Title title={"Profile"} />
            <Text className="text-xl font-bold mx-2">Name</Text>
            <View className="flex-row p-3">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2 itmes-center rounded-2xl">

                <TextInput 
            // onChangeText={newText => setWeight(newText)}
                placeholder="Name" 
                keyboardType='default'
                />

            </View>
            </View>
            <Text className="text-xl font-bold mx-2">Email</Text>
            <View className="flex-row p-3">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2 itmes-center rounded-2xl">

                <TextInput 
            // onChangeText={newText => setWeight(newText)}
                placeholder="Email" 
                keyboardType='default'
                />

            </View>
            </View>
            <Text className="text-xl font-bold mx-2">Password</Text>
            <View className="flex-row p-3">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2 itmes-center rounded-2xl">

                <TextInput 
            // onChangeText={newText => setWeight(newText)}
                placeholder="Password" 
                keyboardType='default'
                />

            </View>
            </View>
            <View className="px-20 py-5">
    <Button title='save' color={"#424242"} style={styles.button}/>
    </View>
            </View>
        </ScrollView>
    </SafeAreaView>

  )
}

export default Profile

const styles = StyleSheet.create({
    button:{
      backgroundColor: '#424243',
      color: '#000',
      padding: 10,
      borderRadius: 10,
    }
  })