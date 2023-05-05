export default filterRelations = (data) => {
  const filteredCounter = data
    .filter((relation) => {
      return relation.score >= 70;
    })
    .sort(asc);

  const filteredCountered = data
    .filter((relation) => {
      return relation.score <= -70;
    })
    .sort(des);

  const filteredStrong = data
    .filter((relation) => {
      return relation.score >= 50 && relation.score < 70;
    })
    .sort(asc);

  const filteredWeak = data
    .filter((relation) => {
      return relation.score <= -50 && relation.score > -70;
    })
    .sort(des);

  const filteredSpecial = data.filter((relation) => relation.special);

  const filteredCombo = data
    .filter((relation) => relation.combo >= 3)
    .sort(comboAsc);

  return {
    filteredCounter,
    filteredCountered,
    filteredSpecial,
    filteredStrong,
    filteredWeak,
    filteredCombo,
  };
};

const asc = (a, b) => {
  return b.score - a.score;
};

const comboAsc = (a, b) => {
  return b.combo - a.combo;
};

const des = (a, b) => {
  return a.score - b.score;
};
