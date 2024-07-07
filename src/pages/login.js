import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import axios from "axios";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      },
      {
        withCredentials: true // Asegúrate de que las credenciales se envíen con la solicitud
      }
    );

      console.log(response.data); // Puedes mostrar esto en un mensaje o redirigir a otra pantalla
      navigation.navigate("Home"); // Redirige a la pantalla de inicio después del login
    } catch (error) {
      console.error("Error de login:", error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#aaa"
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} color="#6200ee" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  card: {
    width: "50%",
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#6200ee",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#fafafa",
  },
  buttonContainer: {
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default Login;
