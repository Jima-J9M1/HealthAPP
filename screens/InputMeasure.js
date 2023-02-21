import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import Title from '../components/Title'
import { SafeAreaView } from 'react-native-safe-area-context'
import { VictoryChart,VictoryTheme,VictoryBar, VictoryArea, VictoryAxis, VictoryPolarAxis, VictoryPie } from 'victory-native'
import Chart from '../components/Chart'

const InputMeasure = () => {
  return (
    <SafeAreaView >
    <ScrollView>
    <View>
      <Layout />
      <Title />
      <Chart />
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryArea data={[{x:1,y:2},{x:2,y:3},{x:3,y:5}]}/>
        <VictoryAxis/>
      </VictoryChart>
    <VictoryChart polar theme={VictoryTheme.material}>
      <VictoryArea data={[{x:1,y:2},{x:2,y:3},{x:3,y:5}]}/>
      <VictoryPolarAxis/>
    </VictoryChart>

    <VictoryPie
      cornerRadius={({ datum }) => datum.y * 5}
      data={[{x:1,y:2},{x:2,y:3},{x:3,y:5}]}
      animate={{
        duration: 2000
      }}
      />
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default InputMeasure

const styles = StyleSheet.create({})