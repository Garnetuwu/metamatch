import { StyleSheet, Pressable } from "react-native";

export default Backdrop = ({ onRequestClose }) => {
  return <Pressable style={styles.backdrop} onPress={onRequestClose} />;
};

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    zIndex: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
