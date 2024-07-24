import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler'
import CustomInputAlt from '@/components/CustomInput'
import CustomButtonAlt from '@/components/CustomButtonAlt'
import { useRouter } from "expo-router";
const login = () => {
  const router = useRouter();
  return (
    <GestureHandlerRootView>
    <SafeAreaView className='justify-center flex-1 bg-[#f4e3ee]'>
      <View className=' translate-y-32'>
      <Text className='text-4xl  text-gray-600 text-center font-semibold' >
        Konnecting... 
      </Text>
      <Text className='text-4xl  text-gray-600 text-center font-semibold' >
        Kangra 
      </Text>
      </View>
      <View className='mt-40 mx-3'>
        <Text className='text-sm font-light  mt-5'>Enter your phone number</Text>
     <CustomInputAlt containerStyles='m-2 p-3 border-2 bg-white rounded-full border-purple-100'
      placeholder='+91 11122 23333' 
      textStyles='font-italic text-[#dd88cf]'
      selectionColor='#dd88cf'
      keyboardType='numeric'
      maxLength={10}
     />
    
    <CustomButtonAlt containerStyles='mx-3 rounded-full mt-5 bg-[#4b164c]' onPress={()=>router.push('/verifyOTP')} 
     title={"Continue"} textStyles='text-xl font-semibold text-white'/>
     
    

     </View>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default login

