import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import { windowWidth } from "../../../utils/Commons/Dimention";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import CustomText from "../../Text";
import { images } from "../../../assets/pngs";
import { appStyles } from "../../../utils/GlobalStyles";
import { fonts } from "../../../utils/Themes/fonts";

const RecentVideosCard = () => {
  return (
    <View
      style={{
        gap: sizeHelper.calWp(30),
        width: windowWidth / 2,
      }}
    >
      <ImageBackground
        style={{
          height: sizeHelper.calHp(170),
          width: "100%",
          borderRadius: sizeHelper.calWp(15),
          overflow: "hidden",
        }}
        source={images.user_stories}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: theme.colors.black + "99",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              ...appStyles.row,
              gap: sizeHelper.calWp(10),
              paddingHorizontal: sizeHelper.calWp(40),
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(40),
                height: sizeHelper.calWp(40),
              }}
              source={images.logo}
              resizeMode="contain"
            />
            <CustomText
              text={"Value Sports"}
              color={theme.colors.white}
              size={27}
              fontWeight="900"
              fontFam={fonts.Inter_Bold}
            />
          </View>
          <TouchableOpacity style={{ position: "absolute" }}>
            <Image
              style={{
                width: sizeHelper.calWp(80),
                height: sizeHelper.calWp(80),
              }}
              source={images.pause}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={{ gap: sizeHelper.calHp(5), width: "80%" }}>
        <CustomText text={"General"} color={"#484242"} size={16} />
        <CustomText
          text={"Trustee Is the best ream"}
          color={theme.colors.gray100}
          numberOfLines={2}
          size={22}
        />
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
          <CustomText
            text={"Trustee Staff"}
            color={theme.colors.gray100}
            size={15}
          />
          <View
            style={{
              width: sizeHelper.calWp(6),
              height: sizeHelper.calWp(6),
              borderRadius: sizeHelper.calWp(6),
              backgroundColor: theme.colors.black,
            }}
          />
          <CustomText
            text={"2 hours ago"}
            color={theme.colors.gray65}
            size={15}
          />
        </View>
      </View>
      {/* <View style={{ width: "70%" }}>
          <CustomText
            text={"Track your first bet"}
            color={theme.colors.white}
            numberOfLines={1}
            size={23}
            fontWeight="700"
            fontFam={fonts.BricolageGrotesque_Bold}
          />
          <CustomText
            text={"Unlock our free tools to monitor and inprove your record"}
            color={theme.colors.white}
            numberOfLines={2}
            size={18}
          />
          <CustomButton
            // width={"100%"}
            borderRadius={999}
            height={40}
            style={{ marginTop: sizeHelper.calHp(20) }}
            width={"60%"}
            size={17}
            textColor={theme.colors.black}
            bgColor={theme.colors.white}
            // onPress={() => {}}
            text={"Track a bet"}
          >
            <Image
              style={styles.next_arrow}
              source={images.next_arrow}
              resizeMode="contain"
            />
          </CustomButton>
        </View>

        <Image
          style={{
            width: sizeHelper.calWp(80),
            height: sizeHelper.calHp(80),
            tintColor: theme.colors.white,
          }}
          source={images.state_up}
          resizeMode="contain"
        /> */}
    </View>
  );
};

export default RecentVideosCard;
