import { View, Image } from "react-native";
import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper from "../../utils/Helpers";
import { appStyles } from "../../utils/GlobalStyles";
import { images } from "../../assets/pngs";
import CustomText from "../Text";
const CustomHeader = ({
    title,

}:any ) => {
  return (
    <View
    style={{
        ...appStyles.row,
        gap: sizeHelper.calWp(20),
        backgroundColor: theme.colors.white,
      }}
  >
    <Image
      style={{
        height: sizeHelper.calHp(25),
        width: sizeHelper.calHp(25),
      }}
      source={images.back}
    />

    <CustomText
      text={title}
      color={theme.colors.black}
      fontWeight="700"
      fontFam={fonts.BricolageGrotesque_Bold}
      numberOfLines={2}
      size={30}
    />
  </View>
  );
};
export default CustomHeader;
