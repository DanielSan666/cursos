import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './src/pages/login';
import home from './src/pages/home';
import MenuPage from './src/pages/menu';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Menu" component={MenuPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
