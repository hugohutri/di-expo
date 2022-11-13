import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Translated from "./src/Translated";
import DeviceInfo from "./src/DeviceInfo";
import NetworkInfo from "./src/NetworkInfo";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Translated />
      <DeviceInfo />
      <NetworkInfo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#49a",
    alignItems: "center",
    justifyContent: "center",
  },
});
