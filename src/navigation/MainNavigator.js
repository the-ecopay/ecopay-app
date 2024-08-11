import React from 'react'
// import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import { HomeIcon, UserIcon, CurrencyDollarIcon } from 'react-native-heroicons/outline'
import HomeScreen from '../screen/HomeScreen'
import ProfileScreen from '../screen/ProfileScreen';
import RecycleScreen from '../screen/RecycleScreen';
import tw from 'twrnc'
import RecycleButton from '../components/RecycleButton';
import PickupDetail from '../screen/PickupDetail';
import PickupScheduled from '../screen/PickupScheduled';

const Tab = createBottomTabNavigator();
function BottomNavigator() {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown:false,
          tabBarStyle:[tw`absolute p-0 py-2 left-7 right-7 bottom-5 h-15 rounded-xl border-0`],
          tabBarActiveTintColor: '#059212',
        }}
        >

          <Tab.Screen name='Recycle' options={{
            headerShown:false,
            tabBarIcon:({ focused, color, size }) => {
              return (<CurrencyDollarIcon size={size} style={{ color }} />)}
            // tabBarButton:()=><RecycleButton/>,
          }} component={RecycleScreen}/>

          <Tab.Screen name='Profile' options={{headerShown:false,tabBarIcon:({ focused, color, size }) => {
            return (<UserIcon size={size} style={{ color }} />)
          }}} component={ProfileScreen}/>

      </Tab.Navigator>
  )
}


const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name='BottomNavigation' component={BottomNavigator} /> */}
        <Stack.Screen name='RecycleScreen' component={RecycleScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='PickupDetail' component={PickupDetail} options={{ headerShown: false }}/>
        <Stack.Screen name='PickupScheduled' component={PickupScheduled} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
