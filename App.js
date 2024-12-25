import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ModalScreen from "./src/screens/ModalScreen";
import SwipeScreen from "./src/screens/SwipeScreen";
import NewListScreen from "./src/screens/NewListScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "HomeScreen" }}
        />
        <Stack.Screen
          name="Component"
          component={ComponentScreen}
          options={{ title: "ComponentScreen" }}
        />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{ title: "ListScreen" }}
        />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{ title: "ModalScreen" }}
        />
        <Stack.Screen
          name="Swipe"
          component={SwipeScreen}
          options={{ title: "SwipeScreen" }}
        />
        <Stack.Screen
          name="NewList"
          component={NewListScreen}
          options={{ title: "NewListScreen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
