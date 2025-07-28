import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import { windowWidth } from "../../../utils/Commons/Dimention";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import CustomText from "../../Text";
import { images } from "../../../assets/pngs";
import { appStyles } from "../../../utils/GlobalStyles";
import { fonts } from "../../../utils/Themes/fonts";

const ProAnalysisCard = () => {
  return (
    <View
      style={{
        gap: sizeHelper.calWp(10),
        width: windowWidth / 2,
      }}
    >
      <Image
        style={{
          height: sizeHelper.calHp(170),
          width: "100%",
          borderRadius: sizeHelper.calWp(15),
          overflow: "hidden",
        }}
        source={images.pro_img}
      />
      <TouchableOpacity style={{ position: "absolute",alignSelf:"center", top:"20%"}}>
            <Image
              style={{
                width: sizeHelper.calWp(60),
                height: sizeHelper.calWp(60),
                tintColor:theme.colors.primary
              }}
              source={images.pause}
              resizeMode="contain"
            />
          </TouchableOpacity>
     
    

      <View >
        <CustomText text={"NBA"}
        fontFam={fonts.Inter_Medium}
        fontWeight="600"
         color={"#484242"} size={16} />
        <CustomText
          text={"Lorem ispum isump lor lorem ipmn"}
          color={theme.colors.gray100}
          numberOfLines={2}
          size={22}
        />
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
          <CustomText
            text={"Marc Alex"}
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

export default ProAnalysisCard;
