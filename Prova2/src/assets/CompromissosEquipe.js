import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function CompromissosEquipe() {

  const equipe = [
    { id: '1', nome: 'Gabriel', compromisso: 'Visita técnica', horario: '10:00' },
    { id: '2', nome: 'Marcos', compromisso: 'Reunião comercial', horario: '11:30' },
    { id: '3', nome: 'Julia', compromisso: 'Suporte ao cliente', horario: '15:00' },
    { id: '4', nome: 'Paula', compromisso: 'Auditoria', horario: '16:00' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Compromissos da Equipe</Text>

      <FlatList
        data={equipe}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.compromisso}</Text>
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
    backgroundColor: '#dcdcdc',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  nome: { fontSize: 18, fontWeight: 'bold' },
  horario: { color: '#555' }
});
