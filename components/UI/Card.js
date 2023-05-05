import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet } from "react-native";

export default Card = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <LinearGradient
        colors={["#00000000", "#00000050"]}
        style={styles.gradient}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    padding: 10,
    borderRadius: 4,
    height: "96%",
    backgroundColor: "#2B2B2BE5",
    elevation: 10,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    minWidth: "100%",
    left: 0,
    right: 0,
    height: 50,
    borderRadius: 4,
  },
});
