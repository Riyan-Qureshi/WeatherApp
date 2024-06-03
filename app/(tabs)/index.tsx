import { View, StyleSheet } from 'react-native'
import React from 'react'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'

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
