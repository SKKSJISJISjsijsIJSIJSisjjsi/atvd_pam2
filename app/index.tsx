import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pet Adopt</Text>
      <Text style={styles.subtitle}>Escolha um pet para adotar.</Text>
      <Link href="/atvd_pam" style={styles.link}>
        Abrir Pet Adopt
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
    marginBottom: 6,
  },
  subtitle: {
    marginBottom: 16,
    textAlign: "center",
    color: "#444",
  },
  link: {
    color: "#000",
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});
