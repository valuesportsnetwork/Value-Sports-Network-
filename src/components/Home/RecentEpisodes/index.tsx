import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import { windowWidth } from "../../../utils/Commons/Dimention";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import CustomText from "../../Text";
import { images } from "../../../assets/pngs";
import { appStyles } from "../../../utils/GlobalStyles";

const RecentEpisodesCard = () => {
  return (
    <View
      style={{
        gap: sizeHelper.calWp(30),
        width: windowWidth / 2,
      }}
    >
      <Image
        style={{
          height: sizeHelper.calHp(170),
          width: "100%",
          borderRadius: sizeHelper.calWp(15),
        }}
        source={images.episode}
      />

      <View style={appStyles.rowjustify}>
        <View style={{ gap: sizeHelper.calHp(5), width: "80%" }}>
          <CustomText text={"General"} color={"#484242"} size={16} />
          <CustomText
            text={"Trustee Is the best ream"}
            color={theme.colors.gray100}
            numberOfLines={2}
            size={22}
          />
          <CustomText
            text={"2 hours ago"}
            color={theme.colors.gray65}
            size={15}
          />
        </View>
        <TouchableOpacity>
          <Image
            style={{
              width: sizeHelper.calWp(55),
              height: sizeHelper.calWp(55),
              tintColor: theme.colors.primary,
            }}
            source={images.pause}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecentEpisodesCard;
