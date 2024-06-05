import { View, StyleSheet, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import { ActivityIndicator } from 'react-native';
import { useGetWeather } from '@/hooks/useGetWeather';
import { WeatherData } from '../types';

const HomeScreen = () => {
  const {weather, errorMsg, loading} = useGetWeather();
  if (weather && !loading) {
    return (
      <View style={styles.container}>
        {<CurrentWeather {...weather[0]}/>}
      </View>
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
  container: {
    flex: 1
  }
})

export default HomeScreen
