import { StyleSheet, View } from "react-native";
import CachedImage from "./CachedImage";
import Colors from "../../utils/Colors";

export default IconCard = ({ image, size, flip }) => {
  const iconFrame = { width: size, height: size };
  const flipStyle = { transform: [{ scaleX: -1 }] };
  return (
    <View style={[styles.imageContainer, iconFrame]}>
      <CachedImage
        source={{ uri: image }}
        resizeMode="cover"
        style={[styles.image, iconFrame, flip ? flipStyle : null]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.primaryBlack,
    backgroundColor: Colors.primaryBlack,
    borderRadius: 3,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { height: 4 },
    shadowRadius: 2,
    elevation: 6,
  },
  image: {
    resizeMode: "cover",
    borderRadius: 2,
  },
});
