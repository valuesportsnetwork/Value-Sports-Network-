import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onbaording from "../../screens/Auth/Onbaording";
import GetStarted from "../../screens/Auth/GetStarted";
import Login from "../../screens/Auth/Login";
import Signup from "../../screens/Auth/Signup";
import ForgetPassword from "../../screens/Auth/ForgetPassword";
import Verification from "../../screens/Auth/Verification";
import favoriteSports from "../../screens/Auth/favoriteSports";
import BottomTab from "../BottomTab";
import BetHistory from "../../screens/Main/BetHistory";
import MyAccounts from "../../screens/Main/MyAccounts";
import BettingTools from "../../screens/Main/BettingTools";
import ArbCalculator from "../../screens/Main/BettingTools/ArbCalculator";
import BetCalculator from "../../screens/Main/BettingTools/BetCalculator";
import EVCalculator from "../../screens/Main/BettingTools/EVCalculator";
import OddsConverter from "../../screens/Main/BettingTools/OddsConverter";

export type AppStackParamList = {
  Login: undefined;
  Signup:undefined;
  BottomTab: undefined;
  GetStarted: undefined;
  Onbaording:undefined
  ForgetPassword:undefined
  Verification:undefined
  favoriteSports:undefined
  BetHistory:undefined
  MyAccounts:undefined
  BettingTools:undefined
  ArbCalculator:undefined
  BetCalculator:undefined
  EVCalculator:undefined
  OddsConverter:undefined
};
const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      // screenOptions={TransitionScreenOptions}
      screenOptions={{
        headerShown: false,

        // cardStyleInterpolator: ({current: {progress}}) => {
        //   return {
        //     cardStyle: {
        //       opacity: progress,
        //     },
        //   };
        // },
      }}
    >
            <Stack.Screen name={"Onbaording"} component={Onbaording} />
            <Stack.Screen name={"GetStarted"} component={GetStarted} />
            <Stack.Screen name={"Login"} component={Login} />
            <Stack.Screen name={"Signup"} component={Signup} />
            <Stack.Screen name={"ForgetPassword"} component={ForgetPassword} />
            <Stack.Screen name={"Verification"} component={Verification} />
            <Stack.Screen name={"favoriteSports"} component={favoriteSports} />
            <Stack.Screen name={"BetHistory"} component={BetHistory} />
            <Stack.Screen name={"MyAccounts"} component={MyAccounts} />
            <Stack.Screen name={"BottomTab"} component={BottomTab} />
            <Stack.Screen name={"BettingTools"} component={BettingTools} />

            <Stack.Screen name={"ArbCalculator"} component={ArbCalculator} />
            <Stack.Screen name={"BetCalculator"} component={BetCalculator} />
            <Stack.Screen name={"EVCalculator"} component={EVCalculator} />
            <Stack.Screen name={"OddsConverter"} component={OddsConverter} />

    </Stack.Navigator>
  );
};
export default AppStack;
