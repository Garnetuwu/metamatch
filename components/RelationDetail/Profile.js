import { View, Text, StyleSheet, Pressable } from "react-native";
import IconCard from "../UI/IconCard";
import { FontAwesome5 } from "@expo/vector-icons";
import { PrimaryText } from "../../utils/Styles";
import { useNavigation } from "@react-navigation/native";

export default Profile = ({ name, image, type, flip }) => {
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate("HeroDetail", {
      heroName: name,
    });
  };

  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.profile}>
        <IconCard image={image} size={100} flip={flip} />
        <Text style={PrimaryText}>{name}</Text>
        <FontAwesome5 name={type} color={Colors.primaryWhite} size={18} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  profile: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
