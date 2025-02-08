import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import CustomText from "../Text";
import { ButtonProps } from "../../utils/Types";
import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper from "../../utils/Helpers";

const CustomButton = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  disable = false,
  borderWidth,
  paddingHorizontal,
  isLoading,
  fontWeight,
  children
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.5}
      style={
        [
          {
            width: width || "100%",
            height: sizeHelper.calHp(height || 80),
            backgroundColor: bgColor || theme.colors.primary,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: sizeHelper.calHp(borderRadius || 999),
            borderWidth: borderWidth || -1,
            borderColor: borderColor,
            paddingHorizontal: paddingHorizontal,
            flexDirection:"row"
          },
          style,
        ] as StyleProp<ViewStyle>
      }
    >
      <CustomText
        text={text}
        color={textColor || theme.colors.white}
        size={size || 25}
        // fontWeight={fontWeight || "700"}
        // fontFam={fontFam || fonts.satoshi_bold}
      />
      {children}
    </TouchableOpacity>
  );
};
export default CustomButton;
