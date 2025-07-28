import { Image, View } from "react-native";
import { windowWidth } from "../../../utils/Commons/Dimention";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import CustomText from "../../Text";
import CustomButton from "../../Button";
import { images } from "../../../assets/pngs";
import { appStyles } from "../../../utils/GlobalStyles";

const RecentStoriesCard = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: sizeHelper.calWp(30),
      }}
    >
      <Image
        style={{
          width: sizeHelper.calWp(260),
          height: sizeHelper.calHp(130),
          borderRadius: sizeHelper.calWp(15),
        }}
        source={images.user_stories}
      />
      <View style={{ gap: sizeHelper.calHp(10), width: "50%" }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.colors.primary + "10",
            width:sizeHelper.calWp(170),
            padding:sizeHelper.calWp(5),
            borderRadius:sizeHelper.calWp(9)
            
          }}
        >
           <CustomText
          text={"Premier League"}
          color={theme.colors.light_red}
          size={16}
        />

        </View>
        <CustomText
          text={"Unlock our free tools to monitor and inprove your record"}
          color={theme.colors.gray100}
          numberOfLines={2}
          size={18}
        />
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
          <CustomText
            text={"Trustee Staff"}
            color={theme.colors.gray100}
            size={18}
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
            size={18}
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

export default RecentStoriesCard;
