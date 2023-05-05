import { ImageBackground, StyleSheet } from "react-native";

const LayoutWrapper = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/Background.png")}
      resizeMode="cover"
      style={styles.image}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: { flex: 1 },
});

export default LayoutWrapper;
