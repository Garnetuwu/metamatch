import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { FilterContextProvider } from "../store/filter-context";
import { enableScreens } from "react-native-screens";
import { ImageBackground } from "react-native";

import HeroRelationDetail from "../screens/HeroRelationDetail";
import Allheroes from "../screens/Allheroes";
import HeroDetail from "../screens/HeroDetail";
import MetamatchHeader from "./MetamatchHeader";

import Colors from "../utils/Colors";
import Fonts from "../utils/Fonts";
import AboutUs from "../screens/AboutUs";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

enableScreens(false);

const customScreenOptions = {
  headerStyle: {
    backgroundColor: Colors.thirdBlack,
  },
  headerTintColor: Colors.primaryWhite,
  headerTitleStyle: {
    fontFamily: Fonts.primaryFont,
    fontSize: 24,
  },
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        ...customScreenOptions,
        sceneContainerStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Drawer.Screen
        component={Allheroes}
        name="All Heroes"
        options={{
          headerTitle: () => <MetamatchHeader />,
          headerTitleAlign: "center",
        }}
      />
      <Drawer.Screen component={AboutUs} name="About us" />
    </Drawer.Navigator>
  );
};

export default NavigatorWrapper = () => {
  return (
    <FilterContextProvider>
      <ImageBackground
        source={require("../assets/images/Background.png")}
        style={{ flex: 1 }}
      >
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              ...customScreenOptions,
              contentStyle: {
                backgroundColor: "transparent",
              },
              animation: "slide_from_bottom",
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
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
