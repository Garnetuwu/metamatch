import { View, StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: Colors.primaryGrey,
    height: 2,
    width: "100%",
    zIndex: -10,
  },
});
