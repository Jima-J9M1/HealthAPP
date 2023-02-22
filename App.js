import { StatusBar } from 'expo-status-bar';
import { TailwindProvider } from 'tailwindcss-react-native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Measure from './screens/Measure';
import InputMeasure from './screens/InputMeasure';
import WeightMeasure from './screens/WeightMeasure';
import Login from './screens/Login';
import Register from './screens/Register';
import BloodPChart from './screens/BloodPChart';


import Screen from './screens/Screen';
import User from './screens/User';
import BMIChart from './screens/BMIChart';
import WeightChart from './screens/WeightChart';
import OxgenChart from './screens/OxgenChart';
import ProgressBar from './screens/ProgressBar';
import ProgressChart from './components/ProgressChart';
import GetValue from './screens/GetValue';
import Profile from './screens/Profile';


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
    <TailwindProvider>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Register} />
        <Stack.Screen name='GetValue' component={GetValue} />
        <Stack.Screen name='BloodChart' component={BloodPChart} />
        <Stack.Screen name='OxgenLevel' component={OxgenChart} />
        <Stack.Screen name='WeigthChart' component={WeightChart} />
        <Stack.Screen name='BMIChart' component={BMIChart} />
        <Stack.Screen name='Measure' component={Measure} />
        <Stack.Screen name='Weight' component={WeightMeasure} />
        <Stack.Screen name='User' component={User} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Profile' component={Profile} />

        </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>

  );
}
