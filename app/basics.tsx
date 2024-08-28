import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CustomButtonAlt from '@/components/CustomButtonAlt';
import CustomYearPicker from '@/components/inputs/CustomYearPicker';
import OtpInput from '@/components/OtpInput';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { Ionicons,Entypo } from '@expo/vector-icons';

const basics = () => {
    const router = useRouter();
    return (
      <GestureHandlerRootView>
      <SafeAreaView className=' flex-1 bg-[#ffedef]'>
        <View className='mt-24'>
        <Text className='text-2xl text-center font-semibold' >
          What's Your Name ?
        </Text>
        <Text className='text-sm text-[#333333] font-normal text-center mt-3'>Let's Get to Know Each Other</Text>
        
       
        
        <TextInput className='border border-[#FF5069] mx-auto w-4/5 rounded-full mt-7 mb-8 p-2' placeholder={"Name"}></TextInput>
        
        <CustomButtonAlt containerStyles='rounded-full w-4/5 mx-auto  bg-[#FF5069]'  onPress={()=>router.push("/basics2")} title={"Continue"} textStyles='text-xl font-semibold text-white'/>
       </View>

       </SafeAreaView>
       </GestureHandlerRootView>
       
    );
}

export default basics