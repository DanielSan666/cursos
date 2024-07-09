import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "./src/pages/login";
import MenuPage from "./src/pages/menu";
import ProfilePage from "./src/pages/profile";
import SettingsPage from "./src/pages/settings";
import RegisterPage from "./src/pages/register";
import InformationPage from "./src/pages/information";
import DrawerNavigation from "./src/navigation/DrawerNavigation";
import LogoutButton from "./src/pages/logout";
import curso from "./src/pages/curso";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="information" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Information" component={InformationPage} />
        <Stack.Screen name="Home" component={DrawerNavigation} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={login}  />
        <Stack.Screen name="Menu" component={MenuPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="profile" component={ProfilePage} />
        <Stack.Screen name="settings" component={SettingsPage} />
        <Stack.Screen name="Logout" component={LogoutButton} />
        <Stack.Screen name="Curso" component={curso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
