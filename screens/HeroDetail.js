import RealmContext from "../store/RealmConfig";

import Card from "../components/UI/Card";
import HeroProfile from "../components/HeroDetail/profile/HeroProfile";
import HeroRelationships from "../components/HeroDetail/relationship/HeroRelationships";

import Divider from "../components/UI/Divider";
import { useFilter } from "../store/filter-context";
import Backdrop from "../components/UI/Backdrop";

const { useRealm } = RealmContext;

export default HeroDetail = ({ route }) => {
  const heroName = route.params.heroName;

  const realm = useRealm();

  const { isFilterModalVisible, onShowFilterModal } = useFilter();

  const selectedHero = realm
    .objects("Hero")
    .filtered(`name == '${heroName}'`)[0];

  const { name, image, weakness, strength, role, type, relationships } =
    selectedHero;

  return (
    <Card>
      {isFilterModalVisible && <Backdrop onRequestClose={onShowFilterModal} />}
      <HeroProfile
        name={name}
        image={image}
        weakness={weakness}
        strength={strength}
        role={role}
        type={type}
      />
      <Divider />
      <HeroRelationships relationships={relationships} name={name} />
    </Card>
  );
};
