import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { AppProvider } from '../contexte/AppProvider'
 
// Ce composant définit le layout global de l'application.
// Il inclut un header commun et une navigation par pile (Stack) pour gérer les différentes routes.
export default function Layout() {
  return (
    <AppProvider>
        
        <View style={{ padding: 16, backgroundColor: "#f0f0f0" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Mon Application
          </Text>
        </View>
      
        <Stack>
          <Stack.Screen name="index" options={{ title: "Accueil" }} />
          <Stack.Screen name="task/index" options={{ title: "Mes tâches" }} />
          <Stack.Screen name="task/new" options={{ title: "Nouvelle tâche" }} /> 
        </Stack>
      
    </AppProvider>
  );
}