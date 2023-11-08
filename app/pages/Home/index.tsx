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
} from "native-base";
import threadDummy from "../../mocks/threads";
import { MaterialIcons } from "@expo/vector-icons";
import getDuration from "../../utils/getDuration";

const ThreadContainer = ({ navigation }: { navigation: any }) => {
  const threads = threadDummy;
  return (
    <Box>
      <Fab
        renderInPortal={false}
        shadow={2}
        size="lg"
        icon={<MaterialIcons name="add" />}
        colorScheme={"green"}
      />
      {threads.length > 0 ? (
        <FlatList
          data={threads}
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
              onPress={() => {
                navigation.navigate("Detail Thread", { thread: item });
              }}
            >
              <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar
                  // size={"sm"}
                  source={{
                    uri: item.user?.profile_picture,
                  }}
                />
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
                    <Text color={"gray.500"}>•</Text>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="gray.500"
                    >
                      {getDuration(item.created_at)}
                    </Text>
                  </HStack>
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
    </Box>
  );
};

export default ThreadContainer;
