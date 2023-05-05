import { StyleSheet, View } from "react-native";
import IconCard from "../../UI/IconCard";
import BasicInfo from "./BasicInfo";
import FilterInfo from "./FilterInfo";

export default HeroProfile = ({ type, image, strength, weakness }) => {
  return (
    <View style={styles.heroProfile}>
      <BasicInfo
        type={type}
        strength={strength}
        weakness={weakness}
        style={[styles.info]}
      />

      <View style={{ flex: 1 / 3 }}>
        <IconCard image={image} size={100} />
      </View>

      <FilterInfo style={styles.info} />
    </View>
  );
};

const styles = StyleSheet.create({
  heroProfile: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    paddingBottom: 18,
  },
  info: {
    flex: 1 / 3,
    gap: 5,
  },
});
