import "style/global.css"; // Load Nativewind styles
import { NavigationParamList } from "@app/routes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { PokemonListScreen } from "./screens/PokemonListScreen";

const Stack = createNativeStackNavigator<NavigationParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={new QueryClient()}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={PokemonListScreen} name="pokemonList" />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
