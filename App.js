import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListScreen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen
          name="Component"
          component={ComponentScreen}
          options={{ title: "Component Screen" }}
        />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{ title: "List Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;