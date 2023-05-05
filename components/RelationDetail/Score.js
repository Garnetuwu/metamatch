import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../utils/Colors";
import transScoreToTier from "../../utils/transScoreToTier";
import Fonts from "../../utils/Fonts";

export default Score = ({ score, isCombo, isSpecial }) => {
  const { tier, tierColor } = transScoreToTier(score, isCombo);

  return (
    <View style={styles.container}>
      {!isSpecial && (
        <View style={styles.scoreWrapper}>
          <Text style={[styles.text, { color: tierColor }]}>{tier}</Text>
          <Text style={styles.caption}>tier</Text>
        </View>
      )}
      <Entypo
        name={
          isCombo
            ? "plus"
            : isSpecial
            ? "star"
            : score < 0
            ? "arrow-bold-left"
            : "arrow-bold-right"
        }
        size={24}
        color={Colors.primaryWhite}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", gap: 20 },
  scoreWrapper: { justifyContent: "center", alignItems: "center" },
  text: {
    fontFamily: Fonts.display,
    fontSize: 45,
  },
  caption: {
    fontFamily: Fonts.light,
    color: Colors.primaryGrey,
  },
});
