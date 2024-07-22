import { Link } from "expo-router";
import { ImageBackground, Text, View } from "react-native";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "@/components/CustomButton";
import googleIco from "@/assets/images/google.png";
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
      
  <SafeAreaView className="flex-1 px-1 justify-between">
      <LoginCircle/>    
      <View>
  <Text className="text-center text-4xl text-center font-bold">Let's explore new people around you</Text>
  </View>
  <View className="m-2">
  <CustomButton onPress={()=>router.push('/login')} containerStyles="bg-black m-3  transform -translate-y-12 flex-row rounded-full bg-[#4b164c]" textStyles="text-white font-bold" title="Continue with Phone" imageLogo={callMob} imageStyles="transform -translate-x-10" />
    
  </View>
  <StatusBar style="light"/>
      </SafeAreaView>
    
    
    </View>
    </GestureHandlerRootView>
  );
}
