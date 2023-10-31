import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ButtonComponent from "./components/Button";
import FlatListComponent from "./components/FlatListComponent";
import ImageComponent from "./components/Image";
import ImageBackgroundComponent from "./components/ImageBackgroundComponent";
import KeyboardAvoidingComponent from "./components/KeyboardAvoidingComponent";
import ModalComponent from "./components/ModalComponent";
import RefreshControlComponent from "./components/RefreshControlComponent";
import ScrollViewComponent from "./components/ScrollViewComponent";
import SectionListComponent from "./components/SectionListComponent";
import StatusBarComponent from "./components/StatusBarComponent";
import SwitchComponent from "./components/SwitchComponent";
import TextInputComponent from "./components/TextInputComponent";
import TouchableHighlightExample from "./components/TouchableHighlightExample";
import TouchableOpacityExample from "./components/TouchableOpacityExample";
import TouchableWithoutFeedbackExample from "./components/TouchableWithoutFeedback";
import VirtualizedListComponent from "./components/VirtualizedListComponent";

export default function App() {
  return <VirtualizedListComponent />;
}

const styles = StyleSheet.create({});
