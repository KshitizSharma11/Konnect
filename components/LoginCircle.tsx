import { View, Text,Image } from 'react-native'
import React from 'react'
import girlImage from "@/assets/images/girl.jpeg";

const LoginCircle = () => {
  return (
    <View className='items-center'>
     <View className='border border-purple-100 rounded-full border-dotted  w-72 h-72 p-4 items-center justify-center'>
        <View className=' bg-white rounded-full w-64 h-64 items-center justify-center'>
        <View className='bg-purple-100 rounded-full w-60 h-60 items-center justify-center'>
            <View className='bg-white rounded-full items-center justify-center w-40 h-40'>
            <View className='bg-pink-200 rounded-full items-center justify-center w-28 h-28'>
                <Image source={girlImage} className='rounded-full w-24 h-24 border-4 border-purple-300'/>
                </View>
            </View>
        </View>
        </View>
     </View>
    </View>
  )
}

export default LoginCircle