import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/Text";
import { theme } from "../../../utils/Themes";
import { fonts } from "../../../utils/Themes/fonts";
import { images } from "../../../assets/pngs";
import sizeHelper from "../../../utils/Helpers";
import CustomButton from "../../../components/Button";
import { appStyles } from "../../../utils/GlobalStyles";
import CustomInput from "../../../components/Input";

const ForgetPassword = ({ navigation }: any) => {
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
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(25) }}>
            <Image
              style={styles.logo}
              source={images.logo}
              resizeMode="contain"
            />
            <CustomText
              text={"Forget password"}
              color={theme.colors.half_black}
              size={30}
              fontWeight="700"
              fontFam={fonts.BricolageGrotesque_Bold}
            />
          </View>

          <CustomText
            text={
              "Please enter your email address and we will send you a password reset code."
            }
            color={theme.colors.half_black}
            size={20}
            style={{ textAlign: "center" }}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />

          <CustomInput
            label="Email"
            value={"info@gmail.com"}
            labelImg={images.message}
            placeholder="Enter email here"
          />

          <CustomButton
            width={"75%"}
            text="Get Code"
            onPress={() => navigation.navigate("Verification")}
            borderRadius={30}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CustomText text={"Back"} color={theme.colors.gray100} size={22} />
          </TouchableOpacity>
        </View>
      </ScreenLayout>
    </>
  );
};
export default ForgetPassword;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: sizeHelper.calWp(40),
    gap: sizeHelper.calHp(40),
    flex: 1,
    alignItems: "center",
    paddingTop: "40%",
  },

  logo: {
    width: sizeHelper.calWp(55),
    height: sizeHelper.calWp(55),
  },
});
