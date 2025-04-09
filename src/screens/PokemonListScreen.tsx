import { PokemonCard } from "@app/components/PokemonCard";
import { Pokemon } from "@app/models/pokemon";
import { NavigationParamList } from "@app/routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlashList } from "@shopify/flash-list";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const POKEMON: Pokemon[] = [
  {
    color: "#B7E5B8",
    id: "001",
    imageUri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    name: "Bulbasaur",
  },
  {
    color: "#B7E5B8",
    id: "002",
    imageUri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    name: "Ivysaur",
  },
  {
    color: "#B7E5B8",
    id: "003",
    imageUri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    name: "Venusaur",
  },
  {
    color: "#E5B7B8",
    id: "004",
    imageUri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    name: "Charmander",
  },
  {
    color: "#E5B7B8",
    id: "005",
    imageUri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    name: "Charmeleon",
  },
  {
    color: "#E5B7B8",
    id: "006",
    imageUri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    name: "Charizard",
  },
  {
    color: "#B8B7E7",
    id: "007",
    imageUri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    name: "Squirtle",
  },
  {
    color: "#B8B7E7",
    id: "008",
    imageUri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    name: "Wartortle",
  },
  {
    color: "#B8B7E7",
    id: "009",
    imageUri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    name: "Blastoise",
  },
];

// eslint-disable-next-line no-empty-pattern
export const PokemonListScreen = ({}: NativeStackScreenProps<NavigationParamList, "pokemonList">) => {
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
          estimatedItemSize={211}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity className="flex-1 items-center pb-10" onPress={() => {}}>
              <PokemonCard {...item} />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
