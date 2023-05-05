import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from "../../../utils/Colors";
import PressableHeroIcon from "../../PressableHeroIcon";
import { useNavigation } from "@react-navigation/native";
import Fonts from "../../../utils/Fonts";

export default RelationSection = ({
  title,
  filteredHeroes,
  heroName,
  filterName,
}) => {
  const navigation = useNavigation();

  const renderHeroRelations = filteredHeroes.map((hero) => {
    const pressHandler = () => {
      navigation.navigate("HeroRelation", {
        hero: heroName,
        filterName,
        relationalHero: hero.name,
        score: hero.score,
        counterComment: hero.counterComment,
        combo: hero.combo,
        comboComment: hero.comboComment,
      });
    };
    return (
      <View style={styles.relationItem} key={hero._id}>
        <PressableHeroIcon
          name={hero.name}
          image={hero.image}
          onPress={pressHandler}
          size={70}
          backgroundColor="#FFFFFF0D"
          fontSize={11}
        />
      </View>
    );
  });

  return (
    <>
      {renderHeroRelations.length > 0 && (
        <View style={styles.container}>
          <Text style={styles.title}>{title.toUpperCase()}</Text>
          <ScrollView
            horizontal={true}
            persistentScrollbar={true} //android
            indicatorStyle="white" //ios
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "flex-start",
              columnGap: 13,
            }}
          >
            {renderHeroRelations}
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    marginBottom: 17,
  },
  title: {
    color: Colors.primaryWhite,
    fontSize: 17,
    fontFamily: Fonts.semiBold,
    marginTop: 15,
    marginBottom: 5,
  },
  relationItem: {
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 95,
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 11,
  },
});
