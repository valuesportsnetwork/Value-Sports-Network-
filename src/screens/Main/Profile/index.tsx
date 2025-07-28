import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { appStyles } from "../../../utils/GlobalStyles";
import { images } from "../../../assets/pngs";
import CustomText from "../../../components/Text";
import { theme } from "../../../utils/Themes";
import { fonts } from "../../../utils/Themes/fonts";
import CustomButton from "../../../components/Button";
import SetUpProgress from "../../../components/SetUpProgress";

const Profile = ({ navigation }: any) => {
  const DetailContaner = ({ title,onPress }: any) => {
    return (
      <TouchableOpacity 
      onPress={onPress}
      style={{ ...styles.btn_container, flex: 1 }}>
        <Image style={styles.logo} source={images.boxes} resizeMode="contain" />
        <CustomText
          text={title}
          color={theme.colors.half_black}
          size={20}
          fontWeight="400"
          fontFam={fonts.Inter_Light}
        />
      </TouchableOpacity>
    );
  };

  const SportsContainer = ({ item, index }: any) => {
    return (
      <View
        style={{
          width: "100%",
          borderRadius: sizeHelper.calWp(25),
          backgroundColor: theme.colors.white,
          gap: sizeHelper.calWp(30),
          paddingVertical: sizeHelper.calHp(30),
          elevation: 7, // Android shadow
          shadowColor: theme.colors.black,
          shadowOffset: { width: 3, height: 3 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <View
          style={{
            gap: sizeHelper.calHp(15),
            paddingHorizontal: sizeHelper.calWp(25),
          }}
        >
          <CustomText
            text={"Complete Set Up"}
            fontWeight="600"
            fontFam={fonts.Inter_SemiBold}
            color={theme.colors.black}
            size={20}
          />

          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(5) }}>
            <CustomText
              text={"You’ve completed"}
              color={theme.colors.black}
              size={17}
            />
            <CustomText
              text={"0"}
              color={theme.colors.black}
              size={17}
              fontWeight="600"
              fontFam={fonts.Inter_SemiBold}
            />
            <CustomText text={"out ot"} color={theme.colors.black} size={17} />
            <CustomText
              text={"5"}
              color={theme.colors.black}
              size={17}
              fontWeight="600"
              fontFam={fonts.Inter_SemiBold}
            />
            <CustomText text={"items"} color={theme.colors.black} size={17} />
          </View>
          <SetUpProgress totalSteps={50} width={"98%"} currentStep={50} />
        </View>
        <View style={{ gap: sizeHelper.calHp(30) }}>
          <View
            style={{
              ...appStyles.rowjustify,
              paddingHorizontal: sizeHelper.calWp(25),
            }}
          >
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
              <Image
                style={{
                  height: sizeHelper.calHp(22),
                  width: sizeHelper.calHp(22),
                }}
                source={images.notification}
                resizeMode="contain"
              />
              <CustomText
                text={"Turn on notifications"}
                color={theme.colors.black}
                size={18}
              />
            </View>

            <Image
              style={{
                height: sizeHelper.calHp(20),
                width: sizeHelper.calHp(20),
              }}
              source={images.next}
              resizeMode="contain"
            />
          </View>
          <View style={styles.divider} />

          <TouchableOpacity
          onPress={()=>navigation.navigate("BettingTools")}
            style={{
              ...appStyles.rowjustify,
              paddingHorizontal: sizeHelper.calWp(25),
            }}
          >
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
              <Image
                style={{
                  height: sizeHelper.calHp(22),
                  width: sizeHelper.calHp(22),
                }}
                source={images.leagues}
                resizeMode="contain"
              />
              <CustomText
                text={"Set favorite teams & leagues"}
                color={theme.colors.black}
                size={18}
              />
            </View>

            <Image
              style={{
                height: sizeHelper.calHp(20),
                width: sizeHelper.calHp(20),
              }}
              source={images.next}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.divider} />
          <View
            style={{
              ...appStyles.row,
              gap: sizeHelper.calWp(5),
              alignSelf: "center",
            }}
          >
            <CustomText
              text={"View More"}
              color={theme.colors.blue100}
              size={20}
            />
            <Image
              style={{
                height: sizeHelper.calHp(20),
                width: sizeHelper.calHp(20),
                tintColor: theme.colors.blue100,
              }}
              source={images.next}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    );
  };

  const MoneyPercentagesCard = () => {
    return (
      <View
        style={{
          width: "100%",
          borderRadius: sizeHelper.calWp(25),
          backgroundColor: "#F53636",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: sizeHelper.calHp(170),

          overflow: "hidden",
        }}
      >
        <View
          style={{
            width: "65%",
            gap: sizeHelper.calHp(10),
            paddingVertical: sizeHelper.calHp(30),
            paddingHorizontal: sizeHelper.calWp(25),
          }}
        >
          <CustomText
            text={"Money Percentages,sharp action and more."}
            color={theme.colors.white}
            numberOfLines={2}
            size={23}
            fontWeight="700"
            fontFam={fonts.Inter_Bold}
          />

          <CustomText
            text={"GET PRO >"}
            color={theme.colors.white + "80"}
            size={17}
          />
        </View>
        <View
          style={{
            width: sizeHelper.calWp(300),
            height: sizeHelper.calWp(300),
            borderRadius: 999,
            backgroundColor: theme.colors.white + "50",
            alignItems: "center",
            // marginRight:sizeHelper.calWp(-0),
            justifyContent: "center",
          }}
        >
          <View
            style={{
              borderRadius: 999,
              backgroundColor: theme.colors.white + "50",
              width: sizeHelper.calWp(200),
              height: sizeHelper.calWp(200),
              marginRight: sizeHelper.calWp(-30),
              marginTop: sizeHelper.calHp(40),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: "110%",
                height: "110%",
              }}
              source={images.sports}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    );
  };

  const TrackCard = () => {
    return (
      <View
        style={{
          width: "100%",
          borderRadius: sizeHelper.calWp(25),
          backgroundColor: theme.colors.blue100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: sizeHelper.calWp(25),
          paddingVertical: sizeHelper.calHp(10),

          overflow: "hidden",
        }}
      >
        <View
          style={{
            width: "65%",
            gap: sizeHelper.calHp(10),
            paddingVertical: sizeHelper.calHp(10),
          }}
        >
          <CustomText
            text={"Track Your First Bet"}
            color={theme.colors.white}
            numberOfLines={2}
            size={23}
            fontWeight="700"
            fontFam={fonts.Inter_Bold}
          />

          <CustomText
            text={
              "Track your first bet to start using our free tools to monitor and improve your record."
            }
            color={theme.colors.white + "80"}
            size={17}
          />

          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
            <CustomButton
              // width={"100%"}
              borderRadius={20}
              height={50}
              style={{ marginTop: sizeHelper.calHp(20) }}
              width={"50%"}
              size={17}
              fontWeight="600"
              fontFam={fonts.Inter_Medium}
              textColor={theme.colors.blue100}
              bgColor={theme.colors.white}
              // onPress={() => {}}
              text={"Get Started"}
            ></CustomButton>
            <CustomText
              text={"Not Now"}
              color={theme.colors.white}
              textDecorationLine={"underline"}
              style={{ marginTop: sizeHelper.calHp(15) }}
              size={17}
            />
          </View>
        </View>

        <Image
          style={{
            width: sizeHelper.calWp(200),
            height: sizeHelper.calWp(200),
          }}
          source={images.tracks}
          resizeMode="contain"
        />
      </View>
    );
  };
  const Header = () => {
    return (
      <View
        style={{ ...appStyles.rowjustify, paddingRight: sizeHelper.calWp(20) }}
      >
        <View>
          <Image
            style={{
              height: sizeHelper.calHp(100),
              width: sizeHelper.calHp(100),
              borderRadius: sizeHelper.calWp(100),
            }}
            source={images.img_placeholder}
          />
          <CustomText
            text={"marcalex1234_"}
            color={theme.colors.black}
            numberOfLines={2}
            size={20}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <CustomText
            text={"100"}
            color={theme.colors.black}
            numberOfLines={2}
            size={18}
          />
          <CustomText
            text={"Total Bets"}
            color={theme.colors.gray700}
            numberOfLines={2}
            size={15}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <CustomText
            text={"100"}
            color={theme.colors.black}
            numberOfLines={2}
            size={18}
          />
          <CustomText
            text={"Followers"}
            color={theme.colors.gray700}
            numberOfLines={2}
            size={15}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <CustomText
            text={"100"}
            color={theme.colors.black}
            numberOfLines={2}
            size={18}
          />
          <CustomText
            text={"Following"}
            color={theme.colors.gray700}
            numberOfLines={2}
            size={15}
          />
        </View>

        {/* <View style={{ gap: sizeHelper.calHp(5), width: "80%" }}>
          <CustomText
            text={"NBA | Lorem ipsum sum realm ipsrem"}
            color={theme.colors.gray100}
            numberOfLines={2}
            size={22}
          />
          <CustomText
            text={"Mark Jame . 17h ago"}
            color={theme.colors.gray65}
            size={15}
          />
        </View> */}
      </View>
    );
  };
  return (
    <>
      <ScreenLayout style={styles.main}>
        <CustomText
          text={"marcalex1234_"}
          color={theme.colors.half_black}
          size={30}
          fontWeight="900"
          fontFam={fonts.Inter_Bold}
        />
        <Header />
        <MoneyPercentagesCard />
        <View style={{ ...appStyles.rowjustify, gap: sizeHelper.calWp(20) }}>
          <DetailContaner title={"Bet History"}
          onPress={()=>navigation.navigate("BetHistory")}
           />
          <DetailContaner title={"My Accounts"}
                    onPress={()=>navigation.navigate("MyAccounts")}

           />
        </View>
        <TrackCard />
        <SportsContainer />
      </ScreenLayout>
    </>
  );
};
export default Profile;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(30),
    flex: 1,
    paddingHorizontal: sizeHelper.calWp(40),
  },
  logo: {
    width: sizeHelper.calWp(43),
    height: sizeHelper.calWp(43),
  },
 
  next_arrow: {
    height: sizeHelper.calHp(30),
    width: sizeHelper.calHp(25),
    marginLeft: sizeHelper.calWp(10),
    tintColor: theme.colors.primary,
  },
  btn_container: {
    height: sizeHelper.calHp(65),
    borderRadius: sizeHelper.calWp(15),
    borderWidth: sizeHelper.calWp(1),
    borderColor: theme.colors.gray700,
    flexDirection: "row",
    alignItems: "center",
    gap: sizeHelper.calWp(17),
    paddingHorizontal: sizeHelper.calWp(20),
  },
  divider: {
    width: "100%",
    height: sizeHelper.calHp(0.5),
    backgroundColor: theme.colors.gray700,
  },
});
