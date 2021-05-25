import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupScreen from './components/SignupScreen/SignupScreen';
import CreateAccountScreen from './components/CreateAccountScreen/CreateAccountScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Screens</Text>
      <SignupScreen />
      <CreateAccountScreen />
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}
// export default function App() {
//   return (
//     <NavigationContainer>

//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
