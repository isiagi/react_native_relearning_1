import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ActivityIndicatorComponent from "./components/ActivityIndicator";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ActivityIndicatorComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
