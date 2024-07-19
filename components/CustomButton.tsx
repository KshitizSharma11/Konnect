import { View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
interface CustomButtonProps{
    onPress:() => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
    imageLogo?: string;
    imageStyles?: string;
}
const CustomButton = ({
    onPress,
    title,
    textStyles="",
    containerStyles="",
    imageLogo="",
    imageStyles=""
  }: CustomButtonProps) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.7}
    className={`bg-white rounded-xl  min-h-[62px] items-center justify-center ${containerStyles}`}
    onPress={onPress}
    >
     <Image source={imageLogo} className={`w-10 h-10 rounded-full ${imageStyles}`}/>
        <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton