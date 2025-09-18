import React from "react";
import { View, Image, Button, StyleSheet } from "react-native";

export default function ImageInternetScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_1280.jpg" }}
        style={styles.image}
      />
      <Button title="Voltar para Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" },
  image: { width: 300, height: 200, marginBottom: 20 }
});
