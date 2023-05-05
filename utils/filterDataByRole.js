import RealmContext from "../store/RealmConfig";

const { useRealm } = RealmContext;

export default filterDataByRole = (data, filterRole) => {
  const realm = useRealm();
  let filteredHeroes = [];

  data.map((relation) => {
    const { name, image, role, _id } = realm
      .objects("Hero")
      .filtered("_id == $0", relation.hero)[0];

    const relationalHero = {
      name,
      image,
      _id,
      score: relation.score,
      counterComment: relation.counterComment,
      combo: relation.combo,
      comboComment: relation.comboComment,
    };

    if (!filterRole) {
      filteredHeroes.push(relationalHero);
    }
    role === filterRole && filteredHeroes.push(relationalHero);
  });

  return filteredHeroes;
};
