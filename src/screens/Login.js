import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
  TextInput,
  Text,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useFonts } from "expo-font";
// import { Icon } from "react-native-vector-icons/Icon";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login: setLoginState } = useAuth();

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleLogin = () => {
    setLoginState("DummyToken");
  };

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
            placeholder="Username atau Email"
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
          <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.link}>
              Dont't have an account?{" "}
              <Text style={styles.linkTo}>Register</Text>
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
