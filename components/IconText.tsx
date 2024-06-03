import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

interface Props {
  iconName: keyof typeof Feather.glyphMap
  iconColor: string
  bodyText: string
  bodyTextStyles: any
}

const IconText = (props: Props) => {
  const { iconName, iconColor, bodyText, bodyTextStyles } = props
  const { container, textTheme } = styles
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold'
  }
})

export default IconText
