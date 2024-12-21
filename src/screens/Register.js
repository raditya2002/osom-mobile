import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
  Button,
  Text,
  TextInput,
} from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    navigation.replace("Login");
  };

  const handleRegister = () => {};

  const [fontsLoaded] = useFonts({
    CherryBombOne: require("../assets/font/CherryBombOne-Regular.ttf"),
    MontserratReg: require("../assets/font/Montserrat-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require("../assets/image/Background.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>OSOM!</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            textContentType="password"
            onChangeText={(text) => setPassword(text)}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
          />
          {/* <Icon name="mail" size={20} color="#4CAF50" style={styles.icon} /> */}
          <TouchableOpacity style={styles.buttonLogin} onPress={handleRegister}>
            <Text style={styles.textButton}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.link}>
              Alredy have account? <Text style={styles.linkTo}> Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  buttonLogin: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#F8E51E",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "80%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
    fontFamily: "CherryBombOne",
  },
  textButton: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    fontFamily: "MontserratReg",
  },
  link: {
    marginTop: 10,
    color: "white",
    textAlign: "center",
    fontFamily: "MontserratReg",
  },
  linkTo: {
    marginTop: 10,
    color: "blue",
    textAlign: "center",
    textDecorationLine: "underline",
    fontFamily: "MontserratReg",
  },
  input: {
    width: "100%",
    height: 45,
    paddingLeft: 20,
    marginBottom: 20,
    backgroundColor: "#f4f4f4",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    color: "#333",
  },
});
