import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";

const ImageBackgroundComponent = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: "https://images.unsplash.com/photo-1698256729453-98e6059ada7a?auto=format&fit=crop&q=80&w=387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      >
        <Text>Inside</Text>
      </ImageBackground>
    </View>
  );
};

export default ImageBackgroundComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
