import { Input, Avatar, Flex, View, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const SearchHeader = () => {
  return (
    <View
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      //   px={4}
    >
      {/* <Avatar size={"sm"} /> */}
      <Input placeholder="Search" variant={"rounded"} />
      {/* <MaterialIcons name="settings" size={24} color="black" /> */}
    </View>
  );
};

const Search = () => {
  return (
    <View>
      <Text fontSize={"xl"} fontWeight={"bold"} textAlign={"center"}>
        Ini laman Search
      </Text>
    </View>
  );
};

export { SearchHeader, Search };
