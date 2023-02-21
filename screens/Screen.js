import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Screen = (props) => {
  return (
    <View>
      <SafeAreaView className = "flex-1">
        <TouchableOpacity
        className="flex-end p-3 rounded-full  bg-blue-100"
        // onPress={props.navigation.openDrawer}
        >
        <Icon name="bars" size={25} color="black" />
        </TouchableOpacity>

        <View className="flex-1 items-center justify-center">
            <Text>{props.navigation} Screen</Text>
        </View>

      </SafeAreaView>
    </View>
  )
}

export default Screen

const styles = StyleSheet.create({})