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

type DescriptionItem = { description: string; type: "description" };
type FlashListItem = DescriptionItem | PokemonItem;
type PokemonItem = { pokemon: Pokemon; type: "pokemon" };

export const PokemonListScreen = () => {
  const { bottom } = useSafeAreaInsets();

  const items: FlashListItem[] = [
    {
      description: `Explore the complete world of Pokémon at your fingertips. Browse through hundreds of Pokémon, discover their unique attributes, and become the ultimate Pokémon expert. Tap on any Pokémon to reveal detailed information and start your journey!`,
      type: "description",
    },
    ...POKEMON.map((pokemon) => ({ pokemon, type: "pokemon" as const })),
  ];

  return (
    <SafeAreaView className="flex-1" edges={["top", "right", "left"]}>
      <View className="flex-1 flex-col px-6">
        <Text className="text-6xl font-black py-4">Pokedex</Text>

        <FlashList
          className="pt-2"
          contentContainerStyle={{ paddingBottom: bottom }}
          data={items}
          numColumns={2}
          overrideItemLayout={(layout, item) => {
            if (item.type === "description") {
              layout.span = 2;
            }
          }}
          renderItem={({ item }) => {
            switch (item.type) {
              case "description":
                return (
                  <Text className="text-lg pt-6 pb-10">
                    Explore the complete world of Pokémon at your fingertips. Browse through hundreds of Pokémon,
                    discover their unique attributes, and become the ultimate Pokémon expert. Tap on any Pokémon to
                    reveal detailed information and start your journey!
                  </Text>
                );
              case "pokemon":
                return (
                  <View className="flex-1 items-center pb-10">
                    <PokemonCard {...item.pokemon} />
                  </View>
                );
            }
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
