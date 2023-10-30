import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ImageComponent = () => {
  return (
    <View>
      <Image
        style={styles.stretch}
        source={{
          uri: "https://images.unsplash.com/photo-1698256729453-98e6059ada7a?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  stretch: {
    width: 400,
    height: 400,
    resizeMode: "stretch",
  },
});
