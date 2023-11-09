import {
  Avatar,
  Box,
  Button,
  FlatList,
  HStack,
  Pressable,
  Spacer,
  Text,
  VStack,
  View,
} from "native-base";
import followsDummy from "../../mocks/follows";

const Following = ({ route, navigation }: any) => {
  const { userId } = route.params;
  const following = followsDummy.filter(
    (follow) => follow.follower?.id === userId
  );
  return (
    <View>
      {following.length > 0 ? (
        <FlatList
          data={following}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{ borderColor: "muted.50" }}
              borderColor="muted.800"
              pl={["2", "4"]}
              pr={["2", "5"]}
              py="2"
            >
              <HStack space={[2, 3]} justifyContent={"space-between"}>
                <Pressable
                  onPress={() =>
                    navigation.navigate("Detail Profile", {
                      userId: item.following?.id,
                    })
                  }
                >
                  <Avatar
                    size={"md"}
                    source={{ uri: item.following?.profile_picture }}
                  />
                </Pressable>
                <VStack>
                  <Text
                    _dark={{ color: "warmGray.50" }}
                    color="coolGray.800"
                    bold
                  >
                    {item.following?.full_name}{" "}
                    <Text color="gray.400">@{item.following?.username}</Text>
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.following?.profile_description}
                  </Text>
                </VStack>
                <Spacer />
                <Button variant={"outline"}>Followed</Button>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>No followers</Text>
      )}
    </View>
  );
};

export default Following;
