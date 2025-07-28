import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import AppIntroSlider from "react-native-app-intro-slider";
import { useRef, useState } from "react";
import { images } from "../../../assets/pngs";
import sizeHelper from "../../../utils/Helpers";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { theme } from "../../../utils/Themes";
import CustomButton from "../../../components/Button";
import { slidesData } from "../../../utils/Data";
import { appStyles } from "../../../utils/GlobalStyles";

const FavSportContainer = ({ item, index }: any) => {
  const [selectedSport, setSelectedSport] = useState(1);

  const handleSelect = (index: any) => {
    setSelectedSport(index);
  };

  return (
    <>
      return (
      <TouchableOpacity
        onPress={() => handleSelect(index)}
        style={{
          gap: sizeHelper.calHp(30),
          paddingHorizontal: sizeHelper.calHp(20),
          paddingVertical: sizeHelper.calHp(18),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: theme.colors.gray400,
          borderWidth: 1,
          width: "48%",
          borderRadius: sizeHelper.calWp(15),
        }}
      >
        <View style={{ ...appStyles.row, gap: sizeHelper.calHp(15) }}>
          <Image
            source={images.ball}
            resizeMode="contain"
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calHp(40),
            }}
          />
          <CustomText
            text={item.title}
            color={theme.colors.half_black}
            size={22}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />
        </View>

        <View
          style={{
            width: sizeHelper.calHp(30),
            height: sizeHelper.calHp(30),
            borderRadius: sizeHelper.calHp(40),
            borderColor: theme.colors.gray400,
            borderWidth: selectedSport == index ? -1: 1,
            backgroundColor:
              selectedSport == index ? theme.colors.primary : "transparent",
          }}
        ></View>
      </TouchableOpacity>
      );
    </>
  );
};
export default FavSportContainer;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: sizeHelper.calHp(40),
    gap: sizeHelper.calHp(30),
    paddingBottom: sizeHelper.calHp(40),
  },
  next_arrow: {
    height: sizeHelper.calHp(30),
    width: sizeHelper.calHp(30),
    marginLeft: sizeHelper.calWp(20),
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: sizeHelper.calWp(8),
    alignSelf: "center",
  },
  dots: {
    width: sizeHelper.calWp(15),
    height: sizeHelper.calWp(15),
    borderRadius: 999,
  },
});
