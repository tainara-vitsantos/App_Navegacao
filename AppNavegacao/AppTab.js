import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "./screens/HomeScreen";
import CalculadoraScreen from "./screens/CalculadoraScreen";
import ImcScreen from "./screens/ImcScreen";

const Tab = createBottomTabNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Calculadora' component={CalculadoraScreen} />
        <Tab.Screen name='Imc' component={ImcScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}