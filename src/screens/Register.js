import { Button, SafeAreaView, StyleSheet } from "react-native";

export default function Register({navigation}) {

    const handleLogin = () => {
        navigation.replace('Login');
    }

    const handleRegister = () => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <Button title="Register" onPress={handleRegister}/>
            <Button title="Go to Login" onPress={handleLogin}/>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})