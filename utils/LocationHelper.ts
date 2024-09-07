import * as Location from 'expo-location';

const getLocation = async () => {
  try {
    // Request permission to access location
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        console.log('permission denied');
      throw new Error('Permission to access location was denied');
      
    }

    // Get current location
    let location = await Location.getCurrentPositionAsync({});
    
    // Return the location coordinates
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  } catch (error) {
    console.error("Error fetching location: ", error);
    throw error;
  }
};

export default getLocation;
