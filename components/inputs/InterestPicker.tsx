import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
const InterestPicker = () => {
  return (
    <View className='my-7 flex-col space-y-6'>
     <View className='flex flex-row items-center space-x-4 w-3/5 mx-auto'>
     <View className='flex-1'>
        <TouchableOpacity className='flex flex-row items-center space-x-2'>
            <FontAwesome name="book" size={15}/>
            <Text className='text-sm'>Reading</Text>
        </TouchableOpacity>
        </View>
        <View className='flex-1'>
        <TouchableOpacity className='flex flex-row items-center justify-between space-x-2 '>
            <FontAwesome name="camera" size={15}/>
            <Text className='text-sm'>Photography</Text>
        </TouchableOpacity>
        </View>
    </View> 
    <View className='flex flex-row items-center space-x-4 w-4/5 mx-auto'>
    <View className='flex-1'>
        <TouchableOpacity className='flex flex-row items-center  space-x-2'>
            <FontAwesome name="gamepad" size={18}/>
            <Text className='text-sm'>Gaming</Text>
        </TouchableOpacity>
        </View>
        <View className='flex-1'>
        <TouchableOpacity className='flex flex-row items-center  space-x-2 '>
            <FontAwesome name="music" size={18}/>
            <Text className='text-sm'>Music</Text>
        </TouchableOpacity>
        </View>
        <View className='flex-1'>
        <TouchableOpacity className='flex flex-row items-center  space-x-2 '>
            <FontAwesome name="plane" size={18}/>
            <Text className='text-sm'>Travel</Text>
        </TouchableOpacity>
        </View>
    </View> 
    <View className='flex flex-row items-center justify-between w-3/5 mx-auto'>
    <View className='flex-1'>
        <TouchableOpacity className='flex flex-row items-center space-x-2'>
            <FontAwesome5 name="palette" size={16}/>
            <Text className='text-sm'>Painting</Text>
        </TouchableOpacity>
        </View>
        <View className='flex-1'>
        <TouchableOpacity className='flex flex-row items-center  space-x-2 '>
            <FontAwesome5 name="landmark" size={16}/>
            <Text className='text-sm'>Politics</Text>
        </TouchableOpacity>
        </View>
    </View>
    <View className='flex flex-row items-center  space-x-4 w-4/5 mx-auto'>
    <View className='flex-1'>
        <TouchableOpacity className='flex flex-row items-center space-x-2'>
            <FontAwesome5 name="hand-holding-heart" size={18}/>
            <Text className='text-sm'>Charity</Text>
        </TouchableOpacity>
        </View>
        <View className='flex-1'>
        <TouchableOpacity className='flex flex-row items-center  space-x-2 '>
            <FontAwesome5 name="utensils" size={16}/>
            <Text className='text-sm'>Cooking</Text>
        </TouchableOpacity>
        </View>
        <View className='flex-1'>
        <TouchableOpacity className='flex flex-row items-center space-x-2 '>
            <FontAwesome name="paw" size={16}/>
            <Text className='text-sm'>Pets</Text>
        </TouchableOpacity>
        </View>
    </View>  
    <View className='flex flex-row items-center justify-between w-3/5 mx-auto'>
    <View className='flex-1'>
        <TouchableOpacity className='flex flex-row items-center space-x-2'>
            <FontAwesome5 name="baseball-ball" size={16}/>
            <Text className='text-sm' >Sports</Text>
        </TouchableOpacity>
        </View>
        <View className='flex-1'>
        <TouchableOpacity className='flex flex-row items-center space-x-2 '>
            <FontAwesome5 name="tshirt" size={16}/>
            <Text className='text-sm'>Fashion</Text>
        </TouchableOpacity>
        </View>
    </View>
    </View>
  )
}

export default InterestPicker