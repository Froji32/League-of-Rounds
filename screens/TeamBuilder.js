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
import lanes from "../data/Role";

export default function TeamBuilder({ navigation }) {
  const [team, setTeam] = useState({});

  const getChampionByRole = (role, usedChampions) => {
    const available = champions.filter(
      (champion) =>
        champion.lane &&
        champion.lane.includes(role) &&
        !usedChampions.includes(champion.name)
    );

    return available[
      Math.floor(Math.random() * available.length)
    ];
  };

  const generateTeam = () => {
    const used = [];

    const top = getChampionByRole(lanes.Top, used);
    if (top) used.push(top.name);

    const jungle = getChampionByRole(
      lanes.Jungle,
      used
    );
    if (jungle) used.push(jungle.name);

    const mid = getChampionByRole(
      lanes.Mid,
      used
    );
    if (mid) used.push(mid.name);

    const adc = getChampionByRole(
      lanes.ADC,
      used
    );
    if (adc) used.push(adc.name);

    const support = getChampionByRole(
      lanes.Support,
      used
    );
    if (support) used.push(support.name);

    setTeam({
      top,
      jungle,
      mid,
      adc,
      support,
    });
  };

  const RoleRow = ({ champion, label }) => (
    <View style={styles.playerRow}>
      {champion?.image ? (
        <Image
          source={champion.image}
          style={styles.playerImage}
        />
      ) : (
        <View style={styles.emptyProfile} />
      )}

      <Text style={styles.playerText}>
        {champion?.name || label}
      </Text>
    </View>
  );

  return (
    <ImageBackground
      source={require("../Assets/Background/BackgroundComp.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.playersContainer}>
            <RoleRow
              champion={team.top}
              label="Top"
            />

            <RoleRow
              champion={team.jungle}
              label="Jungle"
            />

            <RoleRow
              champion={team.mid}
              label="Mid"
            />

            <RoleRow
              champion={team.adc}
              label="ADC"
            />

            <RoleRow
              champion={team.support}
              label="Support"
            />
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={generateTeam}
            >
              <Text style={styles.buttonText}>
                Formar Comp.
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
    width: "88%",
    height: "74.50%",
    backgroundColor: "rgba(0,0,0,0.35)",
    borderRadius: 25,
    paddingVertical: 25,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },

  playersContainer: {
    marginTop: 10,
  },

  playerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  emptyProfile: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "#444",
    marginRight: 15,
  },

  playerImage: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    marginRight: 15,
  },

  playerText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },

  buttonsContainer: {
    alignItems: "center",
  },

  button: {
    width: "85%",
    height: 45,
    backgroundColor: "#5A5A5A",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});