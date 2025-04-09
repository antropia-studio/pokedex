import { NavigationParamList } from "@app/routes";
import { Feather } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

interface ApiPokemon {
  description: string;
  id: string;
  stats: PokemonStat[];
}

interface ApiPokemonResponse {
  id: string;
  species: { url: string };
  stats: { base_stat: number; stat: { name: string } }[];
}

type PokemonStat = {
  name: string;
  value: number | string;
};

export const PokemonDetailScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<NavigationParamList, "pokemonDetail">) => {
  const { top } = useSafeAreaInsets();
  const { pokemon } = route.params;

  const { data, isPending } = useQuery({
    queryFn: async (): Promise<ApiPokemon> => {
      const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${Number(pokemon.id)}`);
      const pokemonResponseJson: ApiPokemonResponse = await pokemonResponse.json();

      const pokemonSpeciesResponse = await fetch(pokemonResponseJson.species.url);
      const pokemonSpeciesResponseJson = await pokemonSpeciesResponse.json();

      const description = pokemonSpeciesResponseJson.flavor_text_entries[0].flavor_text.replace(/\n/g, " ");
      const stats: PokemonStat[] = pokemonResponseJson.stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      }));

      return { ...pokemonResponseJson, description, stats };
    },
    queryKey: ["pokemon", pokemon.id],
  });

  return (
    <SafeAreaView className="flex-1 flex-col" edges={["right", "left"]}>
      <View className="flex-col gap-4" style={{ backgroundColor: pokemon.color, paddingTop: top }}>
        <View className="flex-row px-6 items-center gap-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather color="#000" name="chevron-left" size={44} />
          </TouchableOpacity>
          <Text className="text-4xl font-black py-4">{pokemon.name}</Text>
        </View>

        <View className="mb-10">
          <Image
            className="self-center"
            height={Dimensions.get("screen").width - 150}
            source={{ uri: pokemon.imageUri }}
            width={Dimensions.get("screen").width - 150}
          />
        </View>
      </View>

      {isPending ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          <View className="px-10 pt-8">
            <Text className="text-xl">{data?.description}</Text>

            <View className="h-px bg-gray-300 mt-4" />
          </View>

          <ScrollView className="flex-1" contentContainerClassName="py-10 gap-2 flex-col">
            {data?.stats.map(({ name, value }) => (
              <View className="flex-row gap-4" key={name}>
                <Text className="flex-1 text-2xl text-right font-bold">{name}</Text>
                <Text className="flex-1 text-2xl text-left">{value}</Text>
              </View>
            ))}
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};
