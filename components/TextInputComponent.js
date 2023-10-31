import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";
import React from "react";

const TextInputComponent = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <View
        style={{
          backgroundColor: "#eee",
          borderBottomColor: "#000000",
          borderBottomWidth: 1,
        }}
      >
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={(text) => onChangeText(text)}
          value={text}
          style={{ padding: 10 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
