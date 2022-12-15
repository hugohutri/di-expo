import { View, StyleSheet, Text, Button } from "react-native";
import React from "react";
import { t, Trans } from "@lingui/macro";
import { useI18n } from "./i18n";

export default function Translated() {
  const { toggleLocale } = useI18n();

  return (
    <View style={styles.container}>
      <Text>
        <Trans>Welcome</Trans>
      </Text>
      <Button onPress={toggleLocale} title={t`Toggle locale`} />
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
