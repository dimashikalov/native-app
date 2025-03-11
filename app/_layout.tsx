import { Colors } from '@/shared/tokens';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

// SplashScreen.setOptions({
//   duration: 1000,
//   fade: true,
// });

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  const [loaded, error] = useFonts({
    FiraSans: require('../assets/fonts/FiraSans-Regular.ttf'),
    FiraSansSemiBold: require('../assets/fonts/FiraSans-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarBackgroundColor: Colors.black,
          contentStyle: {
            backgroundColor: Colors.black,
            paddingTop: insets.top,
          },
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen
          name="restore"
          options={{
            presentation: 'formSheet',
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
