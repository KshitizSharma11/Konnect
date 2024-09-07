import { View, Text, SafeAreaView,Image } from 'react-native'
import React from 'react'
import CustomButtonAlt from '@/components/CustomButtonAlt';
import ImagePicker from '@/components/ImagePicker';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';



const basics6 = () => {
    const router = useRouter();
    
    return (
      <GestureHandlerRootView>
      <SafeAreaView className=' flex-1 bg-[#ffedef]'>
        <View className='mt-16'>
        <Text className='text-2xl m-4 text-black text-center font-semibold' >
          Upload Your Photo
        </Text>
        <Text className='text-sm text-center mx-12'>
        We'd love to see you. Upload a photo for your dating journey.
        </Text>
        <ImagePicker/>
        <CustomButtonAlt containerStyles='mx-3 my-20 rounded-full w-4/5 mx-auto  bg-[#FF5069]'  onPress={()=>router.push("/location")} title={"Continue"} textStyles='text-xl font-semibold text-white'/>
       </View>
       </SafeAreaView>
       </GestureHandlerRootView>
       
    );
}

export default basics6