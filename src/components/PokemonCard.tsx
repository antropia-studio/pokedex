import { Pokemon } from "@app/models/pokemon";
import { Image, Text, View } from "react-native";

type Props = Pokemon;

export const PokemonCard = ({ color, id, imageUri, name }: Props) => {
  return (
    <View
      className="rounded-xl justify-center items-center p-4"
      style={{
        backgroundColor: color,
        borderColor: color,
        borderWidth: 1,
      }}
    >
      <Image height={100} source={{ uri: imageUri }} width={100} />

      <Text className="font-bold mt-4 mb-2">{name}</Text>
      <Text className="text-blue-950">{id}</Text>
    </View>
  );
};
