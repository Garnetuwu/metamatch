import { StyleSheet, View, Text } from "react-native";
import Divider from "../../UI/Divider";
import Colors from "../../../utils/Colors";
import Fonts from "../../../utils/Fonts";

export default EmptyResults = ({ filterRole, emptyResults }) => {
  const results = emptyResults.join(", ");
  return (
    <>
      <View>
        <Divider />
        <Text style={styles.text}>
          Currently there are no more{" "}
          <Highlight>{filterRole ? filterRole : "all roles"}</Highlight> result
          for: <Highlight>{results}</Highlight>.
        </Text>
        <Text style={styles.text}>
          Try changing the filters for more results
        </Text>
      </View>
    </>
  );
};

const Highlight = ({ children }) => {
  return <Text style={styles.highlight}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: Colors.primaryWhite,
    fontFamily: Fonts.secondaryFont,
    marginTop: 10,
    lineHeight: 20,
    fontSize: 15,
  },
  highlight: {
    color: Colors.primaryYellow,
  },
});
