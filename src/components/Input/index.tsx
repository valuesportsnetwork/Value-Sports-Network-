import { Image, TextInput, TouchableOpacity, View } from "react-native";
import CustomText from "../Text";
import { InputProps } from "../../utils/Types";
import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { appStyles } from "../../utils/GlobalStyles";
import sizeHelper from "../../utils/Helpers";

const CustomInput = ({
  placeholder,
  keyboard,
  secureTextEntry,
  rightSource,
  props,
  fontWeight,
  multiline,
  height,
  fontSize,
  value,
  onChangeText,
  onBlur,
  error,
  onShowPassword,
  editable,
  color,
  maxLength,
  leftSource,
  width,
  placeholderTextColor,
  borderWidth,
  borderRadius,
  backgroundColor,
  borderColor,
  rightSourceSize,
  textAlign,
  textAlignVertical,
  paddingTop,
  onSubmitEditing,
  mandatory,
  label,
  rightSourceColor,
  onFocus,
  labelImg,
  labelSize
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { colors } = useTheme(); // Get the current theme's colors

  return (
    <View style={{ ...props, width: width || "100%" }}>
      {label && (
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10),marginBottom: sizeHelper.calWp(15)  }}>
          {
            labelImg&&(
              <Image
              source={labelImg}
              style={{
                width: sizeHelper.calWp(30),
                height: sizeHelper.calWp(30),
                tintColor:theme.colors.black
              }}
              resizeMode={"contain"}
            />

            )
          }
        
          <CustomText
            // fontFam={font.WorkSans_Regular}
            size={ labelSize ||25}
            text={label}
          />
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: sizeHelper.calWp(20),
          height: sizeHelper.calHp(height || 80),
          alignItems: "center",
          borderColor: borderColor || "#92929240",
          borderWidth: borderWidth || 1,
          borderRadius: borderRadius || sizeHelper.calWp(30),
          backgroundColor: backgroundColor || theme.colors.gray200,
        }}
      >
        <TextInput
          value={value}
          editable={editable}
          onSubmitEditing={onSubmitEditing}
          allowFontScaling={false} // Disable font scaling
          style={{
            fontSize: fontSize ||sizeHelper.calHp(22),
            width: rightSource ? "92%" : "98%",
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
            textAlign: textAlign,
            textAlignVertical: textAlignVertical,
            paddingTop: paddingTop || 0,
            paddingVertical: 0, // Adjust as needed for centering
            fontFamily: fonts.Inter_Regular,
            fontWeight: fontWeight || "500",
            color: color || theme.colors.gray400,
          }}
          placeholder={placeholder}
          // placeholder={`${placeholder}${mandatory ? " *" : ""}`}
          multiline={multiline}
          placeholderTextColor={placeholderTextColor ||"#AFAFAF"}
          keyboardType={keyboard}
          maxLength={maxLength}
          onFocus={onFocus}
          secureTextEntry={secureTextEntry || false}
          onChangeText={onChangeText}
          onBlur={onBlur}
          autoCapitalize="none"
        />
        {rightSource && (
          <TouchableOpacity
            onPress={onShowPassword}
            disabled={!onShowPassword}
            activeOpacity={0.6}
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Image
              source={rightSource}
              style={{
                width: sizeHelper.calWp(rightSourceSize || 30),
                height: sizeHelper.calWp(rightSourceSize || 30),
                tintColor: rightSourceColor || theme.colors.primary,
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <View
          style={{
            marginTop: sizeHelper.calHp(10),
          }}
        >
          <CustomText
            size={12}
            text={error}
            // color={colors.red}
          />
        </View>
      )}
    </View>
  );
};
export default CustomInput;
