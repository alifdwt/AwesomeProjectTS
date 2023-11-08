import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Avatar, Button, useTheme } from "native-base";
import ThreadContainer from "./app/pages/Home";
import { Ionicons } from "@expo/vector-icons";
import { Search, SearchHeader } from "./app/pages/Search";
import DrawerView from "./app/components/Home/DrawerView";
import userDummy from "./app/mocks/user";
import DetailThread from "./app/pages/DetailThread";

const Stack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const BottomStack = createBottomTabNavigator();

const AppDrawerStack = () => {
  return (
    <DrawerStack.Navigator drawerContent={() => <DrawerView />}>
      <DrawerStack.Screen
        name="AppStack"
        component={AppBottomStack}
        options={{ headerShown: false }}
      />
    </DrawerStack.Navigator>
  );
};

const AppBottomStack = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();
  const user = userDummy.find((user) => user.id === 1);
  return (
    <BottomStack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "ios-search" : "ios-search-outline";
          } else if (route.name === "Todo") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else {
            iconName = focused
              ? "ios-chatbox-ellipses-sharp"
              : "ios-chatbox-ellipses-outline";
          }

          return (
            <Ionicons
              name={
                iconName as
                  | "ios-home"
                  | "ios-information-circle"
                  | "ios-chatbox-ellipses-outline"
              }
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: theme.colors.primary["800"],
        tabBarInactiveTintColor: "gray",
      })}
    >
      <BottomStack.Screen
        name="Home"
        component={ThreadContainer}
        options={{
          headerLeft: () => (
            <Button
              variant={"unstyled"}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            >
              <Avatar
                size={"sm"}
                source={{
                  uri: user?.profile_picture,
                }}
              />
            </Button>
          ),
          headerTitle: "CIRCLE",
          headerTitleStyle: {
            color: theme.colors.light[800],
            fontWeight: "bold",
            fontSize: 20,
          },
          headerTitleAlign: "center",
          headerRight: () => (
            <Button variant={"unstyled"}>
              <Ionicons name="settings" size={24} />
            </Button>
          ),
          headerRightContainerStyle: {
            marginRight: 10,
          },
          headerStyle: {
            backgroundColor: theme.colors.light[50],
          },
        }}
      />
      <BottomStack.Screen
        name="Search"
        component={Search}
        options={{
          headerLeft: () => (
            <Button variant={"unstyled"}>
              <Avatar
                size={"sm"}
                source={{
                  uri: user?.profile_picture,
                }}
              />
            </Button>
          ),
          headerTitle: () => <SearchHeader />,
          headerTitleAlign: "center",
          headerRight: () => (
            <Button variant={"unstyled"}>
              <Ionicons name="settings" size={24} />
            </Button>
          ),
          headerStyle: {
            backgroundColor: theme.colors.light[50],
          },
        }}
      />
    </BottomStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppDrawerStack"
          component={AppDrawerStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detail Thread" component={DetailThread} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
