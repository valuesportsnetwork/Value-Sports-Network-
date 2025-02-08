import { Image, Platform, StyleSheet, Text, View } from "react-native";
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

const Onbaording = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<AppIntroSlider>(null);
  const renderSlide = ({ item }: any) => (
    <View
      style={{
        flex: 1,
        gap: sizeHelper.calHp(30),
        paddingHorizontal: sizeHelper.calHp(40),
      }}
    >
      <Image
        source={item?.img}
        style={{
          width: "100%",
          height: sizeHelper.calHp(650),
          borderRadius: sizeHelper.calWp(30),
        }}
      />
      <View style={styles.dotsContainer}>
        {slidesData.map((it, ind) => {
          return (
            <View
              key={ind.toString()}
              style={{
                ...styles.dots,
                backgroundColor:
                  currentIndex == ind ? theme.colors.primary : "#D4D4D4",
              }}
            />
          );
        })}
      </View>

      <View
        style={{
          gap: sizeHelper.calHp(20),
          marginTop: sizeHelper.calHp(30),
        }}
      >
        <CustomText
          text={item.title}
          color={theme.colors.half_black}
          size={45}
          style={{ width: "90%" }}
          fontWeight="700"
          fontFam={fonts.BricolageGrotesque_Bold}
        />
        <CustomText
          text={item?.description}
          color={theme.colors.gray}
          size={20}
        />
      </View>
    </View>
  );

  const onSlideChange = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <ScreenLayout style={styles.main}>
        <View style={{ flex: 1 }}>
          <AppIntroSlider
            renderItem={renderSlide}
            data={slidesData}
            ref={flatListRef}
            onSlideChange={onSlideChange}
            showNextButton={false}
            showDoneButton={false}
            renderPagination={() => null} // Disable dots
          />
        </View>
        <View style={styles.bottomContainer}>
          <CustomText
            text={"Skip"}
            color={theme.colors.black}
            size={25}
            fontWeight="600"
            fontFam={fonts.Inter_Medium}
          />
          <CustomButton
            width={"75%"}
            onPress={() => {
              if (currentIndex > 1) {
                navigation.navigate("GetStarted");
              } else {
                setCurrentIndex(currentIndex + 1);
                flatListRef?.current?.goToSlide(currentIndex + 1);
              }
            }}
            text={currentIndex > 1 ? "Continue" : "Next"}
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
export default Onbaording;

const styles = StyleSheet.create({
  main: {
    flex: 1,
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
    paddingHorizontal: sizeHelper.calHp(40),
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
