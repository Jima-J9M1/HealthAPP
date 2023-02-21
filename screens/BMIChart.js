import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { VictoryArea, VictoryAxis, VictoryBar, VictoryChart, VictoryPolarAxis, VictoryScatter, VictoryTheme } from 'victory-native'
import  {useNavigation} from '@react-navigation/native';
import Backward from '../components/Backward';
import Title from '../components/Title';
import { SafeAreaView } from 'react-native-safe-area-context';
import DataChart from '../components/DataChart';


const BMIChart = () => {
    
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    const sampleData = [
        { x: 1, y: 20 },
        { x: 2, y: 40 },
        { x: 3, y: 80},
        { x: 4, y: 120 }
      ]


  return (
    <SafeAreaView>

    <View>
    <Pressable onPress={()=>navigation.pop()}>
    <Backward />
    </Pressable>
    
      <DataChart Title={"Average BMI"} num={"18.5 - 24.9"} unit={""}/>

    <VictoryChart horizontal
  domainPadding={{ x: 8 }}
>
  <VictoryBar
    style={{
      data: { fill: "#EACD3A" }
    }}
    data={sampleData}
  />
  <VictoryScatter
    data={sampleData}
  />
</VictoryChart>


    </View>
    <View className="flex-row items-center justify-center">
    <Title title={"BMI Chart"} />
    </View>
    </SafeAreaView>

  )
}

export default BMIChart

const styles = StyleSheet.create({})