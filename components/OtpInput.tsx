import { View, TextInput } from 'react-native';
import React, { useState, useRef } from 'react';

interface OtpInputProps {
  length?: number;
  onChangeText?: (text: string) => void;
}

const OtpInput = ({ length = 4, onChangeText }: OtpInputProps) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChangeText = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (onChangeText) {
      onChangeText(newOtp.join(''));
    }

    // Move to next input
    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  return (
    <View className='flex items-center justify-center m-2'>
      <View className='flex flex-row'>
        {Array(length)
          .fill(0)
          .map((_, index) => (
            <TextInput
              key={index}
              className='p-2 border m-3 w-14 h-14 bg-white rounded-full text-center focus:border-2 focus:border-[#FF5069]'
              maxLength={1}
              selectionColor={'#dd88cf'}
              keyboardType='number-pad'
              value={otp[index]}
              onChangeText={(text) => handleChangeText(text, index)}
              ref={(ref) => {
                inputs.current[index] = ref;
              }}
            />
          ))}
      </View>
    </View>
  );
};

export default OtpInput;
