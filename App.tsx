import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View } from 'react-native';
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



const Settings = () => <Text>Recents</Text>;

/*React Paper Implementation
const BottomNavBar = () => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'expenses', title: 'Expenses', icon: 'chart-line' },
    { key: 'settings', title: 'Settings', icon: 'account' },
  ])

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    expenses: Expenses,
    settings: Settings,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );

}
*/

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
