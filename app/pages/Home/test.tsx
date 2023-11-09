import {
  Avatar,
  Box,
  HStack,
  Image,
  Text,
  Fab,
  Pressable,
  FlatList,
  VStack,
  Spacer,
  Button,
  useTheme,
  StatusBar,
  useColorMode,
  AspectRatio,
} from "native-base";
import threadDummy from "../../mocks/threads";
import { MaterialIcons } from "@expo/vector-icons";
import getDuration from "../../utils/getDuration";
import ThreadAPI from "../../types/ThreadCardAPI";
import UserListAPI from "../../types/UserListAPI";

const ThreadContainer = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const threads = threadDummy;
  const uniqueUsers: { [key: number]: UserListAPI } = {};
  threadDummy.forEach((thread) => {
    const { user } = thread;
    if (!uniqueUsers[user.id]) {
      uniqueUsers[user.id] = user;
    }
  });

  return (
    <Box>
      <StatusBar
        barStyle={colorMode === "light" ? "dark-content" : "light-content"}
        backgroundColor={
          colorMode === "light"
            ? theme.colors.light[50]
            : theme.colors.light[900]
        }
      />
      <Box>
        <HStack
          _dark={{ bg: theme.colors.light[900] }}
          space={4}
          p={["2", "4"]}
        >
          {Object.values(uniqueUsers).map((user) => (
            <Pressable
              key={user.id}
              // onPress={() => {
              //   navigation.navigate("User Profile", { user });
              // }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Avatar
                bg="green.500"
                size={"60px"}
                source={{
                  uri: user.profile_picture,
                }}
                // p={1}
              >
                <Avatar.Badge bg={"green.500"} />
              </Avatar>
              <Text textAlign={"center"}>
                {user.username.length > 8
                  ? `${user.username.slice(0, 8)}...`
                  : user.username}
              </Text>
            </Pressable>
          ))}
        </HStack>
      </Box>
      <Box h={"87%"}>
        <ThreadCard navigation={navigation} threads={threads} />
      </Box>
    </Box>
  );
};

const ThreadCard = ({
  navigation,
  threads,
}: {
  navigation: any;
  threads: ThreadAPI[];
}) => {
  const theme = useTheme();
  return (
    <>
      {/* <Fab
        renderInPortal={false}
        shadow={2}
        size="lg"
        icon={<MaterialIcons name="add" />}
        colorScheme={"green"}
      /> */}
      {threads.length > 0 ? (
        <FlatList
          data={threads}
          initialNumToRender={10}
          refreshing={true}
          renderItem={({ item }) => (
            <Pressable
              borderBottomWidth="1"
              _dark={{
                borderColor: "muted.50",
                bg: theme.colors.light[900],
              }}
              borderColor="muted.500"
              pl={["2", "4"]}
              pr={["2", "5"]}
              py="2"
              onPress={() => {
                navigation.navigate("Detail Thread", { thread: item });
              }}
            >
              <HStack space={[2, 3]} justifyContent="space-between">
                <Button
                  h={"50"}
                  w={"50"}
                  rounded={"full"}
                  onPress={() => {
                    navigation.navigate("Detail Profile", {
                      userId: item.user?.id,
                    });
                  }}
                >
                  <Avatar
                    // size={"sm"}
                    source={{
                      uri: item.user?.profile_picture,
                    }}
                  />
                </Button>
                <VStack w={"85%"}>
                  <HStack alignItems={"center"} space={1}>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.user?.full_name}
                    </Text>
                    <Text color={"gray.500"}>•</Text>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="gray.500"
                    >
                      @{item.user?.username}
                    </Text>
                    <Text color={"gray.500"}>
                      •{" "}
                      {item.created_at !== item.updated_at && (
                        <MaterialIcons name="edit" size={18} />
                      )}
                    </Text>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="gray.500"
                    >
                      {getDuration(item.updated_at)}
                    </Text>
                  </HStack>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.content.length > 140
                      ? `${item.content.slice(0, 140)}...`
                      : item.content}
                  </Text>
                  {item.image && (
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        source={{ uri: item.image }}
                        alt={item.content.split(" ").slice(0, 5).join(" ")}
                        // size={"xl"}
                      />
                    </AspectRatio>
                  )}
                  <HStack ml={-2}>
                    {/* <Spacer /> */}
                    <Button variant={"ghost"}>
                      <Text fontSize={14} color="coolGray.400">
                        <MaterialIcons name="thumb-up" size={18} />{" "}
                        {item.likes?.length}
                      </Text>
                    </Button>
                    <Button variant={"ghost"}>
                      <Text fontSize={14} color="coolGray.400">
                        <MaterialIcons name="comment" size={18} />{" "}
                        {item.replies?.length}
                      </Text>
                    </Button>
                  </HStack>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {getDuration(item.created_at)}
                </Text>
              </HStack>
            </Pressable>
          )}
          keyExtractor={(item, index) => item.id.toString()}
        />
      ) : (
        <Text>No Threads Found</Text>
      )}
    </>
  );
};

export default ThreadContainer;
export { ThreadCard };
