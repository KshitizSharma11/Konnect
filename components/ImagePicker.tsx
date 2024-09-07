import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
const ImagePicker = () => {
  return (
    <View className='flex flex-row w-[90%] mx-auto space-x-4'>
      <View className='flex flex-1 flex-col mt-4 space-y-5'>
        <View className='w-[102%] rounded-2xl bg-white border-[#FF5069] border py-24 items-center'>
         <FontAwesome name="plus-circle" size={32} color={'#FF5069'}/>
        </View>
        <View className='w-1/2 flex flex-row space-x-2'>
        <View className='w-full rounded-2xl bg-white border-[#FF5069] border py-10 items-center'>
        <FontAwesome name="plus-circle" size={32} color={'#FF5069'}/>
        </View>
        <View className='w-full rounded-2xl bg-white border-[#FF5069] border py-10 items-center'>
        <FontAwesome name="plus-circle" size={32} color={'#FF5069'}/>
        </View>
        <View>

        </View>
        </View>
      </View>
      <View className='flex flex-[0.5] flex-col mt-4 space-y-2'>
      <View className='w-[1/4] rounded-2xl bg-white border-[#FF5069] border py-10 items-center'>
      <FontAwesome name="plus-circle" size={32} color={'#FF5069'}/>
</View>
<View className='w-[1/4] rounded-2xl bg-white border-[#FF5069] border py-10 items-center'>
<FontAwesome name="plus-circle" size={32} color={'#FF5069'}/>
        </View>
        <View className='w-[1/4] rounded-2xl bg-white border-[#FF5069] border py-10 items-center'>
        <FontAwesome name="plus-circle" size={32} color={'#FF5069'}/>
        </View>
      </View>
    </View>
  )
}

export default ImagePicker