import React from 'react'
import {
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconText from '@/components/IconText'
import { WeatherData } from '../types'
import moment from 'moment'

interface CityProps {
  weatherData: WeatherData
}

const City = (props: CityProps) => {
  const { weatherData } = props
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetText,
    riseSetWrapper,
    imageLayout,
    rowLayout
  } = styles

  const { country, city, population, sunrise, sunset } = weatherData;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('@/assets/images/city-background.jpg')}
        style={imageLayout}
      > 
        <View style={{backgroundColor: '#000000d1'}}>
          <Text style={[cityName, cityText]}>{city}</Text>
          <Text style={[countryName, cityText]}>{country}</Text>
        </View>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={`Population: ${population.toString()}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default City
