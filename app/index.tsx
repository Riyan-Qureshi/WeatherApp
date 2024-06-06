import { View, StyleSheet, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useGetWeather } from '@/hooks/useGetWeather';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '@/components/Tabs';


const App = () => {
  const {weather, errorMsg, loading} = useGetWeather();
  console.log("weather type", weather.length)
  if (weather && !loading) {
    return (
      <NavigationContainer independent={true}>
        <Tabs weatherData={weather}/>
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.loading}>
        <ActivityIndicator size={'large'} color={'blue'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
    flex: 1
  },
})

export default App
