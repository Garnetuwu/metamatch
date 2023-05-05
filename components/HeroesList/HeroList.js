import { StyleSheet, FlatList, View } from "react-native";
import RealmContext from "../../store/RealmConfig";
import HeroItem from "./HeroItem";
import sortByName from "../../utils/sortByName";

const { useRealm } = RealmContext;

const HeroList = ({ role }) => {
  const realm = useRealm();

  const filteredHeroes = realm.objects("Hero").filtered(`role == '${role}'`);

  // create a new array for sorting
  const heroes = [...filteredHeroes];
  sortByName(heroes);

  const renderHeroList = (itemData) => {
    return (
      <HeroItem
        name={itemData.item.name}
        image={itemData.item.image}
        index={itemData.index}
        length={heroes.length}
      />
    );
  };

  return (
    <View style={styles.listView}>
      <FlatList
        data={heroes}
        keyExtractor={(item) => item._id}
        renderItem={renderHeroList}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listView: {
    paddingHorizontal: 10,
    flex: 1,
  },
});

export default HeroList;
