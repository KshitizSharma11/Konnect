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
      <SafeAreaView className=' flex-1 bg-[#ffedef]'>
        <View className='mt-32'>
        <Text className='text-2xl   text-center font-semibold' >
          Verification Code
        </Text>
        <Text className='text-sm mt-3 text-center font-normal' >
          Please enter code we just sent to you
        </Text>
        </View>
        <View className='my-10 mx-3'>
         
       <OtpInput
       />
       <CustomButtonAlt containerStyles='mx-3 rounded-full mt-5 bg-[#FF5069]'  onPress={()=>router.push("/basics")} title={"Continue"} textStyles='text-xl font-semibold text-white'/>
       </View>
       </SafeAreaView>
       </GestureHandlerRootView>
       
    );
}

export default verifyOTP

