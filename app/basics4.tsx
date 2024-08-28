import { View, Text, SafeAreaView,Image } from 'react-native'
import React from 'react'
import CustomButtonAlt from '@/components/CustomButtonAlt';

import { useRouter } from 'expo-router';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { Ionicons,Entypo ,Foundation} from '@expo/vector-icons';


const basics3 = () => {
    const router = useRouter();
    return (
      <GestureHandlerRootView>
      <SafeAreaView className=' flex-1 bg-[#ffedef]'>
        <View className='mt-16'>
        <Text className='text-2xl m-4 text-black text-center font-semibold mx-14' >
          I Am Looking For ...
        </Text>
        <Text className='text-sm text-center mx-12'>
            Provide us with further insights into your preferences
        </Text>
        <TextInput placeholder='bio here' className=' rounded-lg border-2 border-pink-300 w-4/5 mx-auto my-6 text-center bg-white' selectionColor='#dd88cf'
        multiline numberOfLines={5} maxLength={150}/>
        <CustomButtonAlt containerStyles='mx-3 my-20 rounded-full w-4/5 mx-auto  bg-[#FF5069]'  onPress={()=>router.push("/basics4")} title={"Continue"} textStyles='text-xl font-semibold text-white'/>
       </View>
       </SafeAreaView>
       </GestureHandlerRootView>
       
    );
}

export default basics3