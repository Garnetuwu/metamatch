import { ScrollView, StyleSheet, Text, View } from "react-native";
import transTypeToIcon from "../../utils/transTypeToIcon";
import Profile from "./Profile";
import Score from "./Score";
import Colors from "../../utils/Colors";
import Fonts from "../../utils/Fonts";
import { LinearGradient } from "expo-linear-gradient";

export default RelationDetail = ({
  heroProfile,
  relationalHeroProfile,
  score,
  comment,
  filterName,
}) => {
  const heroType = transTypeToIcon(heroProfile.type);
  const relationalHeroType = transTypeToIcon(relationalHeroProfile.type);

  const comments = comment.split("\n");

  return (
    <>
      {filterName === "combo" && (
        <LinearGradient
          colors={["#4989E040", "#6749E000"]}
          style={styles.gradient}
        />
      )}
      <View style={styles.container}>
        <Profile
          name={heroProfile.name}
          type={heroType}
          image={heroProfile.image}
          flip={filterName !== "combo"}
        />
        <Score
          score={score}
          isCombo={filterName === "combo"}
          isSpecial={filterName === "special"}
        />
        <Profile
          name={relationalHeroProfile.name}
          type={relationalHeroType}
          image={relationalHeroProfile.image}
        />
      </View>
      {comment && (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.comment}>
          {comments.map((comm, index) => (
            <Text style={styles.paragraph} key={index}>
              {comm}
            </Text>
          ))}
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    top: 0,
    minWidth: "100%",
    left: 0,
    right: 0,
    height: "35%",
    borderRadius: 4,
  },
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  profile: {
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  comment: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
  paragraph: {
    color: Colors.primaryWhite,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.secondaryFont,
    marginTop: 10,
  },
});
