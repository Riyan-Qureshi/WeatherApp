import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'
import RowText from '@/components/RowText'
import { weatherType } from '../utilities/weatherType'
import { WeatherData } from '@/types'

interface CurrentWeatherProps {
  weatherData: WeatherData
}

const CurrentWeather = (props: CurrentWeatherProps) => {
  const { weatherData } = props
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    descriptionStyles,
    message
  } = styles

  const { temp, feelsLike, tempMax, tempMin, weatherCondition, description, population} = weatherData
  const weatherCondKey = weatherCondition as keyof typeof weatherType

  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondKey]?.backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondKey]?.icon} size={100} color="black" />
        <Text style={tempStyles}>{`${Math.round(temp)}° C`}</Text>
        <Text style={feels}>{`Feels like: ${Math.round(feelsLike)}°`}</Text>
        <RowText
          messageOne={`High: ${Math.round(tempMax)}° `}
          messageTwo={`Low: ${Math.round(tempMin)}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={description}
        messageTwo={weatherType[weatherCondKey]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={descriptionStyles}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'pink',
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  descriptionStyles: {
    fontSize: 42
  },
  message: {
    fontSize: 25
  }
})

export default CurrentWeather;
