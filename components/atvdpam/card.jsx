import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export function card({ name, breed, age, image, adopted, onAdoptPress }) {
  return (
    <View style={[styles.cartao, adopted && styles.cartaoAdotado]}>
      <Image
        source={
          image
            ? { uri: image }
            : {
                uri: "https://placekitten.com/300/300",
              }
        }
        style={styles.imagem}
      />
      <View style={styles.informacao}>
        <Text style={styles.nome}>{name}</Text>
        <Text style={styles.detalhes}>{breed} • {age} anos</Text>
        <Pressable onPress={onAdoptPress} style={[styles.botao, adopted && styles.botaoAdotado]}>
          <Text style={styles.botaoTexto}>{adopted ? "Adotado" : "Adotar"}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    borderRadius: 14,
    backgroundColor: "#fdfdfd",
    marginVertical: 6,
    marginHorizontal: 4,
    width: "47%",
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    borderWidth: 1,
    borderColor: "#ededed",
  },
  cartaoAdotado: {
    opacity: 0.8,
  },
  imagem: {
    width: "100%",
    height: 150,
  },
  informacao: {
    padding: 10,
  },
  nome: {
    fontSize: 15,
    fontWeight: "700",
    color: "#223344",
  },
  detalhes: {
    marginTop: 2,
    color: "#666",
    fontSize: 13,
  },
  botao: {
    marginTop: 10,
    backgroundColor: "#6a9a76",
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  botaoAdotado: {
    backgroundColor: "#b8b8b8",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});