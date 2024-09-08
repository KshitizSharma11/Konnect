import auth from '@react-native-firebase/auth';

// Function to sign in with a phone number
export async function signInWithPhoneNumber(phoneNumber:string) {
  try {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    return { success: true, confirmation };
  } catch (error) {
    console.log('Error signing in with phone number:', error);
    return { success: false, error };
  }
}

// Function to confirm the OTP code
export async function confirmCode(confirmation:any, code:string) {
  try {
    const result = await confirmation.confirm(code);
    return { success: true, result };
  } catch (error) {
    console.log('Invalid code:', error);
    return { success: false, error };
  }
}
