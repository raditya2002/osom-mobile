import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function Dashboard({ navigation }) {
  const { logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Ini Dashboard</Text>
      <Button title="Logout" onPress={logout} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
