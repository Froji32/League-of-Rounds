import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Banner */}
      <Image
        source={require("../Assets/Background/Banner.jpg")}
        style={styles.banner}
        resizeMode="cover"
      />

      <Text style={styles.title}>LEAGUE OF ROUNDS</Text>

      <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate("ChampionRandom")}
>

  <Text style={styles.buttonText}>
    Campeão Aleatório
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate("TeamBuilder")}
>

  <Text style={styles.buttonText}>
    Formar Time
  </Text>

</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b0b",
    alignItems: "center",
  },

  banner: {
    width: "100%",
    height: 180,
  },

  title: {
    color: "#B8860B",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 50,
  },

  button: {
    width: "75%",
    height: 70,
    backgroundColor: "#222",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});