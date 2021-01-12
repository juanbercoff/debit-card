import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  SafeAreaView } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Text } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import { createStackNavigator } from '@react-navigation/stack';

import Expenses from './Expenses'
import Home from './Home'

const Tab = createMaterialBottomTabNavigator();
//const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FDFBFD',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <BottomNavBar/>
      </NavigationContainer>
    </PaperProvider>

  );
}



const Settings = () => <Text>Settings</Text>;

const BottomNavBar = () => (
  <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={Home}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} 
      />
      <Tab.Screen 
      name="Expenses" 
      component={Expenses} 
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="chart-line" color={color} size={26} />
        ),
      }} 
      />
      <Tab.Screen 
      name="Settings" 
      component={Settings} 
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }} 
      />
  </Tab.Navigator>
) 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTab: {
    color: '#eee'
  }
});
