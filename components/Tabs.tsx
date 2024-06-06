import React from 'react';
import CurrentWeather from '@/screens/CurrentWeather';
import { WeatherData } from '@/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UpcomingWeather from '@/screens/UpcomingWeather';
import City from '@/screens/City';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

const Tab = createBottomTabNavigator()

const Tabs = ({weatherData}: {weatherData: WeatherData[]}) => {
    return(
    <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          headerShown: false
        }}>
          <Tab.Screen name={'Current'} options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon name={focused ? 'cloud' : 'cloud-outline'} color={'orange'} />
            ),
          }}>
            { () => <CurrentWeather weatherData={weatherData[0]}/>}
          </Tab.Screen>
          
          <Tab.Screen name={'City'} options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon name={focused ? 'business' : 'business-outline'} color={'orange'} />
            ),
          }}>
            { () => <City weatherData={weatherData[0]}/>}
          </Tab.Screen>

          <Tab.Screen name={'Upcoming'} options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon name={focused ? 'time' : 'time-outline'} color={'orange'} />
            )
          }}>
            { () => <UpcomingWeather weatherData={weatherData}/>}
          </ Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs