import { View, StyleSheet } from "react-native";
import FilterModalItem from "./FilterModalItem";
import { useFilter } from "../../../store/filter-context";
import Colors from "../../../utils/Colors";

export default FilterModal = () => {
  const {
    strong,
    weak,
    combo,
    filterRole,
    onSetStrong,
    onSetWeak,
    onSetCombo,
    onSetRole,
  } = useFilter();
  return (
    <View style={styles.modal}>
      <FilterModalItem title="strong" value={strong} onPress={onSetStrong} />
      <FilterModalItem title="weak" value={weak} onPress={onSetWeak} />
      <FilterModalItem title="combos" value={combo} onPress={onSetCombo} />
      <FilterModalItem title="roles" value={filterRole} onPress={onSetRole} />
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    backgroundColor: Colors.primaryBlack,
    width: "100%",
    borderBottomEndRadius: 4,
    borderBottomStartRadius: 4,
    paddingBottom: 8,
    zIndex: 10,
    left: 0,
    right: 0,
    top: 25,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
  },
});
