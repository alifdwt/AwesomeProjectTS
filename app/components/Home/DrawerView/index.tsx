import { Avatar, Text, View, Button, Flex, Link } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import userDummy from "../../../mocks/user";

const DrawerView = () => {
  const user = userDummy.find((user) => user.id === 1);
  const navigate = [
    {
      name: "Profile",
      icon: "person",
    },
    {
      name: "Premium",
      icon: "card",
    },
    {
      name: "Bookmarks",
      icon: "bookmark",
    },
    {
      name: "Lists",
      icon: "list",
    },
    {
      name: "Space",
      icon: "cog",
    },
    {
      name: "Monetization",
      icon: "cash",
    },
  ];
  return (
    <View mt={"10"} p={"5"}>
      <View borderBottomWidth={1} borderBottomColor={"gray.200"} pb={"5"}>
        <Button width={"50px"} variant={"unstyled"}>
          <Avatar source={{ uri: user?.profile_picture }} />
        </Button>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          {user?.full_name}
        </Text>
        <Text color={"gray.500"}>@{user?.username}</Text>
        <Text>{user?.profile_description}</Text>
        <Flex direction={"row"}>
          <Link mr={2}>{user?.followers?.length} followers</Link>
          <Link>{user?.following?.length} following</Link>
        </Flex>
      </View>

      <View mt={"5"}>
        {navigate.map((item) => (
          <Link key={item.name} mb={2}>
            <Text fontSize={"xl"}>
              <Ionicons name={item.icon} size={16} /> {item.name}
            </Text>
          </Link>
        ))}
      </View>
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
