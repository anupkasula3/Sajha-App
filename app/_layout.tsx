import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import Splash from './index';
import Login from '@/screens/Login';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    

<Stack>
<Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
<Stack.Screen name="+not-found" />
<Stack.Screen
        name="login/index"        // Login screen
        options={{ title: 'Login', headerShown: false }}
      />

<Stack.Screen
        name="[missing]"      
        options={{ title: '404', headerShown: true }}
      />
<Stack.Screen
        name="(drawer)"        
        options={{headerShown: false }}
      />

</Stack>
  );
}
