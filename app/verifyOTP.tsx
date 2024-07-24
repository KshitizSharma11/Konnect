import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomInput from '@/components/CustomInput';
import CustomButtonAlt from '@/components/CustomButtonAlt';
import OtpInput from '@/components/OtpInput';
const verifyOTP = () => {
    const router = useRouter();
    return (
      <GestureHandlerRootView>
      <SafeAreaView className=' flex-1 bg-[#f4e3ee]'>
        <View className='mt-32'>
        <Text className='text-2xl  text-gray-600 text-center font-semibold' >
          Verify your account
        </Text>
        <Text className='text-lg  text-gray-600 text-center font-medium' >
          Enter the 4- digit code
        </Text>
        </View>
        <View className='my-10 mx-3'>
         
       <OtpInput
       />
       <CustomButtonAlt containerStyles='mx-3 rounded-full mt-5 bg-[#4b164c]'  onPress={()=>router.push("/basics")} title={"Continue"} textStyles='text-xl font-semibold text-white'/>
       </View>
       </SafeAreaView>
       </GestureHandlerRootView>
       
    );
}

export default verifyOTP

