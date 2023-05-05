import {
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Colors from "../../../utils/Colors";
import Fonts from "../../../utils/Fonts";

const transformValue = (title, value) => {
  if (title === "roles") {
    return value ? value.slice(0, 4) : "all";
  }
  return value ? "on" : "off";
};

export default FilterModalItem = ({ title, value, onPress }) => {
  return (
    <TouchableHighlight
      underlayColor="#1A1A19"
      onPress={onPress}
      style={{ borderRadius: 2 }}
    >
      <View style={styles.filterItem}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.innerContainer}>
          <Text
            style={[
              styles.text,
              { fontFamily: Fonts.secondaryFont },
              styles.off,
              value ? styles.on : styles.off,
            ]}
          >
            {transformValue(title, value)}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  filterItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  button: {
    flex: 1,
    borderRadius: 2,
  },
  innerContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 2,
    minWidth: 35,
    backgroundColor: Colors.secondaryGrey,
  },
  text: {
    color: Colors.primaryWhite,
    fontFamily: Fonts.primaryFont,
    fontSize: 14,
    textAlign: "center",
  },
  off: {
    color: Colors.primaryGrey,
  },
  on: {
    color: Colors.primaryYellow,
  },
});
