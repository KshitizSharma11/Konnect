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
      <SafeAreaView className=' flex-1 bg-[#ffedef]'>
        <View className='mt-16'>
        <Text className='text-2xl m-4 text-center font-semibold' >
        How old are you?
        </Text>
        <View className='px-4'>
       <CustomYearPicker/>
        </View>
        <CustomButtonAlt containerStyles='mx-3 mt-10 rounded-full mt-5 bg-[#FF5069]'  onPress={()=>router.push("/basics4")} title={"Next"} textStyles='text-xl font-semibold text-white'/>
       </View>
       </SafeAreaView>
       </GestureHandlerRootView>
       
    );
}

export default basics3