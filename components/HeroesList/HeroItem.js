import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";

import PressableHeroIcon from "../PressableHeroIcon";

export default HeroItem = ({ name, image, index, length }) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("HeroDetail", {
      heroName: name,
    });
  };

  const firstThree = index < 3;
  const lastOne = index === length - 1;
  const marginTop = { marginTop: 15 };
  const marginBottom = { marginBottom: 15 };

  return (
    <View
      intensity={90}
      style={[
        styles.heroItem,
        firstThree ? marginTop : null,
        lastOne ? marginBottom : null,
      ]}
    >
      <PressableHeroIcon
        image={image}
        name={name}
        onPress={pressHandler}
        size={85}
        fontSize={13}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heroItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    maxWidth: 100,
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 4,
    backgroundColor: "#363636EB",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
