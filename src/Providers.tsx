import type { ReactNode } from "react";
import { View } from "react-native";
import { I18nProvider } from "./i18n";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <View style={{ flex: 1 }}>
      <I18nProvider>{children}</I18nProvider>
    </View>
  );
}
