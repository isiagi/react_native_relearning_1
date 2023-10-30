import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ButtonComponent from "./components/Button";
import FlatListComponent from "./components/FlatListComponent";
import ImageComponent from "./components/Image";
import ImageBackgroundComponent from "./components/ImageBackgroundComponent";
import KeyboardAvoidingComponent from "./components/KeyboardAvoidingComponent";

export default function App() {
  return <KeyboardAvoidingComponent />;
}

const styles = StyleSheet.create({});
