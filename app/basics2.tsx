import { View, Text, SafeAreaView,Image } from 'react-native'
import React from 'react'
import CustomButtonAlt from '@/components/CustomButtonAlt';

import { useRouter } from 'expo-router';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import {Foundation} from '@expo/vector-icons';

const basics2 = () => {
    const router = useRouter();
    return (
      <GestureHandlerRootView>
      <SafeAreaView className=' flex-1 bg-[#ffedef]'>
        <View className='mt-24'>
        <Text className='text-2xl text-center font-semibold' >
          What's Your Gender ?
        </Text>
        <Text className='text-sm text-center mt-4 mb-14' >
          Tell us about your gender
        </Text>
        <View className='flex flex-col  gap-10 items-center mx-auto'>
       <View className='w-40 h-40 p-4   justify-center items-center rounded-full bg-[#FF5069] '>
       <Foundation name="male-symbol" size={70} color="white" />
       <Text className='font-medium text-lg text-white'>Male</Text>
       </View>
       <View className='w-40 h-40 p-4  transform -translate-y-1 justify-center items-center rounded-full bg-[#F0E4E6] '>
       <Foundation name="female-symbol" size={70} color="black" />
       <Text className='font-medium text-lg'>Female</Text>
       </View>
       </View>
        <CustomButtonAlt containerStyles='mx-3 mt-10 rounded-full mt-5 bg-[#FF5069]'  onPress={()=>router.push("/basics3")} title={"Next"} textStyles='text-xl font-semibold text-white'/>
       </View>
       </SafeAreaView>
       </GestureHandlerRootView>
       
    );
}

export default basics2