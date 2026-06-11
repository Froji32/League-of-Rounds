import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

import { champions } from "../data/Champions";

export default function ChampionRandom({ navigation }) {
  const getRandomChampion = () => {
    return champions[
      Math.floor(Math.random() * champions.length)
    ];
  };

  const [champion, setChampion] = useState(
    getRandomChampion()
  );

  const rollChampion = () => {
    setChampion(getRandomChampion());
  };

  return (
    <ImageBackground
      source={require("../Assets/Background/BackgroundPrincipal.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          
          {/* CAMPEÃO */}
          <View style={styles.header}>
            <Text style={styles.championName}>
              {champion.name}
            </Text>

            <Image
              source={champion.image}
              style={styles.championImage}
              resizeMode="contain"
            />
          </View>

          {/* BOTÕES */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={rollChampion}
            >
              <Text style={styles.buttonText}>
                Tentar a Sorte
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate("Home")
              }
            >
              <Text style={styles.buttonText}>
                Voltar
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "92%",
    height: "58.10%",
    backgroundColor: "rgba(0,0,0,0.45)",
    borderRadius: 25,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },

  header: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },

  championName: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  championImage: {
    width: 200,
    height: 200,
  },

  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },

  button: {
    width: "80%",
    height: 45,
    backgroundColor: "#555",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});