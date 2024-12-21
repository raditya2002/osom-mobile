import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { useFonts } from "expo-font";

const CustomButton = ({
    onPress,
    bgColor,
    textColor,
    title
}) => {

    const [fontsLoaded] = useFonts({
        CherryBombOne: require("../assets/font/CherryBombOne-Regular.ttf"),
        MontserratReg: require("../assets/font/Montserrat-Regular.ttf"),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <TouchableOpacity style={[styles.buttonLogin, {backgroundColor: bgColor}]} onPress={onPress}>
            <Text style={[styles.textButton, {color: textColor}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonLogin: {
        width: "100%",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "MontserratReg",
    },
})

export default CustomButton;