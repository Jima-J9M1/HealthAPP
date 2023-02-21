import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Backward from '../components/Backward'
import DataChart from '../components/DataChart'
import {useNavigation } from '@react-navigation/native';
import { VictoryBar, VictoryChart, VictoryHistogram, VictoryTheme } from 'victory-native'
import Title from '../components/Title'

const WeightChart = () => {
   
  const sampleData = [
    { x: 1, y: 20 },
    { x: 2, y: 40 },
    { x: 3, y: 80},
    { x: 4, y: 120 }
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
    
     <DataChart Title={"Average Weight"} num={"60 - 90"} unit={"KG"}/>
     <VictoryChart
  theme={VictoryTheme.material}
  domainPadding={{ x: 15 }}
>
  <VictoryBar
    cornerRadius={{ topLeft: ({ datum }) => datum.x * 4 }}
    style={{
      data: {
        fill: "#549DEA",
        width: 25
      }
    }}
    data={sampleData}
  />
</VictoryChart>

  <View className="flex-row items-center justify-center">
    <Title title={"WEIGHT CHART"} />
    </View>

    </View>
    </SafeAreaView>
  )
}

export default WeightChart

const styles = StyleSheet.create({})