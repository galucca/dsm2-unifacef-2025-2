import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda</Text>

      <Text style={styles.nome}>Gabriel De Freitas Lucca</Text>  
      <Text style={styles.turma}>Sistemas De Informação</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Dia")}
      >
        <Text style={styles.textoBotao}>COMPROMISSOS DO DIA</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Semana")}
      >
        <Text style={styles.textoBotao}>COMPROMISSOS DA SEMANA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
  backgroundColor: "#fff"   // <-- fundo branco

  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40
  },
  nome: {
    fontSize: 18
  },
  turma: {
    fontSize: 16,
    marginBottom: 40
  },
  botao: {
    width: "80%",
    backgroundColor: "#ddd",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: "bold"
  }
});