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
import CustomInput from "../../../components/Input";
import SocialButton from "../../../components/SocialButton";

const Signup = ({ navigation }: any) => {
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

          <CustomText
            size={42}
            fontWeight="700"
            color={Colors.black}
            fontFam={fonts.BricolageGrotesque_Bold}
            text={"Sign Up"}
          />
          <View
            style={{
              width: "100%",
              gap: sizeHelper.calHp(30),
            }}
          >
            <CustomInput
              label="Email"
              labelImg={images.message}
              placeholder="Enter email here"
            />

            <CustomButton
            onPress={()=>navigation.navigate('favoriteSports')}
             text="Continue with Email" borderRadius={25} />

            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(30),
                paddingHorizontal: sizeHelper.calWp(30),
              }}
            >
              <View style={styles.divider} />

              <CustomText
                text={"or log in with"}
                color={theme.colors.gray100}
                fontFam={fonts.Inter_Light}
                fontWeight="400"
                size={23}
              />
              <View style={styles.divider} />
            </View>

            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(30),
                paddingHorizontal: sizeHelper.calWp(30),
                alignSelf: "center",
              }}
            >
              <SocialButton icon={images.google} />
              <SocialButton icon={images.facebook} />
              <SocialButton icon={images.apple} />
            </View>
            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(10),
                alignSelf: "center",
              }}
            >
              <CustomText
                text={"Already a member?"}
                color={theme.colors.gray100}
                size={20}
              />
              <CustomText
                text={"Log in"}
                color={theme.colors.secondry}
                textDecorationLine="underline"
                size={20}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("favoriteSports")}
          style={styles.skipContainer}
        >
          <Image
            style={styles.next_arrow}
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
export default Signup;

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
  divider: { flex: 1, backgroundColor: "#ECECEC", height: sizeHelper.calHp(2) },
  logo: {
    width: sizeHelper.calWp(150),
    height: sizeHelper.calWp(150),
  },

  next_arrow: {
    height: sizeHelper.calHp(25),
    width: sizeHelper.calHp(25),
    marginLeft: sizeHelper.calWp(20),
    tintColor: theme.colors.gray100,
  },
});
