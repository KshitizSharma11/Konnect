import { Link } from "expo-router";
import { ImageBackground, Text, View } from "react-native";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "@/components/CustomButton";
import googleIco from "@/assets/images/google.png";
import callMob from "@/assets/images/callMob.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import LoginCircle from "@/components/LoginCircle";
export default function Index() {
  return (
    <GestureHandlerRootView>
    <View className="flex-1">
      
  <SafeAreaView className="flex-1 px-1 justify-between">
      <LoginCircle/>    
      <View>
  <Text className="text-center text-4xl text-center font-bold">Let's explore new people around you</Text>
  </View>
  <View className="m-2">
  <CustomButton onPress={()=>console.log("pressed")} containerStyles="bg-black m-3 mb-3 flex-row rounded-full bg-[#4b164c]" textStyles="text-white font-bold" title="Login with Phone" imageLogo={callMob} imageStyles="transform -translate-x-12" />
    <CustomButton onPress={()=>console.log("pressed")} containerStyles="bg-black m-3 mt-2 flex-row  rounded-full bg-purple-50" textStyles="text-purple-900 font-bold" title="Login with Google" imageLogo={googleIco} imageStyles="transform -translate-x-12" />
      <Text className="mb-10 text-center mt-2">Don't have an account? <Text className="text-purple-400 font-medium">Sign Up</Text></Text>
  </View>
  <StatusBar style="light"/>
      </SafeAreaView>
    
    
    </View>
    </GestureHandlerRootView>
  );
}
