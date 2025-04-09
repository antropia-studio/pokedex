import { PokemonCard } from "@app/components/PokemonCard";
import { NavigationParamList } from "@app/routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlashList } from "@shopify/flash-list";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

interface ApiPokemon {
  results: { url: string }[];
}

export const PokemonListScreen = ({ navigation }: NativeStackScreenProps<NavigationParamList, "pokemonList">) => {
  const { bottom } = useSafeAreaInsets();

  const { data, isPending } = useQuery({
    queryFn: async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const responseJson: ApiPokemon = await response.json();

      const promises = await Promise.all(
        responseJson.results.map((result) => fetch(result.url).then((response) => response.json()))
      );

      return promises.map((pokemon) => ({
        ...pokemon,
        color: "#B7E5B8",
        imageUri: pokemon.sprites.other["official-artwork"]["front_default"],
      }));
    },
    queryKey: ["pokemon"],
  });

  return (
    <SafeAreaView className="flex-1" edges={["top", "right", "left"]}>
      <View className="flex-1 flex-col px-6">
        <Text className="text-6xl font-black py-4">Pokedex</Text>
        <Text className="text-lg">
          Explore the complete world of Pokémon at your fingertips. Browse through hundreds of Pokémon, discover their
          unique attributes, and become the ultimate Pokémon expert. Tap on any Pokémon to reveal detailed information
          and start your journey!
        </Text>

        {isPending ? (
          <View className="flex-1 justify-center">
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <FlashList
            className="pt-10"
            contentContainerStyle={{ paddingBottom: bottom }}
            data={data}
            estimatedItemSize={211}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="flex-1 items-center pb-10"
                onPress={() => {
                  navigation.navigate("pokemonDetail", { pokemon: item });
                }}
              >
                <PokemonCard {...item} />
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
