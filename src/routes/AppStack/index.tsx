import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onbaording from "../../screens/Auth/Onbaording";
import GetStarted from "../../screens/Auth/GetStarted";
import Login from "../../screens/Auth/Login";
import Signup from "../../screens/Auth/Signup";
import ForgetPassword from "../../screens/Auth/ForgetPassword";
import Verification from "../../screens/Auth/Verification";

export type AppStackParamList = {
  Login: undefined;
  Signup:undefined;
  BottomTab: undefined;
  GetStarted: undefined;
  Onbaording:undefined
  ForgetPassword:undefined
  Verification:undefined
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

      
    </Stack.Navigator>
  );
};
export default AppStack;
