import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CustomButtonAlt from '@/components/CustomButtonAlt';
import OtpInput from '@/components/OtpInput';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';

const basics = () => {
    const router = useRouter();
    return (
      <GestureHandlerRootView>
      <SafeAreaView className=' flex-1 bg-[#f4e3ee]'>
        <View className='mt-24'>
        <Text className='text-4xl  text-[#4b164c] text-center font-bold' >
          Welcome
        </Text>
        <View className='px-4 py-8'>
        <Text>Your Name</Text>
        <TextInput className='' placeholder={"Full Name"}></TextInput>
        <Text>Your Birth Year</Text>
        <TextInput placeholder=''></TextInput>
        <Text >Your Gender</Text>
        <TextInput ></TextInput>
        </View>
       </View>
       </SafeAreaView>
       </GestureHandlerRootView>
       
    );
}

export default basics