import { View, Text,Image } from 'react-native'
import React from 'react'
import model3 from "@/assets/images/model3.png";
import Girl from "@/assets/images/model1.webp";
import modelOne from "@/assets/images/images.jpeg";
import modelBoy from "@/assets/images/adiBro.png";
import modelGuy from "@/assets/images/modeBoy.jpg";
import modelMe from "@/assets/images/me.jpg";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome6 } from '@expo/vector-icons';
const LoginCircle = () => {
  return (
    <View className='items-center mb-10'>
     <View className='border border-purple-100 rounded-full border-dotted  w-86 h-86 p-6 items-center justify-center'>
        <View className=' bg-white rounded-full w-72 h-72 items-center justify-center'>
        <View className='bg-[#faedf8] rounded-full w-64 h-64 items-center justify-center'>
        <Image source={modelGuy} className='rounded-full w-10 h-10 transform -translate-y-28 -translate-x-4 absolute z-10 border-4 border-purple-300'/>
        <Image source={modelOne} className='rounded-full w-10 h-10 transform translate-y-[100px] translate-x-14 absolute z-10 border-4 border-purple-300'/>  
        <Image source={modelBoy} className='rounded-full w-14 h-14 transform translate-y-20 -translate-x-36 absolute z-10 border-4 border-purple-300'/>  
        <Image source={modelMe} className='rounded-full w-14 h-14 transform translate-y-20 translate-x-36 absolute z-10 border-2 border-purple-300'/>
        <Image source={model3} className='rounded-full w-14 h-14 transform translate-y-40  absolute z-10 border-2 border-purple-300'/>
       <View className='transform translate-y-36 -translate-x-24 z-10 absolute'>
        <Ionicons name="chatbox-ellipses"  size={28} color="#dd88cf" />
        </View>
        <View className='transform -translate-y-36 translate-x-20 z-10 absolute'>
        <FontAwesome6 name="location-dot" size={28} color="#dd88cf" />
        </View>
            <View className='bg-white rounded-full items-center justify-center w-40 h-40'>
            <View className='bg-pink-200 rounded-full items-center justify-center w-24 h-24'>
                <Image source={Girl} className='rounded-full w-24 h-24 border-4 border-purple-300'/>
                </View>
            </View>
        </View>
        </View>
     </View>
    </View>
  )
}

export default LoginCircle