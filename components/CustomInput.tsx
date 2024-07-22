import { View, TextInput, TextInputBase } from 'react-native'
import React from 'react'

interface TextInputCust {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    containerStyles?: string;
    textStyles?: string;
    selectionColor?: string;
    keyboardType?: string;
    maxLength?: string | number;
}
const CustomInput = ({placeholder,value,onChangeText,containerStyles,textStyles,selectionColor,keyboardType,maxLength}:TextInputCust) => {
  return (
    <View className={`${containerStyles}`}>
      <TextInput className={`${textStyles}`} placeholder={placeholder} selectionColor={selectionColor}
      keyboardType={keyboardType}
      maxLength={maxLength}></TextInput>
    </View>
  )
}

export default CustomInput