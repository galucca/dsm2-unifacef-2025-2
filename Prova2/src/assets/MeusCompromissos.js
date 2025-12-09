import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function MeusCompromissos() {

  const meus = [
    { id: '1', titulo: 'Treino', horario: '07:00' },
    { id: '2', titulo: 'Faculdade', horario: '19:00' },
    { id: '3', titulo: 'Projeto TIC', horario: '13:00' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Compromissos</Text>

      <FlatList
        data={meus}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.titulo}</Text>
            <Text style={styles.horario}>{item.horario}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  nome: { fontSize: 18, fontWeight: 'bold' },
  horario: { color: '#555' }
});
