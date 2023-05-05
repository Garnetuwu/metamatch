import { View } from "react-native";
import InfoItem from "./InfoItem";
import { useFilter } from "../../../store/filter-context";
import FilterModal from "./FilterModal";

export default FilterInfo = ({ style }) => {
  const {
    filterRole,
    strong,
    weak,
    combo,
    isFilterModalVisible,
    onShowFilterModal,
  } = useFilter();

  return (
    <>
      <View style={style}>
        <InfoItem
          value="filters"
          icon="filter"
          iconSize={15}
          pressable={true}
          onPress={onShowFilterModal}
          portion={1 / 4}
        />
        <InfoItem
          value={!filterRole ? "all roles" : filterRole}
          portion={1 / 4}
          isFilterItem={true}
        />
        {(strong || weak) && (
          <InfoItem
            value={
              strong && weak ? "strong & weak" : strong ? "strong" : "weak"
            }
            portion={1 / 4}
            isFilterItem={true}
          />
        )}
        {combo && (
          <InfoItem value="combos" portion={1 / 4} isFilterItem={true} />
        )}
        {isFilterModalVisible && <FilterModal />}
      </View>
    </>
  );
};
