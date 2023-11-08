import {
  View,
  Avatar,
  HStack,
  Text,
  VStack,
  Image,
  Link,
  FlatList,
  Pressable,
  Spacer,
} from "native-base";

const DetailThread = ({ route, navigation }: any) => {
  const { thread } = route.params;
  return (
    <View>
      <HStack space={2} alignItems={"center"} mb={2} p={2}>
        <Avatar source={{ uri: thread.user.profile_picture }} />
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
        bg={"gray.200"}
        px={2}
        py={3}
        mt={3}
        borderColor={"gray.400"}
        borderWidth={1}
      >
        <Text>{thread.replies.length} Reply</Text>
        <Text>{thread.likes.length} Likes</Text>
      </HStack>
      <FlatList
        data={thread.replies}
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
              <Avatar
              // size={"sm"}
              //   source={{
              //     uri: item.user?.profile_picture,
              //   }}
              />
              <VStack w={"85%"}>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  John Doe • @johndoe
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
                  <Image
                    source={{ uri: item.image }}
                    alt={item.content.split(" ").slice(0, 5).join(" ")}
                    size={"xl"}
                  />
                )}
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
                4d
              </Text>
            </HStack>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DetailThread;
