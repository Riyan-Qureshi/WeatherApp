import { View, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import { ActivityIndicator } from 'react-native';
import { useGetWeather } from '@/hooks/useGetWeather';

const HomeScreen = () => {
  const [weather, errorMsg, loading] = useGetWeather();
  console.log(loading, errorMsg, weather)

  if (weather && weather.list) {
    return (
      <View style={styles.container}>
        <CurrentWeather />
      </View>
    )
  }

  // if(weather) {
  //   console.log(weather);
  // }

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
  container: {
    flex: 1
  }
})

export default HomeScreen
