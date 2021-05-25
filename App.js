import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupScreen from './components/SignupScreen/SignupScreen';
import CreateAccountScreen from './components/CreateAccountScreen/CreateAccountScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen name="Signin" component={SignupScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Screens</Text>
//       <SignupScreen />
//       <CreateAccountScreen />
//       <HomeScreen />
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });