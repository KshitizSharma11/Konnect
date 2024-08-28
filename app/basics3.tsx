import { View, Text, SafeAreaView,Image } from 'react-native'
import React from 'react'
import CustomButtonAlt from '@/components/CustomButtonAlt';
import CustomYearPicker from '@/components/inputs/CustomYearPicker';
import OtpInput from '@/components/OtpInput';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { Ionicons,Entypo ,Foundation} from '@expo/vector-icons';

const basics3 = () => {
    const router = useRouter();
    return (
      <GestureHandlerRootView>
      <SafeAreaView className=' flex-1 bg-[#f4e3ee]'>
        <View className='mt-16'>
        <Text className='text-4xl m-4 text-[#4b164c] text-center font-bold' >
          Select Your Birth Year
        </Text>
        <View className='px-4'>
       <CustomYearPicker/>
        </View>
        <CustomButtonAlt containerStyles='mx-3 rounded-full  bg-[#4b164c]'  onPress={()=>router.push("/basics4")} title={"Next"} textStyles='text-xl font-semibold text-white'/>
       </View>
       </SafeAreaView>
       </GestureHandlerRootView>
       
    );
}

export default basics3