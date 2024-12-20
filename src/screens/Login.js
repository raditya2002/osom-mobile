import { Text } from "react-native";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function Login({navigation}) {
    const { login: setLoginState } = useAuth();

    const handleRegister = () => {
        navigation.navigate('Register');
    }

    const handleLogin = () => {
        setLoginState('DummyToken');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Ini Login</Text>
            <Button title="Go to Register" onPress={handleRegister} style={styles.textButton}/>
            <Button title="Go to Dashboard" onPress={handleLogin} style={styles.textButton}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 20,
        color: 'black'
    }
})