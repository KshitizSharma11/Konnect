import { Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Layout() {
    const [onboard, setOnboard] = useState(true);  // Set based on your logic (e.g. AsyncStorage)
    const router = useRouter();  // Get the router for navigation

    useEffect(() => {
        // Navigate to the appropriate route based on the onboard state
        if (onboard) {
            router.replace('(tabs)/main');  // Direct to the main tab navigator
        } else {
            router.replace('');  // Direct to the onboarding flow
        }
    }, [onboard]);

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="login" />
            <Stack.Screen name="verifyOTP" />
            <Stack.Screen name="basics" />
            <Stack.Screen name="basics2" />
            <Stack.Screen name="basics3" />
            <Stack.Screen name="basics4" />
            <Stack.Screen name="basics5" />
            <Stack.Screen name="basics6" />
            <Stack.Screen name="location" />
            <Stack.Screen name="(tabs)" /> {/* Main tab layout */}
        </Stack>
    );
}
