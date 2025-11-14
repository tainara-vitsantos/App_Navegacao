import { NavigationContainer } from '@react-navigation/native'

import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from "./screens/HomeScreen";
import CalculadoraScreen from "./screens/CalculadoraScreen";
import ImcScreen from "./screens/ImcScreen";

const Drawer = createDrawerNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Calculadora' component={CalculadoraScreen} />
        <Drawer.Screen name='Imc' component={ImcScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}