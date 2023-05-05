import {
  Modal,
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import Colors from "../../utils/Colors";
import Backdrop from "./Backdrop";

export default CustomModal = ({ visible, onRequestClose, children }) => {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      onRequestClose={onRequestClose}
      transparent={true}
      statusBarTranslucent
    >
      <View style={styles.centeredView}>
        <Backdrop onPress={onRequestClose} />
        <View style={styles.modalView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed ? { backgroundColor: "rgba(255, 255, 255, 0.3)" } : null,
            ]}
            onPress={onRequestClose}
          >
            <Text style={styles.textStyle}>close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalView: {
    height: "85%",
    backgroundColor: Colors.modalBlack,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    minWidth: "100%",
    marginVertical: 10,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#FFFFFF0D",
  },
  textStyle: {
    color: Colors.primaryWhite,
    fontFamily: "Gugi",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
