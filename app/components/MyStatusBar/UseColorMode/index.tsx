import { useColorMode, useColorModeValue } from "native-base";
import { Icon, IconButton, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const UseColorMode = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Light", "Dark");
  const bg = useColorModeValue("white", "black");

  return (
    <>
      <IconButton
        icon={<Icon as={MaterialIcons} name="menu" color="white" />}
        onPress={toggleColorMode}
      />
      <Text color="white" fontSize="20" fontWeight="bold">
        {text}
      </Text>
    </>
  );
};

export default UseColorMode;
