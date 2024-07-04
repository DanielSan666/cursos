import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
        color="#6200ee"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6200ee",
  },
});

export default HomePage;
