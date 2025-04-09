import { NavigationParamList } from "@app/routes";
import { Feather } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

type PokemonStat = {
  name: string;
  value: number | string;
};

const STATS = [
  { name: "Type", value: "Fire" },
  { name: "Weight", value: 85 },
  { name: "HP", value: 39 },
  { name: "Attack", value: 52 },
] satisfies PokemonStat[];

export const PokemonDetailScreen = ({
  navigation,
  route,
  // @ts-expect-error Not implemented
}: NativeStackScreenProps<NavigationParamList, "pokemonDetail">) => {
  const { top } = useSafeAreaInsets();
  // @ts-expect-error Not implemented
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { pokemon } = route.params;

  return (
    <SafeAreaView className="flex-1 flex-col" edges={["right", "left"]}>
      <View className="flex-col gap-4" style={{ paddingTop: top }}>
        <View className="flex-row px-6 items-center gap-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather color="#000" name="chevron-left" size={44} />
          </TouchableOpacity>
          <Text className="text-4xl font-black py-4">n̸͙̏ö̴̢́ṱ̶̈́ ̶̟̑î̵̭m̸̬͂p̸̮̓l̶̖̀ë̴̠́m̶̺̈́ȩ̶͒n̶̪̿t̵̬̚e̵͇̔d̶̨͠</Text>
        </View>

        <View className="mb-10">
          <Image
            className="self-center"
            height={Dimensions.get("screen").width - 150}
            source={{ uri: undefined }}
            width={Dimensions.get("screen").width - 150}
          />
        </View>
      </View>

      <View className="px-10 pt-8">
        <Text className="text-xl">n̸͙̏ö̴̢́ṱ̶̈́ ̶̟̑î̵̭m̸̬͂p̸̮̓l̶̖̀ë̴̠́m̶̺̈́ȩ̶͒n̶̪̿t̵̬̚e̵͇̔d̶̨͠</Text>

        <View className="h-px bg-gray-300 mt-10" />
      </View>

      <ScrollView className="flex-1" contentContainerClassName="py-10 gap-2 flex-col">
        {STATS.map(({ name, value }) => (
          <View className="flex-row gap-4" key={name}>
            <Text className="flex-1 text-2xl text-right font-bold">{name}</Text>
            <Text className="flex-1 text-2xl text-left">{value}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
