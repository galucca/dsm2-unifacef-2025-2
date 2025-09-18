import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gabriel De Freitas Lucca</Text>
      <Button title="Ir para Imagem da Internet" onPress={() => navigation.navigate("Internet")} />
      <Button title="Ir para Imagem Local" onPress={() => navigation.navigate("Local")} />
      <Button title="Ir para Ícones" onPress={() => navigation.navigate("Icons")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 22, marginBottom: 20, fontWeight: "bold" }
});
