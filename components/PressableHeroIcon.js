import { StyleSheet, Pressable, View, Text } from "react-native";
import IconCard from "./UI/IconCard";
import Colors from "../utils/Colors";
import Fonts from "../utils/Fonts";

export default PressableHeroIcon = ({
  name,
  image,
  onPress,
  size,
  fontSize,
  flip,
}) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: Colors.primaryGrey }}
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.buttonPressed : null,
      ]}
    >
      <View style={[styles.container]}>
        <IconCard image={image} size={size} flip={flip} />
        <Text style={[styles.text, { fontSize }]}>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },

  button: {
    flex: 1,
  },
  buttonPressed: {
    backgroundColor: Colors.primaryGrey,
    borderRadius: 4,
  },
  text: {
    color: Colors.primaryWhite,
    textAlign: "center",
    fontFamily: Fonts.light,
  },
});
