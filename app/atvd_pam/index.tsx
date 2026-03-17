import { Link } from "expo-router";
import React, { useMemo, useState } from "react";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { card as PetCard } from "../../components/atvdpam/card";
import PETS_DATA from "../../components/atvdpam/pets.json";

const CATEGORIES = [
  { key: "all", label: "Todos" },
  { key: "cat", label: "Gato" },
  { key: "dog", label: "Cachorro" },
];

export default function AtvDPAM() {
  const [pets, setPets] = useState(
    PETS_DATA.map((pet) => ({ ...pet, adopted: false, image: pet.type === "cat" ? "https://placekitten.com/400/400" : "https://place-puppy.com/400x400" }))
  );
  const [selectedCategory, setSelectedCategory] = useState("all");

  const adoptedCount = useMemo(
    () => pets.filter((pet) => pet.adopted).length,
    [pets]
  );

  const filteredPets = useMemo(() => {
    if (selectedCategory === "all") return pets;
    return pets.filter((pet) => pet.type === selectedCategory);
  }, [pets, selectedCategory]);

  const handleAdopt = (id: string) => {
    setPets((oldPets) =>
      oldPets.map((pet) =>
        pet.id === id ? { ...pet, adopted: !pet.adopted } : pet
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pet Adopt</Text>
      <Text style={styles.subtitulo}>{`Total adotados: ${adoptedCount}/${pets.length}`}</Text>

      <Link href="/atvd_pam/perfil" style={styles.linkPerfil}>
        Ver Perfil
      </Link>

      <ScrollView
        horizontal
        contentContainerStyle={styles.rolagemCategorias}
        showsHorizontalScrollIndicator={false}
      >
        {CATEGORIES.map((item) => (
          <Pressable
            key={item.key}
            onPress={() => setSelectedCategory(item.key)}
            style={[
              styles.botaoCategoria,
              selectedCategory === item.key && styles.botaoCategoriaAtivo,
            ]}
          >
            <Text
              style={[
                styles.textoCategoria,
                selectedCategory === item.key && styles.textoCategoriaAtivo,
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <FlatList
        data={filteredPets}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.coluna}
        renderItem={({ item }) => (
          <PetCard
            name={item.name}
            breed={`${item.breed} (${item.type})`}
            age={item.age}
            image={item.image}
            adopted={item.adopted}
            onAdoptPress={() => handleAdopt(item.id)}
          />
        )}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={() => (
          <Text style={styles.textoVazio}>Nenhum pet encontrado nessa categoria.</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 14,
    paddingHorizontal: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
    color: "#374151",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 8,
    color: "#6b7280",
  },
  rolagemCategorias: {
    paddingLeft: 6,
    paddingVertical: 8,
  },
  linkPerfil: {
    alignSelf: "center",
    color: "#1f5299",
    fontSize: 14,
    marginBottom: 12,
    textDecorationLine: "underline",
  },
  botaoCategoria: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
    marginRight: 8,
  },
  botaoCategoriaAtivo: {
    backgroundColor: "#1f5299",
  },
  textoCategoria: {
    color: "#333",
    fontWeight: "500",
  },
  textoCategoriaAtivo: {
    color: "#fff",
  },
  lista: {
    paddingBottom: 16,
  },
  coluna: {
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  textoVazio: {
    textAlign: "center",
    color: "#777",
    marginTop: 20,
    fontSize: 14,
  },
});