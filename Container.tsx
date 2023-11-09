import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Avatar, Button, Icon, useColorMode, useTheme } from "native-base";
import ThreadContainer from "./app/pages/Home";
import { Ionicons } from "@expo/vector-icons";
import { Search, SearchHeader } from "./app/pages/Search";
import DrawerView from "./app/components/Home/DrawerView";
import userDummy from "./app/mocks/user";
import DetailThread from "./app/pages/DetailThread";
import DetailProfile from "./app/pages/DetailProfile";
import Followers from "./app/components/Followers";
import Following from "./app/components/Following";

const Stack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const BottomStack = createBottomTabNavigator();

const AppDrawerStack = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  return (
    <DrawerStack.Navigator
      drawerContent={() => <DrawerView navigation={navigation} />}
      // change drawer background
      screenOptions={{
        drawerStyle: {
          backgroundColor:
            colorMode === "light"
              ? theme.colors.light[50]
              : theme.colors.light[900],
        },
      }}
    >
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
  const { colorMode } = useColorMode();
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
        tabBarActiveTintColor: theme.colors.primary["500"],
        tabBarStyle: {
          backgroundColor:
            colorMode === "light"
              ? theme.colors.light[50]
              : theme.colors.light[900],
        },
        tabBarInactiveTintColor:
          colorMode === "light"
            ? theme.colors.light[900]
            : theme.colors.light[50],
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
            // color: theme.colors.light[800],
            color:
              colorMode === "light"
                ? theme.colors.light[800]
                : theme.colors.light[50],
            fontWeight: "bold",
            fontSize: 20,
          },
          headerTitleAlign: "center",
          headerRight: () => (
            <Button variant={"unstyled"}>
              <Icon
                as={Ionicons}
                name="settings"
                size={6}
                color={theme.colors.light[900]}
                _dark={{ color: theme.colors.light[50] }}
              />
            </Button>
          ),
          headerRightContainerStyle: {
            marginRight: 10,
          },
          headerStyle: {
            backgroundColor:
              colorMode === "light"
                ? theme.colors.light[50]
                : theme.colors.light[900],
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
              <Icon
                as={Ionicons}
                name="settings"
                size={6}
                color={theme.colors.light[900]}
                _dark={{ color: theme.colors.light[50] }}
              />
            </Button>
          ),
          headerStyle: {
            backgroundColor:
              colorMode === "light"
                ? theme.colors.light[50]
                : theme.colors.light[900],
          },
        }}
      />
    </BottomStack.Navigator>
  );
};

export default function App() {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor:
              colorMode === "light"
                ? theme.colors.light[50]
                : theme.colors.light[900],
          },
        }}
      >
        <Stack.Screen
          name="AppDrawerStack"
          component={AppDrawerStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail Thread"
          component={DetailThread}
          options={{
            headerStyle: {
              backgroundColor:
                colorMode === "light"
                  ? theme.colors.light[50]
                  : theme.colors.light[900],
            },
            headerTintColor:
              colorMode === "light"
                ? theme.colors.light[900]
                : theme.colors.light[50],
          }}
        />
        <Stack.Screen
          name="Detail Profile"
          component={DetailProfile}
          options={{
            headerStyle: {
              backgroundColor:
                colorMode === "light"
                  ? theme.colors.light[50]
                  : theme.colors.light[900],
            },
            headerTintColor:
              colorMode === "light"
                ? theme.colors.light[900]
                : theme.colors.light[50],
          }}
        />
        <Stack.Screen
          name="Followers"
          component={Followers}
          options={{
            headerStyle: {
              backgroundColor:
                colorMode === "light"
                  ? theme.colors.light[50]
                  : theme.colors.light[900],
            },
            headerTintColor:
              colorMode === "light"
                ? theme.colors.light[900]
                : theme.colors.light[50],
          }}
        />
        <Stack.Screen
          name="Following"
          component={Following}
          options={{
            headerStyle: {
              backgroundColor:
                colorMode === "light"
                  ? theme.colors.light[50]
                  : theme.colors.light[900],
            },
            headerTintColor:
              colorMode === "light"
                ? theme.colors.light[900]
                : theme.colors.light[50],
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
