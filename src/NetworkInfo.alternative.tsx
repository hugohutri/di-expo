import React from "react";
import { Text, View } from "react-native";
import Network from "expo-network";

export default function NetworkInfo() {
  const [networkInfo, setNetworkInfo] = React.useState<Network.NetworkState>();

  React.useEffect(() => {
    Network.getNetworkStateAsync().then(setNetworkInfo);
  });

  return (
    <View>
      <Text>Network Info</Text>
      <Text>{`IsConnected: ${networkInfo?.isConnected}`}</Text>
      <Text>{`IsInternetReachable: ${networkInfo?.isInternetReachable}`}</Text>
      <Text>{`Type: ${networkInfo?.type}`}</Text>
    </View>
  );
}
