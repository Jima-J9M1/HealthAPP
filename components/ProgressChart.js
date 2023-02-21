import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Svg } from 'react-native-svg'
import { VictoryChart, VictoryLine, VictoryTheme,VictoryPie,VictoryLabel,VictoryAnimation } from 'victory-native'
import Backward from './Backward'
import { useNavigation } from '@react-navigation/native'


const ProgressChart = () => {
    
    const [percent, setPercent] = useState(1);
    const [data, setData] = useState(getData(0))
    
  

    useLayoutEffect(() => {
        let percent = 1;
        while (percent < 50) {
          percent += (Math.random() * 10);
          setPercent(percent);
          setData(getData(percent));
    }
},[])


    function getData(percent){
      return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
    }

      return (
        <View>
        <Backward />
          <Svg viewBox="0 0 400 400" width="100%" height="100%">
            <VictoryPie
              standalone={false}
              animate={{ duration: 1000 }}
              width={400} height={400}
              data={data}
              innerRadius={120}
              cornerRadius={25}
              labels={() => null}
              style={{
                data: { fill: ({ datum }) => {
                  const color = datum.y > 30 ? "green" : "red";
                  return datum.x === 1 ? color : "transparent";
                }
                }
              }}
            />
            <VictoryAnimation duration={0.001} data={data}>
              {(newProps) => {
                return (
                  <VictoryLabel
                    textAnchor="middle" verticalAnchor="middle"
                    x={200} y={200}
                    text={`${Math.round(newProps.percent)}%`}
                    style={{ fontSize: 45 }}
                  />
                );
              }}
            </VictoryAnimation>
          </Svg>
        </View>
      );
    }







export default ProgressChart

const styles = StyleSheet.create({})