import { View, StyleSheet } from 'react-native'
import React from 'react'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from './UpcomingWeather'
import City from './City'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default HomeScreen
