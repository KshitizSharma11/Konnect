import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler'
import CustomInputAlt from '@/components/CustomInput'
import CustomButtonAlt from '@/components/CustomButtonAlt'
import { useRouter } from "expo-router";
const login = () => {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const router = useRouter();
  return (
    <GestureHandlerRootView>
    <SafeAreaView className='flex-1 bg-[#ffedef]'>
      
      <Text className='text-2xl mt-24 mx-14 text-center font-semibold' >
        Let's start with your number
      </Text>
      
     
      <View className='mt-9 mx-3'>
        
     <CustomInputAlt containerStyles='m-2 p-3 border-2 bg-white rounded-full border-purple-100'
      placeholder='+91 11122 23333' 
      textStyles='font-italic text-[#dd88cf]'
      selectionColor='#dd88cf'
      keyboardType='numeric'
      maxLength={10}
      onChangeText={()=>{setPhoneNumber}}
     />
    
    <CustomButtonAlt containerStyles='mx-3 rounded-full mt-5 bg-[#FF5069]' onPress={()=>{
      
      router.push('/verifyOTP')}} 
     title={"Continue"} textStyles='text-xl font-semibold text-white'/>
     
    

     </View>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default login

