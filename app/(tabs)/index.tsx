import { View, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import { ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if(location) {
    console.log(location);
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={'large'} color={'blue'}/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <CurrentWeather />
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
