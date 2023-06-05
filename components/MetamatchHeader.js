import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import Colors from "../utils/Colors";
import Fonts from "../utils/Fonts";

export default MetamatchHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: Colors.primaryYellow }]}>M</Text>
      <Text style={[styles.text, { color: Colors.primaryBlue }]}>e</Text>
      <Text style={[styles.text, { color: Colors.primaryBrown }]}>t</Text>
      <Text style={[styles.text, { color: Colors.primaryPurple }]}>a</Text>
      <Text style={[styles.text, { color: Colors.thirdGrey }]}>m</Text>
      <Text style={[styles.text, { color: Colors.primaryPink }]}>a</Text>
      <Text style={[styles.text, { color: Colors.secondaryBlue }]}>t</Text>
      <Text style={[styles.text, { color: Colors.secondaryBrown }]}>c</Text>
      <Text style={[styles.text, { color: Colors.secondaryPurple }]}>h</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.bold,
    fontSize: 24,
  },
  container: {
    flexDirection: "row",
  },
});
