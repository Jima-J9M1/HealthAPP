import { StyleSheet, Text, View,Image, TextInput, ScrollView, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/EvilIcons';
import Card from '../components/Card';
import Title from '../components/Title';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

// import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/solid'

const Home = ({navigation}) => {

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    },[])


  return (
    <SafeAreaView className="bg-white p-2">
    <ScrollView className="mb-2">
   <Layout press={() =>navigation.openDrawer()}/>
    <View className="flex-row items-center space-x-12 ">
    <Title className='flex-1' title={"Health Monitor"}/>
    <Pressable onPress={() => navigation.navigate("Measure")}>
      <View className="flex-row items-center justify-center bg-white rounded-full shadow shadow-emerald-400">
      <Text className="font-bold text-blue-600 ml-2"> Measure</Text>
      <Icon name='chevron-right' size={25} color='rgb(37, 99, 235)' />
      </View>
      </Pressable>
    </View>


    <Pressable onPress={()=>navigation.navigate("BloodChart")}>
      <Card image={require(`../assets/Images/rate.png`)} title={"Blood Pressure(bpm)"} date1={"2 days ago"} date2={"7 min "} value={"141/90"} color="text-red-500" bgColor={"bg-red-50"}/>
    </Pressable>

    <Pressable onPress={()=>navigation.navigate("OxgenLevel")}>
    <Card image={require(`../assets/Images/rate.png`)} date1 = {"3 days ago"} date2= {"3 min ago"} value={38} color= {"text-green-400"} title={"Oxgen level"} bgColor={"bg-green-50"}/>
    </Pressable>

    <Pressable onPress={()=>navigation.navigate("WeigthChart")}>
    <Card image={require(`../assets/Images/rate.png`)} date1 = {"3 days ago"} date2= {"3 min ago"} value={38} color= {"text-blue-400"} title={"Weight"} bgColor={"bg-blue-50"}/>
    </Pressable>

    <Pressable onPress={()=>navigation.navigate("BMIChart")} className="pb-7">
    <Card image={require(`../assets/Images/rate.png`)} date1 = {"3 days ago"} date2= {"3 min ago"} value={38} color= {"text-yellow-400"} title={"BMI"} bgColor={"bg-yellow-50"}/>
    </Pressable>

    
    </ScrollView>
    <Navigation Navigation={navigation}/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})