import {
  Box,
  HStack,
  IconButton,
  Icon,
  StatusBar,
  Text,
  Avatar,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const MyStatusBar = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <Avatar
          bg="green.500"
          size={"sm"}
          mr="1"
          source={{
            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          }}
        >
          RS
        </Avatar>
        <Text fontSize="20" fontWeight="bold" color={"black"}>
          CIRCLE
        </Text>
        <IconButton
          icon={<Icon as={MaterialIcons} name="menu" color="dark" />}
          onPress={() => {}}
        />
      </HStack>
    </>
  );
};

export default MyStatusBar;
