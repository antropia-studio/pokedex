import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const PokemonListScreen = () => {
  return (
    <SafeAreaView className="flex-1" edges={["top", "right", "left"]}>
      <View className="flex-1 flex-col px-6">
        <Text className="text-6xl font-black py-4">Pokedex</Text>
        <Text className="text-lg">
          Explore the complete world of Pokémon at your fingertips. Browse through hundreds of Pokémon, discover their
          unique attributes, and become the ultimate Pokémon expert. Tap on any Pokémon to reveal detailed information
          and start your journey!
        </Text>

        <View className="bg-grass w-2/5 rounded-xl justify-center items-center p-4 mt-6">
          <Image
            height={100}
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            }}
            width={100}
          />

          <Text className="font-bold mt-4 mb-2">Bulbasaur</Text>
          <Text className="text-blue-950">001</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
