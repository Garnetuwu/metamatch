import React, { useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { AppProvider, UserProvider, useApp } from "@realm/react";

import RealmContext from "./store/RealmConfig.js";
import NavigatorWrapper from "./components/NavigatorWrapper.js";

import Login from "./components/Login.js";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";

import checkDataSync from "./utils/checkDataSync.js";

const { RealmProvider, useRealm } = RealmContext;

import { fonts } from "./utils/Fonts.js";

preventAutoHideAsync();

export default function App() {
  //fonts
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProvider id="metamatch-kyblx">
      <UserProvider fallback={Login}>
        <RealmProvider
          sync={{
            flexible: true,
            onError: console.error,
            // clientReset: {
            //   mode: "discardUnsyncedChanges",
            // },
          }}
        >
          <DataSync>
            <StatusBar style="light" />
            <NavigatorWrapper />
          </DataSync>
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  );
}

const DataSync = ({ children }) => {
  const realm = useRealm();
  const app = useApp();

  const db = app.currentUser.mongoClient("mongodb-atlas").db("metamatch");
  const collection = db.collection("heros");

  useEffect(() => {
    // add subscription
    realm.subscriptions.update((subs) => {
      subs.add(realm.objects("Hero"));
    });

    const localHeroes = realm.objects("Hero");

    const compareAndUpdateHeroes = async () => {
      //fetch hero from original db
      const queryResult = await collection.find();

      //save hero to realm
      queryResult.map((heroData) => {
        const foundHero = localHeroes.find(
          (hero) => hero._id.toString() === heroData._id.toString()
        );

        //validate data sync
        if (foundHero) {
          const isDataInSync = checkDataSync(heroData, foundHero);

          if (isDataInSync) {
            return;
          }
          realm.write(() => {
            realm.delete(foundHero);
            realm.create("Hero", heroData);
          });
          console.log("updated object for: ", heroData.name);
          return;
        }
        realm.write(() => {
          realm.create("Hero", heroData);
        });
        console.log("created object for: ", heroData.name);
      });

      await hideAsync();
    };
    compareAndUpdateHeroes();
  }, []);

  return <>{children}</>;
};
