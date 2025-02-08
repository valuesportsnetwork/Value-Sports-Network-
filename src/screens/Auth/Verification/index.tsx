import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/Text";
import { theme } from "../../../utils/Themes";
import { fonts } from "../../../utils/Themes/fonts";
import { images } from "../../../assets/pngs";
import sizeHelper from "../../../utils/Helpers";
import CustomButton from "../../../components/Button";
import { appStyles } from "../../../utils/GlobalStyles";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useState } from "react";

const Verification = ({ navigation }: any) => {
  const [value, setValue] = useState("");
  const [isWrongOtp, setIsWrongOtp] = useState(false);

  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
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
              text={"Verification"}
              color={theme.colors.half_black}
              size={30}
              fontWeight="700"
              fontFam={fonts.BricolageGrotesque_Bold}
            />
          </View>

          <CustomText
            text={"Enter the verification code from your mail"}
            color={theme.colors.half_black}
            size={20}
            style={{ textAlign: "center" }}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />

          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
            <CustomText
              text={"Enter OTP here"}
              color={theme.colors.half_black}
              size={25}
              fontWeight="700"
              fontFam={fonts.Inter_Bold}
            />
            <Image
              style={{
                width: sizeHelper.calWp(38),
                height: sizeHelper.calWp(38),
              }}
              source={images.info}
              resizeMode="contain"
            />
          </View>

          <CodeField
            ref={ref}
            {...props}
            caretHidden={true}
            value={value}
            onChangeText={(value) => {
              setValue(value);
              if (value.length == 4) {
                // onHandleOTP(value);
                setIsWrongOtp(true);
              }
            }}
            cellCount={5}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={{
                  ...styles.codeFieldCell,
                  borderColor: isWrongOtp ? theme.colors.primary : "#CBCCD2",
                }}
              >
                <CustomText
                  size={30}
                  color={theme.colors.black}
                  text={symbol || (isFocused ? <Cursor /> : "0")}
                />
              </View>
            )}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={{
              ...appStyles.row,
              gap: sizeHelper.calWp(10),
              alignSelf: "flex-end",
            }}
          >
            <CustomText
              text={"Didn’t receive?"}
              color={theme.colors.gray100}
              size={20}
            />
            <CustomText
              text={"Send again"}
              color={theme.colors.blue}
              textDecorationLine="underline"
              size={20}
            />
          </TouchableOpacity>

          <CustomButton width={"75%"} text="Reset Password" borderRadius={30} />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CustomText text={"Back"} color={theme.colors.gray100} size={22} />
          </TouchableOpacity>
        </View>
      </ScreenLayout>
    </>
  );
};
export default Verification;

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
  codeFieldRoot: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: sizeHelper.calWp(25),
  },
  codeFieldCell: {
    justifyContent: "center",
    alignItems: "center",
    width: "17%",
    height: sizeHelper.calHp(87),
    borderWidth: 1.1,
    borderRadius: sizeHelper.calWp(15),
    borderColor: "#ECECEC",
  },
});
