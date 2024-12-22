import { ImageBackground, StyleSheet } from "react-native";

export default function InGame({ navigation }) {
    return (
        <ImageBackground
            source={require("../assets/image/Background2.png")}
            style={styles.background}
        >

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
    },
})