import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function ImageLocalScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logofacef.png")} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: 300, height: 300 }
});
