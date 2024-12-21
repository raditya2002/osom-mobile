import { StyleSheet, TextInput } from "react-native"

const TextInputAuth = ({
    placeholder,
    value,
    textContentType,
    autoCorrect,
    autoCapitalize,
    secureTextEntry = false,
    onChangeText,
    keyboardType = 'default'
}) => {
    return (
        <TextInput style={styles.input}
            placeholder={placeholder}
            value={value}
            textContentType={textContentType}
            autoCorrect={autoCorrect}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
        />
    )
}

const styles = StyleSheet.create({
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
      }
})

export default TextInputAuth;