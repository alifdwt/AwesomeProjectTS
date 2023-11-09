import { View, Text, Box, useColorModeValue, Pressable } from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";
import { Dimensions } from "react-native";
import { useState } from "react";
import Animated from "react-native-reanimated";

const ThreadsTab = () => {
  return (
    <View>
      <Text>Threads</Text>
    </View>
  );
};

const LikesTab = () => {
  return (
    <View>
      <Text>Likes</Text>
    </View>
  );
};

const initialLayout = { width: Dimensions.get("window").width };
const renderScene = SceneMap({
  threads: ThreadsTab,
  likes: LikesTab,
});

const TabViewProfile = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "threads", title: "Threads" },
    { key: "likes", title: "Likes" },
  ]);

  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map((x: any, i: any) => i);
    return (
      <Box flexDirection={"row"}>
        {props.navigationState.routes.map((route: any, i: any) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: any) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color =
            index === 1
              ? useColorModeValue("#000", "#e5e5e5")
              : useColorModeValue("#1f2937", "#a1a1aa");
          const borderColor =
            index === i
              ? "cyan.500"
              : useColorModeValue("coolGray.200", "gray.400");

          return (
            <Box
              borderBottomWidth={"3"}
              borderColor={borderColor}
              flex={1}
              alignItems={"center"}
              p={"3"}
              key={i}
            >
              <Pressable onPress={() => setIndex(i)}>
                <Animated.Text style={{ color }}>{route.title}</Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};
