import {
  Input,
  View,
  Text,
  Box,
  Heading,
  Link,
  ScrollView,
  Avatar,
  FlatList,
  Pressable,
  HStack,
  Button,
  VStack,
  AspectRatio,
  Image,
  Spacer,
  useTheme,
  SectionList,
} from "native-base";
import threadDummy from "../../mocks/threads";
import ThreadAPI from "../../types/ThreadCardAPI";
import { ThreadCard } from "../Home";
import getDuration from "../../utils/getDuration";
import { MaterialIcons } from "@expo/vector-icons";

const SearchHeader = () => {
  return (
    <View
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Input
        placeholder="Search"
        variant={"rounded"}
        bg={"gray.800"}
        color={"white"}
      />
    </View>
  );
};

const Search = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();
  function findTopWords(
    threadDummy: ThreadAPI[],
    stopWords: string[]
  ): { word: string; count: number }[] {
    const combinedContent = threadDummy
      .map((thread) => thread.content)
      .join(" ");
    const cleanedContent = combinedContent
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, " ");
    const wordsArray = cleanedContent.split(" ");
    const wordCount = wordsArray.reduce((count, word) => {
      if (!stopWords.includes(word.toLowerCase())) {
        count[word] = (count[word] || 0) + 1;
      }
      return count;
    }, {} as Record<string, number>);
    const sortedWords = Object.keys(wordCount).sort(
      (a, b) => wordCount[b] - wordCount[a]
    );
    const top5Words = sortedWords
      .slice(0, 5)
      .map((word) => ({ word, count: wordCount[word] }));

    return top5Words;
  }
  const stopWords = ["adalah", "the", "is", "in", "it", "on"];

  const top5WordsCount = findTopWords(threadDummy, stopWords);

  const top5Words = top5WordsCount.map((item) => item.word);

  // Temukan thread dengan content yang mengandung salah satu dari lima kata teratas
  const threadsWithTopWords = threadDummy.filter((thread) => {
    const wordsInContent = thread.content.split(" ");
    return wordsInContent.some((word) => top5Words.includes(word));
  });

  return (
    <ThreadCard
      threads={threadsWithTopWords}
      navigation={navigation}
      listHeaderComponent={
        <Trending navigation={navigation} top5WordsCount={top5WordsCount} />
      }
    />
  );
};

const Trending = ({
  navigation,
  top5WordsCount,
}: {
  navigation: any;
  top5WordsCount: { word: string; count: number }[];
}) => {
  return (
    <>
      <SectionList
        sections={[{ title: "Trending", data: top5WordsCount }]}
        keyExtractor={(item) => item.word}
        renderItem={({ item }) => (
          <Box
            w={"100%"}
            p={2}
            bg={"gray.300"}
            _dark={{ bg: "gray.900" }}
            key={item.word}
          >
            <Text fontSize={"xs"} color={"gray.600"} fontWeight={"bold"}>
              Trending in Indonesia
            </Text>
            <Text fontSize={"md"}>{item.word}</Text>
            <Text fontSize={"xs"} color={"gray.600"} fontWeight={"bold"}>
              {item.count} posts
            </Text>
          </Box>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Heading my={2} color={"black"}>
            {title}
          </Heading>
        )}
      />
      <Link _dark={{ bg: "blueGray.800" }} _light={{ bg: "blueGray.50" }} p={2}>
        See all
      </Link>
    </>
  );
};

export { SearchHeader, Search };
