import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#FF5069', headerShown: false }} initialRouteName='main'>
      <Tabs.Screen
        name="main"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="heart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="comment" color={color} />,
        }}
      />
    
    
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
