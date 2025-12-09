import { View, Text, SectionList, StyleSheet } from "react-native";

export default function SemanaScreen() {
    
  const dados = [
    {
      title: "Segunda-feira (10/11)",
      data: ["08:00 Dentista", "19:00 Pilates"]
    },
    {
      title: "Terça-feira (11/11)",
      data: ["08:00 Médico", "10:30 Reunião de planejamento", "15:00 Saída viagem"]
    },
    {
      title: "Quarta-feira (12/11)",
      data: ["09:00 Congresso", "12:00 Almoço com executivos", "20:30 Jantar de confraternização"]
    }
  ];

  return (
    <View style={styles.container}>
        <Text style={styles.nome}>Gabriel De Freitas Lucca</Text>
        <Text style={styles.turma}>Sistemas de Informação</Text>

      <SectionList
        sections={dados}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  
  nome: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 2
  },

  turma: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20
  },

  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    backgroundColor: "#eee",
    padding: 6,
    textAlign: "center"     // CENTRALIZADO AQUI!
  },

  item: {
    fontSize: 16,
    paddingVertical: 4,
    paddingLeft: 10
  }
});
