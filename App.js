import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './src/pages/login';
import home from './src/pages/home';
import MenuPage from './src/pages/menu';
import ProfilePage from './src/pages/profile';
import SettingsPage from './src/pages/settings';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Menu" component={MenuPage} />
        <Stack.Screen name='profile' component={ProfilePage} />
        <Stack.Screen name='settings' component={SettingsPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
