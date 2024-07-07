// navigation/DrawerNavigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../pages/home'; // Actualiza la ruta según sea necesario
import ProfilePage from '../pages/profile'; // Actualiza la ruta según sea necesario
import SettingsPage from '../pages/settings'; // Actualiza la ruta según sea necesario
import LogoutButton from '../pages/logout';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Profile" component={ProfilePage} />
      <Drawer.Screen name="Settings" component={SettingsPage} />
      <Drawer.Screen name="Logout" component={LogoutButton} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
