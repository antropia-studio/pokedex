import { PokemonCard } from "@app/components/PokemonCard";
import { FlashList } from "@shopify/flash-list";
import { Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

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
  {
    id: "004",
    imageUri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    name: "Charmander",
  },
  {
    id: "005",
    imageUri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    name: "Charmeleon",
  },
  {
    id: "006",
    imageUri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    name: "Charizard",
  },
];

export const PokemonListScreen = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1" edges={["top", "right", "left"]}>
      <View className="flex-1 flex-col px-6">
        <Text className="text-6xl font-black py-4">Pokedex</Text>
        <Text className="text-lg">
          Explore the complete world of Pokémon at your fingertips. Browse through hundreds of Pokémon, discover their
          unique attributes, and become the ultimate Pokémon expert. Tap on any Pokémon to reveal detailed information
          and start your journey!
        </Text>

        <FlashList
          className="pt-10"
          contentContainerStyle={{ paddingBottom: bottom }}
          data={POKEMON}
          numColumns={2}
          renderItem={({ item }) => (
            <View className="flex-1 items-center pb-10">
              <PokemonCard {...item} />
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
