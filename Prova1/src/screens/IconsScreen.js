
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconsScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={50} color="red" />
      <Ionicons name="star" size={50} color="green" />
      <Ionicons name="heart" size={50} color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
