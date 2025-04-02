import { Text, View } from "react-native";
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

        <View className="bg-gray-300 flex-1 mt-10" />
      </View>
    </SafeAreaView>
  );
};
