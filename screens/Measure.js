import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Layout from '../components/Layout'
import { useNavigation } from '@react-navigation/native'
import Title from '../components/Title'
import MeasureCard from '../components/MeasureCard'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import Navigation from '../components/Navigation'

const Measure = () => {

    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    },[])

  return (
    <SafeAreaView className="bg-white p-2">
        <ScrollView>
         <Layout />
         <Title title={"Measurement"}/>

         <Pressable onPress={()=>navigation.navigate('Weight')}>
            <MeasureCard title={"Blood Pressure"} icon={'tint'} color={"red"} bgColor={"bg-red-100"}/>
          </Pressable>
          
          <Pressable onPress={()=>navigation.navigate('Weight')}>
            <MeasureCard title={"Temprature"} icon={'thermometer-empty'} color={"green"} bgColor={"bg-green-100"}/>
          </Pressable>

          <Pressable onPress={()=>navigation.navigate('Weight')}>
            <MeasureCard title={"Body Mass Index"} icon={'child'} color={"#0f0f"} bgColor={"bg-white"}/>
          </Pressable>

          <Pressable onPress={()=>navigation.navigate('Weight')}>
            <MeasureCard title={"Weight"} icon={'stopwatch-20'} color={"#56A3C4"} bgColor={"bg-blue-100"}/>
          </Pressable>

          <Pressable onPress={()=>navigation.navigate('Weight')} className="pb-7">
            <MeasureCard title={"Heart Beat"} icon={'heartbeat'} color={"red"} bgColor={"bg-red-100"}/>
          </Pressable>

        </ScrollView>
        <Navigation Navigation={navigation} />
    </SafeAreaView>
  )
}

export default Measure

const styles = StyleSheet.create({})