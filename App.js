import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ButtonComponent from "./components/Button";
import FlatListComponent from "./components/FlatListComponent";
import ImageComponent from "./components/Image";
import ImageBackgroundComponent from "./components/ImageBackgroundComponent";
import KeyboardAvoidingComponent from "./components/KeyboardAvoidingComponent";
import ModalComponent from "./components/ModalComponent";
import RefreshControlComponent from "./components/RefreshControlComponent";

export default function App() {
  return <RefreshControlComponent />;
}

const styles = StyleSheet.create({});
