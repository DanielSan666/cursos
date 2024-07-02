import React from 'react';
import { View, Text, Button } from 'react-native';

function HomePage({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

export default HomePage;
