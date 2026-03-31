import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { AppProvider } from '../contexte/AppProvider'
 
// Ce composant définit le layout global de l'application.
// Il inclut un header commun et une navigation par pile (Stack) pour gérer les différentes routes.
export default function Layout() {
  return (
    <AppProvider>
      
        <Stack>
          <Stack.Screen name="index" options={{ title: "Accueil" }} />
          <Stack.Screen name="task/index" options={{ title: "Mes tâches" }} />
          <Stack.Screen name="task/new" options={{ title: "Nouvelle tâche" }} /> 
        </Stack>
    </AppProvider>
  );
}