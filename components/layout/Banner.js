import { View, Text, StyleSheet } from "react-native";

const Banner = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.logo}>Metamatch</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: "13%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#2C2C2C",
    paddingBottom: 10,
  },
  logo: {
    fontFamily: "Gugi",
    fontSize: 22,
    color: "white",
  },
});

export default Banner;
