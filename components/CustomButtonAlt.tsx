import { View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
interface CustomButtonAltProps{
    onPress:() => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
    
}
const CustomButtonAlt = ({
    onPress,
    title,
    textStyles="",
    containerStyles="",
    
  }: CustomButtonAltProps) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.7}
    className={`bg-white rounded-xl  min-h-[62px] items-center justify-center ${containerStyles}`}
    onPress={onPress}
    >
        <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButtonAlt