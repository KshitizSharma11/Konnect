import { View, Text, SafeAreaView,Image } from 'react-native'
import React,{useState} from 'react'
import CustomButtonAlt from '@/components/CustomButtonAlt';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import getLocation from '@/utils/LocationHelper';


const location = () => {
    const router = useRouter();
    const [location, setLocation] = useState({});
    const handleGetLocation = async () => {
        try {
          const loc = await getLocation();
          setLocation(loc);
          console.log(location);
          router.push('(tabs)/main');
          
        } catch (error:any) {
          console.log(error.message);
        }
      };
   
    
    return (
      <GestureHandlerRootView>
      <SafeAreaView className=' flex-1 bg-[#ffedef]'>
        <View className='flex flex-col items-center justify-center mt-[40%]'>
            <Image source={require('@/assets/location.png')} className='w-44 h-32'/>
        </View>
        <View className='mt-4'>
        <Text className='text-2xl m-4 text-black text-center font-semibold' >
        Enable your location
        </Text>
        <Text className='text-sm text-center mx-12'>
        Choose your location to start find people around you
        </Text>
     
        <CustomButtonAlt containerStyles=' my-20 rounded-full w-4/5 mx-auto  bg-[#FF5069]'  onPress={()=>{handleGetLocation();}} title={"Allow Location Access"} textStyles='text-xl font-semibold text-white'/>
       </View>
       </SafeAreaView>
       </GestureHandlerRootView>
       
    );
}

export default location