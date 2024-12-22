import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/Ionicons";

export default function Dashboard({ navigation }) {
  const { logout } = useAuth();

  const [fontsLoaded] = useFonts({
    CherryBombOne: require("../assets/font/CherryBombOne-Regular.ttf"),
    MontserratReg: require("../assets/font/Montserrat-Regular.ttf"),
    LeagueSpartan: require("../assets/font/LeagueSpartan-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require("../assets/image/Background2.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style>
          <View style={styles.logoutButton}>
            <TouchableOpacity
              style={{
                marginBottom: -6,
              }}
            >
              <Icon name="log-out-outline" size={45} />
            </TouchableOpacity>
            <Text style={{ fontFamily: "LeagueSpartan" }}>Logout</Text>
          </View>
          <View>
            <Text style={styles.textStart}>Hi, User!</Text>
            <Text style={styles.textEnd}>
              Welcome to game application OSOM!
            </Text>
          </View>
          <ScrollView>
            <View style={styles.textBoxParagraph}>
              <Text style={styles.textStartParagraph}>Game Rules:</Text>
              <Text style={styles.textParagraph}>
                1. Players will get 5 playing tokens and are asked to choose one
                of three options, which are shown by the hand sign on the screen
                in the shapes of rock, paper, and scissors.
              </Text>
              <Text style={styles.textParagraph}>
                2. Players are given 5 seconds to make a decision.
              </Text>
              <Text style={styles.textParagraph}>
                3. After the player chooses, the screen will show the result of
                both player and robots choices.
              </Text>
              <Text style={styles.textParagraph}>
                4. If the player wins, the player will get +100 points.
              </Text>
              <Text style={styles.textParagraph}>
                5. If the player win streak 3x, the points will be multiplied by
                2.
              </Text>
              <Text style={styles.textParagraph}>
                6. If the player win streak 5x, the points will be multiplied by
                5 and +1 playing token.
              </Text>
              <Text style={styles.textParagraph}>
                7. If the player win streak 10x and so on, the points will be
                multiplied by 10.
              </Text>
              <Text style={styles.textParagraph}>
                8. If the player loses, the player’s playing token will decrease
                -1 point.
              </Text>
            </View>
          </ScrollView>
          <View style={styles.playButton}>
            <TouchableOpacity>
              <Text style={styles.playText}>Start Playing!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  textStart: {
    fontFamily: "CherryBombOne",
    fontSize: 40,
    textShadowColor: "#828282", // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Offset in x and y direction
    textShadowRadius: 10, // Blur radius for the shadow
  },
  textEnd: {
    fontFamily: "LeagueSpartan",
    fontSize: 20,
    marginBottom: 20,
  },
  textBoxParagraph: {
    backgroundColor: "white",
    justifyContent: "center",
    padding: 8,
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  textStartParagraph: {
    textAlign: "center",
    fontFamily: "CherryBombOne",
    fontSize: 20,
  },
  textParagraph: {
    fontFamily: "LeagueSpartan",
    fontSize: 16,
  },
  logoutButton: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  playButton: {
    backgroundColor: "#F8E51E",
    padding: 12,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  playText: {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: 500,
  },
});
