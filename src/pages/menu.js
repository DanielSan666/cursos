import React from 'react';
import { View, Text, } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import home from './home'
import ProfilePage from './profile';
import SettingsPage from './settings';

const Drawer = createDrawerNavigator();

function MenuPage() {
  return (
    <Drawer.Navigator initialRouteName="Menu">
      <Drawer.Screen name="Home" component={home} />
      <Drawer.Screen name="Profile" component={ProfilePage} />
      <Drawer.Screen name="Settings" component={SettingsPage} />
    </Drawer.Navigator>
  );
}

export default MenuPage;
