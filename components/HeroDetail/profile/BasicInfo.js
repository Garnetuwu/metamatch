import InfoItem from "./InfoItem";
import { View } from "react-native";
import transTypeToIcon from "../../../utils/transTypeToIcon";
import { useState } from "react";
import InfoModal from "./InfoModal";

export default BasicInfo = ({ type, strength, weakness, style }) => {
  const typeIcon = transTypeToIcon(type);
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      <View style={style}>
        <InfoItem
          title="type"
          value={type}
          icon={typeIcon}
          iconSize={20}
          pressable={true}
          portion={1 / 3}
          onPress={openModalHandler}
        />
        <InfoItem
          title="strength"
          value={strength === "high burst damage" ? "high burst" : strength}
          portion={1 / 3}
        />
        <InfoItem
          title="weakness"
          value={
            weakness === "easy to get bursted" ? "easily bursted" : weakness
          }
          portion={1 / 3}
        />
      </View>
      <InfoModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};
