import { View, Text, Button, Alert } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <View>
      <Text>Button</Text>
      <Button title="Hello World" onPress={() => Alert.alert("clicked")} />
    </View>
  );
};

export default ButtonComponent;
