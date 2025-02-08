import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Platform, StyleSheet, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../../components/Text";
import { theme } from "../../utils/Themes";
import { images } from "../../assets/pngs";
import { fonts } from "../../utils/Themes/fonts";

import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import Home from "../../screens/Main/Home";
import Quiz from "../../screens/Main/Quiz";
import QuizDetail from "../../screens/Main/QuizDetail";
import Trending from "../../screens/Main/Trending";
import { useTheme } from '@react-navigation/native';
import sizeHelper from "../../utils/Helpers";

const BottomTab = ({}: any) => {
  const Bottom = createBottomTabNavigator();
  const { colors } = useTheme(); // Get the current theme's colors

  const TabItem = ({ focused, title, img,colors }: any) => {
   


    return (
      <View style={[style.itemStyle]}>
        <Image
          resizeMode="contain"
          source={img}
          style={{
            ...style.img,
            tintColor: focused ? colors.primary : colors.grey,
          }}
        />
        <CustomText
          text={title}
          size={18}
          fontFam={fonts.satoshi_medium}
          fontWeight="600"
          color={focused ? colors.primary : colors.grey}
        />
      </View>
    );
  };

  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        animationEnabled: false,
        gestureEnabled: true,
        keyboardHidesTabBar: true,
        cardStyleInterpolator: ({ current, next, layouts }: any) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
        tabBarStyle: {
          backgroundColor: colors.background, // Semi-transparent background
          justifyContent: "center",
          alignItems: "center",
          shadowColor: theme.colors.black,
          shadowOffset: { width: 3, height: 6 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
          borderTopWidth:-1,
            // borderTopColor: theme.colors.input_border,
          display: "flex",
          height: verticalScale(70),
          paddingHorizontal: scale(10),
        },
        headerShown: false,
      })}
    >
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                title={"Home"}
                colors={colors}
                img={focused ? images.home_filled : images.home}
                focused={focused}
              />
            );
          },
        }}
        // options={{
        //   headerShown: false,
        //   tabBarIcon: ({focused}) => {
        //     return (
        //       <TabItem
        //         title={'Home'}
        //         img={focused ? images.fill_home : images.unfill_home}
        //         focused={focused}
        //       />
        //     );
        //   },
        // }}
      />

      <Bottom.Screen
        name="Quiz"
        component={Quiz}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
              colors={colors}
                title={"Quiz"}
                img={focused ? images.schedule_filled : images.course}
                focused={focused}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="CreateQuiz"
        component={QuizDetail}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
              colors={colors}
                title={"Create Quiz"}
                img={focused ? images.schedule : images.schedule}
                focused={focused}
              />
            );
          },
        }}
      />

<Bottom.Screen
        name="Trending"
        component={Trending}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              
              <TabItem
              colors={colors}
                title={"Trending"}
                img={focused ? images.schedule : images.schedule}
                focused={focused}
              />
            );
          },
        }}
      />
     

     
    </Bottom.Navigator>
  );
};
export default BottomTab;

const style = StyleSheet.create({
  itemStyle: {
    width: scale(100),
    backgroundColor: "transparent", // Semi-transparent background
    paddingTop: verticalScale(30),
    justifyContent: "center",
    alignItems: "center",
    gap: verticalScale(8),
  },

  img: {
    height: sizeHelper.calHp(33),
    width:sizeHelper.calHp(33),
  },
});
