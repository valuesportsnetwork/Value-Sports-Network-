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
import FavSportContainer from "./FavSportContainer";

const favoriteSports = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<AppIntroSlider>(null);
  const [selectedSport, setSelectedSport] = useState(1);

  const favSportData = [
    { title: "NFL" },
    { title: "NFL" },
    { title: "NFL" },
    { title: "NFL" },
    { title: "NFL" },
    { title: "NFL" },
    { title: "NFL" },
    { title: "NFL" },
    { title: "NFL" },
    { title: "NFL" },
    { title: "NFL" },
  ];

  console.log("selectedSport", selectedSport);
  const handleSelect = (index: any) => {
    setSelectedSport(index);
  };
  const RenderFav = ({ item, index }: any) => {
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
            borderWidth: 1,
            backgroundColor:
              selectedSport == index ? theme.colors.primary : "transparent",
          }}
        ></View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <ScreenLayout style={styles.main}>
        <View style={{ flex: 1, paddingTop: "25%", gap: sizeHelper.calHp(20) }}>
          <CustomText
            text={"Choose your favorite sports leagues."}
            color={theme.colors.half_black}
            size={40}
            style={{ width: "95%" }}
            fontWeight="600"
            fontFam={fonts.BricolageGrotesque_SemiBold}
          />

          <CustomText
            text={
              "Set your favorites to customize your experience and recommendations."
            }
            color={theme.colors.half_black}
            size={22}
            style={{ width: "95%" }}
            // fontWeight="600"
            // fontFam={fonts.BricolageGrotesque_SemiBold}
          />
          <View
            style={{
              ...appStyles.rowjustify,
              flexWrap: "wrap",
              gap: sizeHelper.calHp(10),
            }}
          >
            {favSportData.map((item, index) => {
              return <FavSportContainer
              key={index.toString()}
               item={item} />;
            })}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <CustomButton
            // width={"100%"}
            borderRadius={30}
            onPress={() => {}}
            text={"Continue"}
          >
            <Image
              style={styles.next_arrow}
              source={images.next_arrow}
              resizeMode="contain"
            />
          </CustomButton>
        </View>
      </ScreenLayout>
    </>
  );
};
export default favoriteSports;

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
