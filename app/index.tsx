import { Link } from "expo-router";
import { ImageBackground, Text, View } from "react-native";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "@/components/CustomButton";
import callMob from "@/assets/images/callMob.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import LoginCircle from "@/components/LoginCircle";
import { useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();
  return (
    <GestureHandlerRootView>
    <View className="flex-1">
      
  <SafeAreaView className="flex-1 px-1 justify-between bg-[#ffedef]">
      <LoginCircle/>    
      <View>
  <Text className="text-center text-2xl mx-6  font-semibold">Let's explore new people around you</Text>
  <Text className="text-center text-sm mx-12 my-6">Create an account to discover new people, connect with friends, and share your experiences</Text>
  </View>
  <View className="mt-6">
  <CustomButton onPress={()=>router.push('/login')} containerStyles="bg-black m-3  transform -translate-y-12 flex-row rounded-full bg-[#FF5069]" textStyles="text-white font-bold" title="Continue with Phone" imageLogo={callMob} imageStyles="transform -translate-x-10" />
    
  </View>
  <StatusBar style="light"/>
      </SafeAreaView>
    
    
    </View>
    </GestureHandlerRootView>
  );
}
