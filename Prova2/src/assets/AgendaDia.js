import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

export default function AgendaDia({ navigation }) {

  const compromissosHoje = [
    { id: '1', titulo: 'Reunião de alinhamento', horario: '09:00' },
    { id: '2', titulo: 'Atendimento Cliente João', horario: '14:00' },
    { id: '3', titulo: 'Entrega de relatório', horario: '17:00' },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Agenda do Dia</Text>

      <FlatList
        data={compromissosHoje}
        keyExtractor={(item) => item.id}
        style={{ marginBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.itemTitulo}>{item.titulo}</Text>
            <Text style={styles.itemHorario}>{item.horario}</Text>
          </View>
        )}
      />

      <Text style={styles.nomeTurma}>Gabriel De Freitas Lucca - Sistemas De Informação</Text>

      <Button
        title="Meus Compromissos"
        onPress={() => navigation.navigate("Meus Compromissos")}
      />

      <View style={{ height: 15 }} />

      <Button
        title="Compromissos da Equipe"
        onPress={() => navigation.navigate("Equipe")}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 26, fontWeight: 'bold', marginBottom: 15 },
  card: {
    backgroundColor: '#ececec',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  itemTitulo: { fontSize: 18, fontWeight: 'bold' },
  itemHorario: { color: '#555' },
  nomeTurma: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
  }
});
