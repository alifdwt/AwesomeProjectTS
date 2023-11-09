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

const Followers = ({ route, navigation }: any) => {
  const { userId } = route.params;
  const followers = followsDummy.filter(
    (follow) => follow.following?.id === userId
  );
  return (
    <View>
      {followers.length > 0 ? (
        <FlatList
          data={followers}
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
                      userId: item.follower?.id,
                    })
                  }
                >
                  <Avatar
                    size={"md"}
                    source={{ uri: item.follower?.profile_picture }}
                  />
                </Pressable>
                <VStack>
                  <Text
                    _dark={{ color: "warmGray.50" }}
                    color="coolGray.800"
                    bold
                  >
                    {item.follower.full_name.length > 15
                      ? `${item.follower?.full_name.slice(0, 15)}...`
                      : item.follower?.full_name}{" "}
                    <Text color="gray.400">@{item.follower?.username}</Text>
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.follower?.profile_description}
                  </Text>
                </VStack>
                <Spacer />
                <Button>Follow</Button>
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

export default Followers;
