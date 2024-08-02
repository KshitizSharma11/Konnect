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
      <SafeAreaView className=' flex-1 bg-[#f4e3ee]'>
        <View className='mt-24'>
        <Text className='text-4xl  text-[#4b164c] text-center font-bold' >
          Welcome
        </Text>
        <View className='px-4 pt-6 m-5 space-y-4'>
        <Text>First Name</Text>
        <View className='flex flex-row items-center space-x-6'>
        <Entypo name='user' color={"#4b164c"} size={24}/>
        <TextInput className='border-2 w-4/5 rounded-lg p-2' placeholder={"First Name"}></TextInput>
        </View>
        </View>
        <View className='px-4 m-5  space-y-4'>
        <Text>Last Name</Text>
        <View className='flex flex-row items-center space-x-6'>
        <Entypo name='user' color={"#4b164c"} size={24}/>
        <TextInput className='border-2 w-4/5 rounded-lg p-2' placeholder={"Last Name"}></TextInput>
        </View>
        </View>
        <CustomButtonAlt containerStyles='mx-3 rounded-full mt-5 bg-[#4b164c]'  onPress={()=>router.push("/basics2")} title={"Next"} textStyles='text-xl font-semibold text-white'/>
       </View>
       </SafeAreaView>
       </GestureHandlerRootView>
       
    );
}

export default basics