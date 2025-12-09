import { View, Text, FlatList, StyleSheet } from "react-native";

export default function DiaScreen() {
  const dados = [
    { id: "1", hora: "08:00", descricao: "Médico" },
    { id: "2", hora: "10:30", descricao: "Reunião de planejamento" },
    { id: "3", hora: "15:00", descricao: "Saída viagem" }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.data}>11/11 (ter)</Text>
      <Text style={styles.nome}>Gabriel De Freitas Lucca</Text>
      <Text style={styles.turma}>Sistemas De Informação</Text>

      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.hora}  {item.descricao}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  data: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 10,
    textAlign: "center"
  },
  nome: { 
    fontSize: 16,
    textAlign: "center"
  },
  turma: { 
    fontSize: 16, 
    marginBottom: 20,
    textAlign: "center"
  },
  item: {
    fontSize: 16,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: "#eee"
  }
});

