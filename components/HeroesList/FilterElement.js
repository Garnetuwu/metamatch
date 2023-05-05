import { LinearGradient } from "expo-linear-gradient";
import { TouchableHighlight, Text, View, StyleSheet } from "react-native";
import Fonts from "../../utils/Fonts";
import Colors from "../../utils/Colors";

const FilterElement = ({ title, onFilter, selected }) => {
  const pressHandler = () => {
    onFilter(title);
  };

  return (
    <TouchableHighlight
      style={styles.button}
      activeOpacity={0.9}
      underlayColor="#00000040"
      onPress={pressHandler}
    >
      <View
        style={[
          styles.innerContainer,
          selected === title ? styles.innerContainerPressed : null,
        ]}
      >
        {selected === title && (
          <LinearGradient
            locations={[0, 0.2, 0.3]}
            colors={["#1F1F1F", "#262626", "#282828"]}
            style={styles.gradient}
          />
        )}
        <Text
          style={[
            { fontSize: 18, fontFamily: Fonts.medium },
            selected === title
              ? { color: Colors.primaryWhite }
              : { color: Colors.primaryBlack },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: { flex: 1 },
  innerContainer: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainerPressed: {
    backgroundColor: Colors.primaryBlack,
  },
  gradient: {
    //inner shadow
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
  },
});
export default FilterElement;
