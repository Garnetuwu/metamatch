import React, { useContext, useState } from "react";
import { LayoutAnimation, Platform, UIManager } from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const animateOnFilter = () =>
  LayoutAnimation.configureNext({
    duration: 300,
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  });

const FilterContext = React.createContext({
  filterRole: null,
  strong: false,
  weak: false,
  combo: false,
  onSetRole: () => {},
  onSetCombo: () => {},
  onSetStrong: () => {},
  onSetWeak: () => {},
});

export const useFilter = () => {
  const filterContext = useContext(FilterContext);
  return filterContext;
};

export const FilterContextProvider = ({ children }) => {
  const [filterRole, setFilterRole] = useState(null);
  const [strong, setStrong] = useState(true);
  const [weak, setWeak] = useState(false);
  const [combo, setCombo] = useState(true);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  const filterModalHandler = () => {
    animateOnFilter();
    setIsFilterModalVisible((prevState) => !prevState);
  };

  const filterRoleHandler = () => {
    animateOnFilter();
    if (!filterRole) {
      setFilterRole("tank");
      return;
    }
    if (filterRole === "tank") {
      setFilterRole("dps");
      return;
    }
    if (filterRole === "dps") {
      setFilterRole("support");
      return;
    }
    setFilterRole(null);
  };

  const filterStrongHandler = () => {
    animateOnFilter();
    setStrong((prevState) => !prevState);
  };

  const filterWeakHandler = () => {
    animateOnFilter();
    setWeak((prevState) => !prevState);
  };

  const filterComboHandler = () => {
    animateOnFilter();
    setCombo((prevState) => !prevState);
  };

  const value = {
    filterRole,
    onSetRole: filterRoleHandler,
    strong,
    onSetStrong: filterStrongHandler,
    weak,
    onSetWeak: filterWeakHandler,
    combo,
    onSetCombo: filterComboHandler,
    isFilterModalVisible,
    onShowFilterModal: filterModalHandler,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
