import React from "react";
import Screen from "./Screen";

export const ProfileScreen = ({navigation}) => <Screen navigation={navigation} name="Profile" />
export const SettingsScreen = ({navigation}) => <Screen navigation={navigation} name="Settings" />
// export const HomeScreen = ({navigation}) => <Screen navigation={navigation} name="Home" />
export const MeasureScreen = ({navigation}) => <Screen navigation={navigation} name="Measure" />
export const WeightScreen = ({navigation}) => <Screen navigation={navigation} name="Weight" />
export const BloodPScreen = ({navigation}) => <Screen navigation={navigation} name="Blood Pressure" />
export const BloodOxScreen = ({navigation}) => <Screen navigation={navigation} name="Blood Oxygen" />
export const BloodGluScreen = ({navigation}) => <Screen navigation={navigation} name="Blood Glucose" />
