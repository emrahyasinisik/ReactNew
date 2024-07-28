import {Stack} from "expo-router";
import { StatusBar } from 'expo-status-bar';
export default function RootLayout() {
  return (
    <>
    <StatusBar style="light" backgroundColor="black"/>
    <StatusBar style="dark"  backgroundColor="black"/>
    <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />

  </Stack>
  </>
  );
}
