import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Allheroes from "../screens/Allheroes";
import HeroDetail from "../screens/HeroDetail";
import { FilterContextProvider } from "../store/filter-context";
import Colors from "../utils/Colors";
import { enableScreens } from "react-native-screens";
import HeroRelationDetail from "../screens/HeroRelationDetail";
import Fonts from "../utils/Fonts";
import { ImageBackground } from "react-native";
import MetamatchHeader from "./MetamatchHeader";

const Stack = createNativeStackNavigator();

enableScreens(false);

export default NavigatorWrapper = () => {
  return (
    <FilterContextProvider>
      <ImageBackground
        source={require("../assets/images/Background.png")}
        style={{ flex: 1 }}
      >
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="All Heroes"
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.thirdBlack,
              },
              headerTintColor: Colors.primaryWhite,
              headerTitleStyle: {
                fontFamily: Fonts.primaryFont,
                fontSize: 24,
              },
              contentStyle: {
                backgroundColor: "transparent",
              },
              animation: "slide_from_bottom",
            }}
          >
            <Stack.Screen
              name="All Heroes"
              component={Allheroes}
              options={{
                headerTitle: () => <MetamatchHeader />,
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="HeroDetail"
              component={HeroDetail}
              options={({ route }) => ({
                title: route.params.heroName,
              })}
            />
            <Stack.Screen
              name="HeroRelation"
              component={HeroRelationDetail}
              options={({ route }) => ({
                title: `${route.params.hero} ${
                  route.params.filterName === "combo" ? "&" : "VS"
                } ${route.params.relationalHero}`,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </FilterContextProvider>
  );
};
