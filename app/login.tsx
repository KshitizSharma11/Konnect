import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import CustomInputAlt from '@/components/CustomInput';
import CustomButtonAlt from '@/components/CustomButtonAlt';
import { useRouter } from 'expo-router';
import OtpInput from '@/components/OtpInput';
import { signInWithPhoneNumber, confirmCode } from '@/utils/FireBaseHelper';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState(''); // Initialize without +91
  const [otp, setOtp] = useState('');
  const [otpView, setOtpView] = useState(false); // Start with phone number input
  const [confirmation, setConfirmation] = useState(null); // Store confirmation in state
  const router = useRouter();

  const handlePhoneSubmit = async () => {
    // Ensure phoneNumber is valid and convert to E.164 format
    const formattedPhoneNumber = `+91${phoneNumber.trim()}`;

    if (!phoneNumber || phoneNumber.length !== 10) { // Check if it's a valid 10-digit number
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    const res = await signInWithPhoneNumber(formattedPhoneNumber);
    if (res.success) {
      setConfirmation(res.confirmation); // Store confirmation object in state
      setOtpView(true); // Show OTP input
    } else {
      alert('Error sending OTP: ' + res.error.message);
    }
  };

  const handleOtpSubmit = async () => {
    if (!otp) {
      alert('Please enter the OTP');
      return;
    }

    const res = await confirmCode(confirmation, otp);
    if (res.success) {
      router.push('/basics');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView className='flex-1 bg-[#ffedef]'>
        {!otpView ? (
          <View>
            <Text className='text-2xl mt-24 mx-14 text-center font-semibold'>
              Let's start with your number
            </Text>
            <View className='mt-9 mx-3'>
              <CustomInputAlt
                containerStyles='m-2 p-3 border-2 bg-white rounded-full border-purple-100'
                placeholder='Enter 10-digit phone number' 
                textStyles='font-italic text-[#dd88cf]'
                selectionColor='#dd88cf'
                keyboardType='numeric'
                maxLength={10} // Allow only 10 digits for the phone number
                value={phoneNumber} // Bind to the state variable
                onChangeText={(text) => setPhoneNumber(text)} // Update state when typing
              />
              <CustomButtonAlt
                containerStyles='mx-3 rounded-full mt-5 bg-[#FF5069]'
                onPress={handlePhoneSubmit} // Trigger phone number submission
                title={'Continue'}
                textStyles='text-xl font-semibold text-white'
              />
            </View>
          </View>
        ) : (
          <View className='mt-32'>
            <Text className='text-2xl text-center font-semibold'>
              Verification Code
            </Text>
            <Text className='text-sm mt-3 text-center font-normal'>
              Please enter the code we just sent to you
            </Text>
            <View className='my-10 mx-3'>
              <OtpInput onChangeText={setOtp} />
              <CustomButtonAlt
                containerStyles='mx-3 rounded-full mt-5 bg-[#FF5069]'
                onPress={handleOtpSubmit} // Trigger OTP confirmation
                title={'Continue'}
                textStyles='text-xl font-semibold text-white'
              />
            </View>
          </View>
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Login;
