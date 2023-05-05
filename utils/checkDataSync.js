import _ from "lodash";
import Realm from "realm";

Object.defineProperty(Realm.Object.prototype, "clone", {
  value: function () {
    let result = {};
    for (const key in this) {
      result[key] = this[key];
    }

    return result;
  },
  writable: true,
  configurable: true,
  enumerable: false,
});

export default checkDataSync = (cloudData, localData) => {
  const heroDataNew = { ...cloudData };
  const foundHeroNew = { ...localData.clone() };

  delete heroDataNew.__v;

  const dataRelations = heroDataNew.relationships.map((relation) => ({
    ...relation,
    hero: relation.hero.toString(),
    _id: relation._id.toString(),
  }));

  heroDataNew.relationships = dataRelations;

  const foundRelations = foundHeroNew.relationships.map((relation) => ({
    hero: relation.hero.toString(),
    _id: relation._id.toString(),
    combo: relation.combo,
    score: relation.score,
    counterComment: relation.counterComment,
    comboComment: relation.comboComment,
    special: relation.special,
  }));
  foundHeroNew.relationships = foundRelations;

  return _.isEqual(foundHeroNew, heroDataNew);
};
