import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Platform, StyleSheet, View } from "react-native";
import CustomText from "../../components/Text";
import { theme } from "../../utils/Themes";
import { images } from "../../assets/pngs";
import { fonts } from "../../utils/Themes/fonts";

import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import Home from "../../screens/Main/Home";
import { useTheme } from "@react-navigation/native";
import sizeHelper from "../../utils/Helpers";
import TopGames from "../../screens/Main/TopGames";
import Vip from "../../screens/Main/Vip";
import Feed from "../../screens/Main/Feed";
import Profile from "../../screens/Main/Profile";

const BottomTab = ({}: any) => {
  const Bottom = createBottomTabNavigator();
  const { colors } = useTheme(); // Get the current theme's colors

  const TabItem = ({ focused, title, img, colors }: any) => {
    return (
      <View style={[style.itemStyle]}>
        <Image
          resizeMode="contain"
          source={img}
          style={{
            ...style.img,
            // tintColor: focused ? theme.colors.primary : colors.gray500,
          }}
        />
        <CustomText
          text={title}
          size={15}
          color={focused ?theme.colors.primary :theme.colors.gray500}
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
          backgroundColor: theme.colors.white, // Semi-transparent background
          justifyContent: "center",
          alignItems: "center",
          shadowColor: theme.colors.black,
          shadowOffset: { width: 3, height: 6 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
          borderTopWidth: 1,
          // borderTopColor: theme.colors.input_border,
          display: "flex",
          height: sizeHelper.calHp(120),
          paddingHorizontal: sizeHelper.calWp(20),
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
                img={focused ? images.filled_home : images.home}
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
        name="TopGames"
        component={TopGames}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                colors={colors}
                title={"Top Games"}
                img={focused ? images.top_game : images.top_game}
                focused={focused}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Vip"
        component={Vip}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                colors={colors}
                title={"Vip"}
                img={focused ? images.filled_vip : images.vip}
                focused={focused}
              />
            );
          },
        }}
      />

      <Bottom.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                colors={colors}
                title={"Feed"}
                img={focused ? images.filled_feed : images.feed}
                focused={focused}
              />
            );
          },
        }}
      />

<Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                colors={colors}
                title={"Profile"}
                img={focused ? images.filled_profile : images.profile}
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
    width:sizeHelper.calWp(120),
    backgroundColor: "transparent", // Semi-transparent background
    paddingTop: sizeHelper.calHp(40),
    justifyContent: "center",
    alignItems: "center",
    gap: sizeHelper.calHp(8),
    
  },

  img: {
    height: sizeHelper.calHp(45),
    width: sizeHelper.calHp(45),
  },
});
