import React, { useEffect } from "react";
import { View, Text } from "react-native";
import * as Device from "expo-device";
import Constants from "expo-constants";
import { DeviceType } from "expo-device";

export default function DeviceInfo() {
  const [deviceType, setDeviceType] = React.useState<DeviceType>();

  useEffect(() => {
    Device.getDeviceTypeAsync().then(setDeviceType);
  });

  return (
    <View>
      <Text>Device Info</Text>
      <Text>Version: {Constants.manifest?.version}</Text>
      <Text>Brand: {Device.brand}</Text>
      <Text>Model: {Device.modelName}</Text>
      <Text>{`IsTablet: ${deviceType === Device.DeviceType.TABLET}`}</Text>
    </View>
  );
}
