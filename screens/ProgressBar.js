import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProgressChart } from 'react-native-chart-kit';

const ProgressBar = () => {



     
  return (
    <SafeAreaView>
    <View className="mt-16 mx-12 ">
    <ProgressChart
        data={{
          labels: ["Swim"], // optional
          data: [0.6]
        }}
        width={340}
        height={220}
        strokeWidth={16}
        radius={72}
        chartConfig={{
          backgroundGradientFrom: "#000000",
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: "#ffffff",
          backgroundGradientToOpacity: 1,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          strokeWidth: 2, // optional, default 3
          barPercentage: 0.5,
          useShadowColorFromDataset: false // optional
        }}
        hideLegend={false}
      />
    </View>
    </SafeAreaView>
  )
}

export default ProgressBar

const styles = StyleSheet.create({})