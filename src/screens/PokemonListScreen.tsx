import { PokemonCard } from "@app/components/PokemonCard";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Pokemon {
  id: string;
  imageUri: string;
  name: string;
}

const POKEMON: Pokemon[] = [
  {
    id: "001",
    imageUri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    name: "Bulbasaur",
  },
  {
    id: "002",
    imageUri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    name: "Ivysaur",
  },
  {
    id: "003",
    imageUri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    name: "Venusaur",
  },
];

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

        <View className="flex flex-wrap flex-row justify-between gap-y-6 mt-6">
          {POKEMON.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};
