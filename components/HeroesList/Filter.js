import { View, StyleSheet } from "react-native";
import FilterElement from "./FilterElement.js";
import Colors from "../../utils/Colors.js";
const roles = ["tank", "dps", "support"];

const Filter = ({ selected, onFilter }) => {
  return (
    <View style={styles.filter}>
      {roles.map((role, index) => (
        <FilterElement
          selected={selected}
          onFilter={onFilter}
          key={index}
          title={role}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  filter: {
    backgroundColor: Colors.primaryGrey,
    flexDirection: "row",
  },
});

export default Filter;
