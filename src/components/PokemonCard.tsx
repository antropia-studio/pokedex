import { Pokemon } from "@app/models/pokemon";
import { Image, Text, View } from "react-native";

interface Props extends Pokemon {
  isSelected: boolean;
}

export const PokemonCard = ({ color, id, imageUri, isSelected, name }: Props) => {
  return (
    <View
      className="rounded-xl justify-center items-center p-4"
      style={{
        backgroundColor: isSelected ? "#FFF1A2" : color,
        borderColor: isSelected ? "#AAA172" : color,
        borderWidth: 1,
      }}
    >
      <Image height={100} source={{ uri: imageUri }} width={100} />

      <Text className="font-bold mt-4 mb-2">{name}</Text>
      <Text className="text-blue-950">{id}</Text>
    </View>
  );
};
