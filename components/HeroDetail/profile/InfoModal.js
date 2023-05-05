import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import Colors from "../../../utils/Colors";
import CustomModal from "../../UI/CustomModal";
import { Text, StyleSheet, View, Image } from "react-native";
import Fonts from "../../../utils/Fonts";
import Divider from "../../UI/Divider";

const InfoModal = ({ showModal, setShowModal }) => {
  return (
    <CustomModal visible={showModal} onRequestClose={() => setShowModal(false)}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/RPS.png")}
          style={{ transform: [{ scale: 0.7 }] }}
        />
      </View>
      <Text style={[styles.text, styles.notation]}>
        Overwatch has three classic types of team compositions, spam, brawl, and
        dive.
      </Text>
      <TypeSection iconName="hand-rock" title="brawl.">
        depicted as rock, braw is sturdy, and packs a hearty punch at close
        range, however it will crumble if it's spread out too thin.
      </TypeSection>

      <TypeSection iconName="hand-paper" title="spam.">
        depicted as paper, spam is best when spread out with high damage, to
        pick off enemies before they're given the chance to engage.
      </TypeSection>

      <TypeSection iconName="hand-scissors" title="dive.">
        depicted as scissors, dive is swift and dexterous, with precision dive
        can cut apart a disorganized team with ease.
      </TypeSection>

      <Divider />

      <Text style={[styles.summary, styles.text]}>
        Much like rock, paper, scissors, these compositions are strong against
        one and weak against another. As metas change, people vary in skill, and
        people have different playstyles, it's not uncommon for rock to smash
        paper, scissors to cut rock, or paper to smother scissors. This is just
        a basic guideline.
      </Text>

      <Text style={[styles.summary, styles.text]}>
        Different heroes fit these styles in different ways, some are very
        clearly one type, whilst other heroes can cover a few types, for example
        Winston is very clearly dive, where as Lucio can be both a dive, brawl,
        and even a little spam.
      </Text>
    </CustomModal>
  );
};

export default React.memo(InfoModal);

const TypeSection = ({ iconName, title, children }) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.titleContainer}>
        <Text style={[styles.text, styles.title]}>{title}</Text>
        <FontAwesome5 name={iconName} size={18} color={Colors.primaryOrange} />
      </View>
      <Text style={[styles.paragraph, styles.text]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  notation: {
    textAlign: "center",
    fontFamily: Fonts.light,
    marginBottom: 18,
    fontSize: 13,
    color: Colors.primaryGrey,
  },
  summary: {
    marginTop: 10,
    fontSize: 13,
  },
  text: {
    color: Colors.primaryWhite,
    fontFamily: Fonts.secondaryFont,
    lineHeight: 20,
  },
  sectionContainer: {
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    color: Colors.primaryOrange,
  },
  paragraph: {
    fontSize: 13,
  },
});
