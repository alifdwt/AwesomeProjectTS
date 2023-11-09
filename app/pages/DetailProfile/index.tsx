import {
  AspectRatio,
  Avatar,
  Box,
  HStack,
  Image,
  Link,
  Text,
  View,
  useTheme,
} from "native-base";
import userDummy from "../../mocks/user";
import { MaterialIcons } from "@expo/vector-icons";
import { ThreadCard } from "../Home";
import threadDummy from "../../mocks/threads";

const DetailProfileHeader = ({ route, navigation }: any) => {
  const { userId } = route.params;
  const user = userDummy.find((user) => user.id === userId);
  const theme = useTheme();
  return (
    <View _dark={{ bg: theme.colors.light[900] }}>
      <View>
        <Box>
          <AspectRatio w={"100%"} ratio={25 / 9}>
            <Image
              source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
              alt="Alternate text"
            />
          </AspectRatio>
        </Box>
        <Box
          position="absolute"
          bottom={-10}
          left={4}
          p={1}
          bg="black"
          rounded="full"
        >
          <Avatar size={"lg"} source={{ uri: user?.profile_picture }}>
            {user?.full_name[0]}
          </Avatar>
        </Box>
        <Text color={"transparent"}>{user?.full_name}</Text>
      </View>
      <Box p={2}>
        <Text fontSize={"2xl"} _dark={{ color: theme.colors.light[50] }}>
          {user?.full_name}
        </Text>
        <Text color={"gray.500"}>@{user?.username}</Text>
        <Text mt={1} fontSize={"md"}>
          {user?.profile_description}
        </Text>
        <Box mt={2}>
          <Text color={"gray.400"}>
            <MaterialIcons name="location-on" size={14} /> Depok, Indonesia
          </Text>
          <Text color={"gray.400"}>
            <MaterialIcons name="link" size={14} /> https://{user?.username}
            .vercel.com
          </Text>
          <Text color={"gray.400"}>
            <MaterialIcons name="date-range" size={14} /> Joined at{" "}
            {getMonthNameAndYear(user?.created_at)}
          </Text>
        </Box>
        <HStack mt={1} space={3}>
          <Link onPress={() => navigation.navigate("Following", { userId })}>
            {user?.following?.length} Following
          </Link>
          <Link onPress={() => navigation.navigate("Followers", { userId })}>
            {user?.followers?.length} Followers
          </Link>
        </HStack>
      </Box>
      <Box>
        <Text
          textAlign={"center"}
          fontWeight={"bold"}
          fontSize={"md"}
          bg={theme.colors.light[400]}
          color={theme.colors.light[50]}
          _dark={{ color: theme.colors.light[50], bg: theme.colors.light[600] }}
          p={1}
        >
          Threads
        </Text>
        {/* <Box h={"65%"}>
          <ThreadCard navigation={navigation} threads={userThreads} />
        </Box> */}
      </Box>
    </View>
  );
};

const DetailProfile = ({ route, navigation }: any) => {
  const { userId } = route.params;
  const userThreads = threadDummy.filter(
    (thread) => thread.user?.id === userId
  );
  return (
    <ThreadCard
      navigation={navigation}
      threads={userThreads}
      listHeaderComponent={<DetailProfileHeader route={route} />}
    />
  );
};

export default DetailProfile;

const getMonthNameAndYear = (date: string | undefined) => {
  const dateObj = new Date(date as string);
  const month = dateObj.toLocaleString("default", { month: "long" });
  const year = dateObj.getFullYear();
  return `${month} ${year}`;
};
