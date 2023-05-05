import { ScrollView } from "react-native";
import RelationSection from "./RelationSection";
import filterRelations from "../../../utils/filterRelations";
import { useFilter } from "../../../store/filter-context";
import EmptyResults from "./EmptyResults";
import filterDataByRole from "../../../utils/filterDataByRole";

export default HeroRelationships = ({ relationships, name }) => {
  const { combo, filterRole, strong, weak } = useFilter();

  const {
    filteredCombo,
    filteredCounter,
    filteredCountered,
    filteredSpecial,
    filteredStrong,
    filteredWeak,
  } = filterRelations(relationships);

  const renderList = [
    {
      title: "countered by",
      filterName: "countered",
      defaultView: true,
      filteredHeroes: filterDataByRole(filteredCountered, filterRole),
    },
    {
      title: "is weak against",
      filterName: "weak against",
      defaultView: false,
      filter: weak,
      filteredHeroes: filterDataByRole(filteredWeak, filterRole),
    },
    {
      title: "counters",
      filterName: "counters",
      defaultView: true,
      filteredHeroes: filterDataByRole(filteredCounter, filterRole),
    },
    {
      title: "is strong against",
      filterName: "strong against",
      defaultView: false,
      filter: strong,
      filteredHeroes: filterDataByRole(filteredStrong, filterRole),
    },
    {
      title: "special",
      filterName: "special",
      defaultView: true,
      filteredHeroes: filterDataByRole(filteredSpecial, filterRole),
    },
    {
      title: "combos with",
      filterName: "combo",
      defaultView: false,
      filter: combo,
      filteredHeroes: filterDataByRole(filteredCombo, filterRole),
    },
  ];

  const renderRelations = renderList.map((item) => {
    const content = (
      <RelationSection
        key={item.title}
        title={item.title}
        filterName={item.filterName}
        filteredHeroes={item.filteredHeroes}
        heroName={name}
      />
    );
    return item.defaultView ? content : item.filter && content;
  });

  let emptyResults = [];

  renderList.map((item) => {
    const mapToEmptyResults =
      item.filteredHeroes.length == 0 && emptyResults.push(item.filterName);
    item.defaultView ? mapToEmptyResults : item.filter && mapToEmptyResults;
  });

  return (
    <ScrollView style={{ zIndex: -10 }}>
      {renderRelations}
      {emptyResults.length > 0 && (
        <EmptyResults filterRole={filterRole} emptyResults={emptyResults} />
      )}
    </ScrollView>
  );
};
