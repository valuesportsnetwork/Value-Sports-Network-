// components/AnimatedProgressBar.js
import React, { useRef, useEffect } from "react";
import {
  View,
  Animated,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomText from "../Text";
import sizeHelper from "../../utils/Helpers";
import { theme } from "../../utils/Themes";
import { images } from "../../assets/pngs";

const { width: screenWidth } = Dimensions.get("window");

const SetUpProgress = ({
  totalSteps,
  currentStep,
  backgroundColor,
  progressColor,
  title,
  mainWidth,
  detailColor,
  totalStars,
  stars,
  width,
}: any) => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  useEffect(() => {
    const progress = (currentStep / totalSteps) * 100;
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 700,
      useNativeDriver: false,
    }).start();
  }, [currentStep, totalSteps]);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "96%"],
  });

  return (
    <View
      style={{
        gap: sizeHelper.calHp(5),
        width: width || "100%",
        alignItems: "center",
        height: sizeHelper.calHp(15),
        borderRadius: 999,
        backgroundColor: backgroundColor || "#ECECEC",
      }}
    >
      <Animated.View
        style={{
          width: sizeHelper.calWp(43),
          height: sizeHelper.calWp(43),
          borderRadius: sizeHelper.calWp(43),
          backgroundColor: "#ECECEC",
          position: "absolute",
          bottom: sizeHelper.calHp(-8),
          left: progressWidth,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            height: sizeHelper.calHp(18),
            width: sizeHelper.calHp(18),
          }}
          source={images.trophy}
          resizeMode="contain"
        />
      </Animated.View>
      {/* <View
        style={{
          ...styles.container,
          backgroundColor: backgroundColor || "#ECECEC",
          width: mainWidth || "100%",
        }}
      >
        <Animated.View
          style={[
            styles.progressBar,

            {
              width: progressWidth,
              backgroundColor: progressColor || "#ECECEC",
            },
          ]}
        >
       
        </Animated.View>

      
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: sizeHelper.calHp(13),
    alignSelf: "center",
    borderRadius: 999,
    overflow: "hidden",
    justifyContent: "center",
    position: "relative",
  },
  progressBar: {
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  text: {
    position: "absolute",
    alignSelf: "center",
    fontWeight: "bold",
    color: "#fff",
    zIndex: 1,
  },
});

export default SetUpProgress;
