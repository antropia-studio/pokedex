import { Image, Text, View } from "react-native";

interface Props {
  id: string;
  imageUri: string;
  name: string;
}

export const PokemonCard = ({ id, imageUri, name }: Props) => {
  return (
    <View className="bg-grass w-2/5 rounded-xl justify-center items-center p-4">
      <Image height={100} source={{ uri: imageUri }} width={100} />

      <Text className="font-bold mt-4 mb-2">{name}</Text>
      <Text className="text-blue-950">{id}</Text>
    </View>
  );
};
