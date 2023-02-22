import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Backward from '../components/Backward'
import DataChart from '../components/DataChart'
import {useNavigation } from '@react-navigation/native';
import { VictoryBar, VictoryChart, VictoryHistogram, VictoryLine, VictoryTheme } from 'victory-native'
import Title from '../components/Title'

const OxgenChart = () => {
   
  const sampleData = [
    { x: "Jan", y: 20 },
    { x: "Feb", y: 40 },
    { x: "Mar", y: 80},
    { x: "Apr", y: 120 }
  ]

  const navigation = useNavigation();

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  })

  return (
    <SafeAreaView>
    <View className="mx-auto">

    <Pressable onPress={()=>navigation.pop()}>
    <Backward />
    </Pressable>
    
     <DataChart Title={"Average Oxgen Level"} num={"90 - 100"} unit={"mmHg"}/>

<VictoryChart>
  <VictoryLine
    style={{
        data: { stroke: "green" }
      }}
    data={sampleData}
  />
</VictoryChart>

  <View className="flex-row items-center justify-center">
    <Title title={"Oxgen Level"} />
    </View>

    </View>
    </SafeAreaView>
  )
}

export default OxgenChart

const styles = StyleSheet.create({})