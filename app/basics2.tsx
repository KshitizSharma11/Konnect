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

const basics2 = () => {
    const router = useRouter();
    return (
      <GestureHandlerRootView>
      <SafeAreaView className=' flex-1 bg-[#f4e3ee]'>
        <View className='mt-24'>
        <Text className='text-4xl  text-[#4b164c] text-center font-bold' >
          Selecte Your Gender
        </Text>
        <View className='px-4 pt-6 m-5 space-y-4 flex flex-row items-center justify-between'>
       <View className='m-2 p-4 border-2 border-purple-400 flex-1 justify-center items-center rounded-full bg-gray-50 max-w-70 max-h-70'>
       <Foundation name="male-symbol" size={70} color="#4b164c" />
       <Text>Male</Text>
       </View>
       <View className='m-2 p-4 border-2 border-pink-400 transform -translate-y-1 flex-1 justify-center items-center rounded-full bg-gray-50 max-w-70 max-h-70'>
       <Foundation name="female-symbol" size={70} color="#4b164c" />
       <Text>Female</Text>
       </View>
        </View>
        <CustomButtonAlt containerStyles='mx-3 rounded-full mt-5 bg-[#4b164c]'  onPress={()=>router.push("/basics3")} title={"Next"} textStyles='text-xl font-semibold text-white'/>
       </View>
       </SafeAreaView>
       </GestureHandlerRootView>
       
    );
}

export default basics2