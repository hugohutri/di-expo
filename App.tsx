import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Translated from "./src/Translated";
import DeviceInfo from "./src/DeviceInfo";
import NetworkInfo from "./src/NetworkInfo";
import Providers from "./src/Providers";
import { initMessages } from "./src/i18n";

export default function App() {
  const [ready, setReady] = React.useState(false);

  useEffect(() => {
    async function init() {
      setReady(false);
      await initMessages();
      setReady(true);
    }

    init();
  }, []);

  if (!ready) return null;

  return (
    <Providers>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Translated />
        <DeviceInfo />
        <NetworkInfo />
        <StatusBar style="auto" />
      </View>
    </Providers>
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
