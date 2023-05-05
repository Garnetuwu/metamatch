import Card from "../components/UI/Card";
import RealmContext from "../store/RealmConfig";
import RelationDetail from "../components/RelationDetail/RelationDetail";
import Divider from "../components/UI/Divider";
import OtherRelations from "../components/RelationDetail/OtherRelations";

const { useRealm } = RealmContext;

export default HeroRelation = ({ route }) => {
  const params = route.params;
  const realm = useRealm();

  const {
    hero,
    relationalHero,
    combo,
    comboComment,
    score,
    counterComment,
    filterName,
  } = params;

  const { image: heroImage, type: heroType } = realm
    .objects("Hero")
    .filtered(`name == '${hero}'`)[0];

  const heroProfile = { name: hero, image: heroImage, type: heroType };

  const { image: relationalHeroImage, type: relationalHeroType } = realm
    .objects("Hero")
    .filtered(`name == '${relationalHero}'`)[0];

  const relationalHeroProfile = {
    name: relationalHero,
    image: relationalHeroImage,
    type: relationalHeroType,
  };

  return (
    <Card>
      <RelationDetail
        heroProfile={heroProfile}
        relationalHeroProfile={relationalHeroProfile}
        filterName={filterName}
        score={filterName === "combo" ? combo : score}
        comment={filterName === "combo" ? comboComment : counterComment}
      />
      <Divider />
      <OtherRelations heroName={relationalHero} />
    </Card>
  );
};
