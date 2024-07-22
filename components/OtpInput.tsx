import { View, TextInput } from 'react-native'
import React from 'react'

interface OtpInputProps{

    length?: number;
    onChangeText?: (text: string) => void;

}

  


const OtpInput = ({length,onChangeText}:OtpInputProps) => {
    const arr :number[]=[1,2,3,4];
  return (
    <View>
        <View className='flex flex-row m-2 items-center justify-center'>
        {(arr.map((index)=> <TextInput className='p-2 border m-3' maxLength={1} keyboardType='number-pad' placeholder={`${index}`}></TextInput>))
        
}
</View>
      <TextInput className='m-4 p-2 border ' placeholder='OTP'
      keyboardType='numeric'></TextInput>
    </View> 
  )
}

export default OtpInput