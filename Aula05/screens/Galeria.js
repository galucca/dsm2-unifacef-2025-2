
import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Galeria() {
  return (
    <View style={styles.container}>
      <Ionicons name="camera" size={50} color="purple" style={styles.icone} />
      <Text style={styles.titulo}>Minha Galeria</Text>
      <Text style={styles.subtitulo}>Momentos capturados</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        <Image 
          source={{ uri: "https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_1280.jpg" }} 
          style={styles.imagem} 
        />
        <Image 
          source={{ uri: "https://www.istockphoto.com/br/foto/mulher-olhando-a-vista-de-uma-caverna-de-matera-basilicata-itália-gm1040315976-278502635" }} 
          style={styles.imagem} 
        />
        <Image 
          source={{ uri: "https://www.istockphoto.com/br/foto/templo-de-reflexo-gm480556950-68802047" }} 
          style={styles.imagem} 
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#f9f9f9"
  },
  titulo: { 
    fontSize: 26, 
    fontWeight: "bold", 
    marginBottom: 5 
  },
  subtitulo: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20
  },
  icone: { 
    marginBottom: 10 
  },
  scroll: {
    paddingHorizontal: 10
  },
  imagem: { 
    width: 150, 
    height: 150, 
    borderRadius: 12,
    marginRight: 15,
  }
});
