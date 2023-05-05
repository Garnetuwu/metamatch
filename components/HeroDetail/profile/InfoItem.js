import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../../utils/Colors";
import Fonts from "../../../utils/Fonts";

export default InfoItem = ({
  title,
  value,
  icon,
  iconSize,
  pressable,
  onPress,
  portion,
  isFilterItem,
}) => {
  const backgroundStyle = pressable
    ? {
        backgroundColor: "#FFFFFF0F",
      }
    : { backgroundColor: "#00000021" };

  return (
    <View style={[styles.outerContainer, { flex: portion }]}>
      <Pressable
        android_ripple={{ color: Colors.primaryGrey }}
        onPress={onPress}
        disabled={!pressable}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.infoItem, backgroundStyle]}>
          <View style={styles.textContainer}>
            {title && <Text style={styles.title}>{title}</Text>}
            <Text
              style={[
                styles.content,
                isFilterItem ? { fontFamily: Fonts.light } : null,
              ]}
            >
              {value}
            </Text>
          </View>
          {icon && (
            <FontAwesome5
              name={icon}
              size={iconSize}
              color={Colors.primaryWhite}
            />
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    borderRadius: 4,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  infoItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  textContainer: {
    gap: 2,
  },
  title: {
    fontFamily: Fonts.light,
    color: Colors.primaryGrey,
    fontSize: 10,
  },
  content: {
    fontFamily: Fonts.semiBold,
    color: Colors.primaryWhite,
    fontSize: 14,
  },
});
