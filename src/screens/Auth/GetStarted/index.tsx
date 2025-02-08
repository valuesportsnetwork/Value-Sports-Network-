import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/Text";
import { theme } from "../../../utils/Themes";
import { fonts } from "../../../utils/Themes/fonts";
import { images } from "../../../assets/pngs";
import sizeHelper from "../../../utils/Helpers";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CustomButton from "../../../components/Button";
import { appStyles } from "../../../utils/GlobalStyles";

const GetStarted = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout style={styles.main}>
        <View
          style={{
            flex: 1,
            gap: sizeHelper.calHp(40),
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image
            style={styles.logo}
            source={images.logo}
            resizeMode="contain"
          />

          <View style={{ alignItems: "center", width: "90%" }}>
            <CustomText
              size={42}
              fontWeight="700"
              color={Colors.black}
              lineHeight={sizeHelper.calHp(40)}
              fontFam={fonts.BricolageGrotesque_Bold}
              text={"Your live sports"}
            />
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(8) }}>
              <CustomText
                size={42}
                fontWeight="700"
                fontFam={fonts.BricolageGrotesque_Bold}
                color={theme.colors.half_black}
                text={"and"}
              />
              <CustomText
                size={42}
                fontWeight="700"
                fontFam={fonts.BricolageGrotesque_Bold}
                color={"#FF5978"}
                text={"highlights"}
              />
              <CustomText
                size={45}
                fontWeight="700"
                fontFam={fonts.BricolageGrotesque_Bold}
                color={theme.colors.half_black}
                text={"hub"}
              />
            </View>

            <CustomText
              size={20}
              style={{ textAlign: "center", marginTop: sizeHelper.calHp(30) }}
              color={theme.colors.half_black}
              text={
                "Watch sports live or highlights, read every news from your smartphone"
              }
            />
          </View>
          <View
            style={{
              width: "100%",
              gap: sizeHelper.calHp(25),
              paddingTop: sizeHelper.calHp(70),
            }}
          >
            <CustomButton
              onPress={() => navigation.navigate("Login")}
              text="Login"
              borderRadius={25}
            />
            <CustomButton
              text="Create account"
              borderRadius={25}
              textColor={theme.colors.black100}
              bgColor={theme.colors.primary + "15"}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.skipContainer}
        >
          <Image
            style={{
              height: sizeHelper.calHp(25),
              width: sizeHelper.calHp(25),
              marginLeft: sizeHelper.calWp(20),
              tintColor: theme.colors.gray100,
            }}
            source={images.next_arrow}
            resizeMode="contain"
          />
          <CustomText
            text={"Skip"}
            color={theme.colors.gray100}
            size={20}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />
        </TouchableOpacity>
      </ScreenLayout>
    </>
  );
};
export default GetStarted;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: sizeHelper.calWp(40),
    gap: sizeHelper.calHp(40),
    flex: 1,
    alignItems: "center",
    paddingTop: "40%",
  },
  skipContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "flex-end",
    paddingBottom: sizeHelper.calHp(40),
    gap: sizeHelper.calWp(13),
  },
  logo:{
    width: sizeHelper.calWp(150),
    height: sizeHelper.calWp(150),
  }
});
