<<<<<<< HEAD
<<<<<<< HEAD
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
=======
=======
>>>>>>> d36f114 (Added frontend pages)
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
<<<<<<< HEAD
>>>>>>> 5b90ce21fc5875f4e9fd64f103faebaadd4c5837
=======
>>>>>>> d36f114 (Added frontend pages)
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
=======
=======
>>>>>>> d36f114 (Added frontend pages)
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
<<<<<<< HEAD
>>>>>>> 5b90ce21fc5875f4e9fd64f103faebaadd4c5837
=======
>>>>>>> d36f114 (Added frontend pages)
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
<<<<<<< HEAD
=======

>>>>>>> d36f114 (Added frontend pages)
