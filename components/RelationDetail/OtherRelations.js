import { View } from "react-native";
import RealmContext from "../../store/RealmConfig";
import filterRelations from "../../utils/filterRelations";
import RelationSection from "../HeroDetail/relationship/RelationSection";
import filterDataByRole from "../../utils/filterDataByRole";

const { useRealm } = RealmContext;

export default OtherRelations = ({ heroName }) => {
  const realm = useRealm();

  const relationships = realm
    .objects("Hero")
    .filtered(`name == '${heroName}'`)[0].relationships;

  const { filteredCounter, filteredCountered } = filterRelations(relationships);

  return (
    <View>
      <RelationSection
        title={`counters ${heroName}`}
        filterName={"countered"}
        filteredHeroes={filterDataByRole(filteredCountered, null)}
        heroName={heroName}
      />
      <RelationSection
        title={`${heroName} counters`}
        filterName={"counters"}
        filteredHeroes={filterDataByRole(filteredCounter, null)}
        heroName={heroName}
      />
    </View>
  );
};
