import { View, StyleSheet, Text, Button } from "react-native";
import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

// Set the key-value pairs for the different languages you want to support.
const translations = {
  en: { welcome: "Hello", name: "Charlie" },
  ["en-FI"]: { welcome: "Morjest", name: "Kaarle" },
  ja: { welcome: "こんにちは" },
};
const i18n = new I18n(translations);

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

// When a value is missing from a language it'll
// fallback to another language with the key present.
i18n.enableFallback = true;

export default function Translated() {
  return (
    <View style={styles.container}>
      <Text>
        {i18n.t("welcome")} {i18n.t("name")}
      </Text>
      <Text>Current locale: {i18n.locale}</Text>
      <Text>Device locale: {Localization.locale}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "white",
    borderWidth: 2,
    padding: 10,
    margin: 10,
    backgroundColor: "#49a",
    alignItems: "center",
    justifyContent: "center",
  },
});
