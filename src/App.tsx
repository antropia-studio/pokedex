import "style/global.css"; // Load Nativewind styles
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { PokemonListScreen } from "./screens/PokemonListScreen";

type NavigationParamList = {
  pokemonList: undefined;
};

const Stack = createNativeStackNavigator<NavigationParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen component={PokemonListScreen} name="pokemonList" />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
