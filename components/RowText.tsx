import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// TODO: Specify types for each style component
interface Props {
  messageOne: string
  messageTwo: string
  containerStyles: any
  messageOneStyles: any
  messageTwoStyles: any
}

const Rowtext = (props: Props) => {
  const {
    messageOne,
    messageTwo,
    containerStyles,
    messageOneStyles,
    messageTwoStyles
  } = props
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Rowtext
