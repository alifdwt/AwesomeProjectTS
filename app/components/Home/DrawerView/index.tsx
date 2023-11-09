import {
  Avatar,
  Text,
  View,
  Button,
  Flex,
  Link,
  useColorMode,
  useTheme,
  HStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import userDummy from "../../../mocks/user";

const DrawerView = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();
  const user = userDummy.find((user) => user.id === 1);
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = [
    {
      name: "Profile",
      icon: "person",
      screen: "Detail Profile",
    },
    {
      name: "Premium",
      icon: "card",
      screen: "Premium",
    },
    {
      name: "Bookmarks",
      icon: "bookmark",
      screen: "Bookmarks",
    },
    {
      name: "Lists",
      icon: "list",
      screen: "Lists",
    },
    {
      name: "Space",
      icon: "cog",
      screen: "Space",
    },
    {
      name: "Monetization",
      icon: "cash",
      screen: "Monetization",
    },
  ];
  return (
    <View mt={"10"} p={"5"} _dark={{ bg: theme.colors.light[900] }}>
      <View borderBottomWidth={1} borderBottomColor={"gray.200"} pb={"5"}>
        <Button
          width={"50px"}
          variant={"unstyled"}
          onPress={() =>
            navigation.navigate("Detail Profile", { userId: user?.id })
          }
        >
          <Avatar source={{ uri: user?.profile_picture }} />
        </Button>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          {user?.full_name}
        </Text>
        <Text color={"gray.500"}>@{user?.username}</Text>
        <Text>{user?.profile_description}</Text>
        <HStack direction={"row"} space={2}>
          <Link
            onPress={() =>
              navigation.navigate("Following", { userId: user?.id })
            }
          >
            {user?.following?.length} following
          </Link>
          <Link
            onPress={() =>
              navigation.navigate("Followers", { userId: user?.id })
            }
          >
            {user?.followers?.length} followers
          </Link>
        </HStack>
      </View>

      <View mt={"5"}>
        {navigate.map((item) => (
          <Link
            key={item.name}
            mb={2}
            onPress={() =>
              navigation.navigate(item.screen, { userId: user?.id })
            }
          >
            <Text fontSize={"xl"}>
              <Ionicons name={item.icon} size={16} /> {item.name}
            </Text>
          </Link>
        ))}
      </View>

      <Button onPress={toggleColorMode}>
        Switch to {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </View>
  );
};

export default DrawerView;

/*
Profile
Premium
Bookmarks
Lists
Space
Monetization

Professional Tools
Setings & Support
*/
