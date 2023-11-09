import {
  View,
  Avatar,
  HStack,
  Text,
  VStack,
  Image,
  FlatList,
  Pressable,
  Spacer,
  useTheme,
  AspectRatio,
} from "native-base";
import repliesDummy from "../../mocks/replies";
import getDuration from "../../utils/getDuration";

const DetailThread = ({ route, navigation }: any) => {
  const { thread } = route.params;
  const replies = repliesDummy.filter(
    (reply) => reply.thread?.id === thread.id
  );
  const theme = useTheme();
  return (
    <View _dark={{ bg: theme.colors.light[900] }}>
      <HStack space={2} alignItems={"center"} mb={2} p={2}>
        <Pressable
          onPress={() =>
            navigation.navigate("Detail Profile", { userId: thread.user.id })
          }
        >
          <Avatar source={{ uri: thread.user.profile_picture }} />
        </Pressable>
        <VStack>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            {thread.user.full_name}
          </Text>
          <Text color={"gray.500"}>@{thread.user.username}</Text>
        </VStack>
      </HStack>
      <VStack px={2}>
        <Text fontSize={"lg"}>{thread.content}</Text>
        {thread.image && (
          <Image
            source={{ uri: thread.image }}
            alt={thread.content.split(" ").slice(0, 5).join(" ")}
            size="2xl"
          />
        )}
      </VStack>
      <HStack mt={3} space={1}>
        <Text color={"gray.500"}>
          {new Date(thread.created_at).toLocaleString("id-ID", {
            timeZone: "Asia/Jakarta",
          })}
        </Text>
        {thread.created_at !== thread.updated_at && (
          <Text color={"#22c35e"}>
            Updated at {new Date(thread.updated_at).toLocaleString()}
          </Text>
        )}
      </HStack>
      <HStack
        space={3}
        px={2}
        py={3}
        mt={3}
        borderColor={"gray.400"}
        _dark={{
          bg: theme.colors.light[800],
          borderColor: "gray.600",
        }}
      >
        <Text>{thread.replies.length} Reply</Text>
        <Text>{thread.likes.length} Likes</Text>
      </HStack>
      <FlatList
        data={replies}
        renderItem={({ item }) => (
          <Pressable
            borderBottomWidth="1"
            _dark={{
              borderColor: "muted.50",
            }}
            borderColor="muted.500"
            pl={["2", "4"]}
            pr={["2", "5"]}
            py="2"
            onPress={() => {}}
          >
            <HStack space={[2, 3]} justifyContent="space-between">
              <Pressable
                onPress={() => {
                  navigation.navigate("Detail Profile", {
                    userId: item.user?.id,
                  });
                }}
              >
                <Avatar
                  size={"md"}
                  source={{
                    uri: item.user?.profile_picture,
                  }}
                />
              </Pressable>
              <VStack w={"85%"}>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.user?.full_name} • @{item.user?.username} •{" "}
                  {getDuration(item.updated_at)}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.content}
                </Text>
                {item.image && (
                  <AspectRatio w={"100%"} ratio={16 / 9}>
                    <Image
                      source={{ uri: item.image }}
                      alt={item.content.split(" ").slice(0, 5).join(" ")}
                      // size={"xl"}
                    />
                  </AspectRatio>
                )}
              </VStack>
              <Spacer />
              {/* <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                4d
              </Text> */}
            </HStack>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DetailThread;
