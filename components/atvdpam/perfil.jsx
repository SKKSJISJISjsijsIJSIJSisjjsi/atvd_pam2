import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Perfil({ name = "Nome do usuário", email = "email@exemplo.com" }) {
  const username = name.toLowerCase().replace(/\s+/g, "");

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.username}>@{username}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  username: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginBottom: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: "800",
    color: "#222",
  },
  infoContainer: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 14,
  },
  label: {
    color: "#444",
    fontWeight: "600",
    marginBottom: 4,
  },
  email: {
    color: "#111",
    fontSize: 16,
    fontWeight: "500",
  },
});