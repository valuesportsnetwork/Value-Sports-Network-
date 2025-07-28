import {
  Image,
  ScrollView,
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

const BetHistory = ({ navigation }: any) => {
  const DetailContaner = ({ day }: any) => {
    return (
      <View
        style={{
          ...styles.btn_container,
          alignItems: "center",
          justifyContent: "center",
          width: "31%",
        }}
      >
        <View style={{ gap: sizeHelper.calHp(3) }}>
          <CustomText
            text={day}
            color={theme.colors.half_black}
            size={20}
            fontWeight="700"
            fontFam={fonts.Inter_Bold}
          />
          <CustomText
            text={"$0.00"}
            color={theme.colors.gray500}
            size={30}
            style={{ marginTop: sizeHelper.calHp(5) }}
            fontWeight="700"
            fontFam={fonts.Inter_Bold}
          />
          <CustomText
            text={"0-0-0"}
            color={theme.colors.gray500}
            size={20}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />
          <CustomText
            text={"ROI 0%"}
            color={theme.colors.gray500}
            size={20}
            style={{ marginTop: sizeHelper.calHp(10) }}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />
        </View>
      </View>
    );
  };

  const BetsContaner = ({ title }: any) => {
    return (
      <View
        style={{
          ...styles.btn_container,
          alignItems: "center",
          justifyContent: "center",
          width: "31%",
        }}
      >
        <View style={{ gap: sizeHelper.calHp(3), alignItems: "center" }}>
          <Image
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
            }}
            source={images.tap_ball}
          />
          <CustomText
            text={title}
            color={theme.colors.half_black}
            size={25}
            style={{ marginTop: sizeHelper.calHp(15) }}
            fontWeight="700"
            fontFam={fonts.Inter_Bold}
          />
          <CustomText text={"0-0-0"} color={theme.colors.gray500} size={20} />
          <CustomText
            text={"+Add Bets"}
            color={theme.colors.blue100}
            size={16}
          />
        </View>
      </View>
    );
  };
  const FavoriteBetsContaner = () => {
    return (
      <View
        style={{
          ...styles.btn_container,
          gap: sizeHelper.calHp(5),
          paddingHorizontal: sizeHelper.calWp(30),
        }}
      >
        <CustomText
          text={"Favorite Bets"}
          color={theme.colors.half_black}
          size={25}
          style={{ marginTop: sizeHelper.calHp(15) }}
          fontWeight="700"
          fontFam={fonts.Inter_Bold}
        />
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          <CustomText text={"N/A"} color={theme.colors.gray500} size={18} />
          <View style={styles.bet_percentage} />
        </View>
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          <CustomText text={"N/A"} color={theme.colors.gray500} size={18} />
          <View style={styles.bet_percentage} />
        </View>
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          <CustomText text={"N/A"} color={theme.colors.gray500} size={18} />
          <View style={styles.bet_percentage} />
        </View>
        <View
          style={{
            ...appStyles.row,
            gap: sizeHelper.calWp(30),
            marginLeft: sizeHelper.calWp(40),
            marginTop: sizeHelper.calHp(10),
          }}
        >
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <View style={styles.dots} />
            <CustomText
              text={"Spread"}
              color={theme.colors.gray500}
              size={16}
            />
          </View>
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <View style={{ ...styles.dots, backgroundColor: "#F216EE" }} />
            <CustomText text={"ML"} color={theme.colors.gray500} size={16} />
          </View>
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <View style={{ ...styles.dots, backgroundColor: "#FF8C00" }} />
            <CustomText text={"Total"} color={theme.colors.gray500} size={16} />
          </View>
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <View style={{ ...styles.dots, backgroundColor: "#00D65D" }} />
            <CustomText text={"Props"} color={theme.colors.gray500} size={16} />
          </View>
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <View style={{ ...styles.dots, backgroundColor: "#D3BAA4" }} />
            <CustomText
              text={"Futures"}
              color={theme.colors.gray500}
              size={16}
            />
          </View>
        </View>
      </View>
    );
  };
  const ClosingValueContainer = () => {
    return (
      <View
        style={{
          borderRadius: sizeHelper.calWp(20),
          backgroundColor: "#EBEBEB",
          paddingHorizontal: sizeHelper.calWp(20),
          gap: sizeHelper.calHp(5),
          paddingVertical: sizeHelper.calHp(10),
          flex: 1,
        }}
      >
        <View style={{ ...appStyles.rowjustify }}>
          <CustomText
            text={"+CLV Bets"}
            color={theme.colors.gray500}
            size={20}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />
          <CustomText
            text={"0%"}
            color={theme.colors.gray500}
            size={20}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />
        </View>

        <CustomText
          text={"0 Total"}
          color={theme.colors.gray500}
          size={16}
          fontWeight="400"
          fontFam={fonts.Inter_Light}
        />
      </View>
    );
  };

  const StreakConatiner = () => {
    return (
      <>
        <View
          style={{
            ...styles.btn_container,
            paddingHorizontal: sizeHelper.calWp(30),

            flex: 1,
          }}
        >
          <View style={{ gap: sizeHelper.calHp(3) }}>
            <CustomText
              text={"Hot Streak"}
              color={theme.colors.half_black}
              size={25}
              fontWeight="700"
              fontFam={fonts.Inter_Bold}
            />
            <CustomText
              text={"$0"}
              fontFam={fonts.Inter_Bold}
              fontWeight="700"
              color={theme.colors.gray500}
              size={30}
            />
            <CustomText
              text={"Jan 1-Jan30"}
              color={theme.colors.gray500}
              size={18}
            />
          </View>
        </View>
      </>
    );
  };

  const Header = () => {
    return (
      <TouchableOpacity 
      onPress={()=>navigation.goBack()}
      style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
        <Image
          style={{
            height: sizeHelper.calHp(25),
            width: sizeHelper.calHp(25),
          }}
          source={images.back}
        />
        <Image
          style={{
            height: sizeHelper.calHp(45),
            width: sizeHelper.calHp(45),
          }}
          source={images.img_placeholder}
        />
        <CustomText
          text={"Bet History"}
          color={theme.colors.black}
          fontWeight="700"
          fontFam={fonts.BricolageGrotesque_Bold}
          numberOfLines={2}
          size={30}
        />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <ScreenLayout style={styles.main}>
        <ScrollView
          contentContainerStyle={{
            gap: sizeHelper.calHp(30),
            paddingBottom: sizeHelper.calHp(30),
          }}
        >
          <Header />

          <View
            style={{ ...styles.btn_container, height: sizeHelper.calHp(180) }}
          >
            <View
              style={{
                ...appStyles.rowjustify,
                paddingHorizontal: sizeHelper.calWp(10),
              }}
            >
              <View style={{ gap: sizeHelper.calHp(5) }}>
                <CustomText
                  text={"Last 30 Days"}
                  color={theme.colors.half_black}
                  size={20}
                  fontWeight="700"
                  fontFam={fonts.Inter_Bold}
                />
                <CustomText
                  text={"$0.00"}
                  color={theme.colors.half_black}
                  size={20}
                  fontWeight="400"
                  fontFam={fonts.Inter_Light}
                />
              </View>

              <View style={{ gap: sizeHelper.calHp(5) }}>
                <CustomText
                  text={"Wins 0% ROI 0%"}
                  color={theme.colors.half_black}
                  size={16}
                  fontWeight="400"
                  fontFam={fonts.Inter_Light}
                />
                <CustomText
                  text={"Record 0-0-0"}
                  color={theme.colors.half_black}
                  size={14}
                  fontWeight="400"
                  fontFam={fonts.Inter_Light}
                />
              </View>
            </View>
          </View>
          <View style={appStyles.rowjustify}>
            <DetailContaner day={"Today"} />

            <DetailContaner day={"Yesterday"} />
            <DetailContaner day={"Last 7 Days"} />
          </View>
          <View style={appStyles.rowjustify}>
            <BetsContaner title={"MLB"} />

            <BetsContaner title={"UFC"} />
            <BetsContaner title={"BOXING"} />
          </View>
          <FavoriteBetsContaner />

          <View
            style={{
              ...styles.btn_container,
              gap: sizeHelper.calHp(15),
              paddingHorizontal: sizeHelper.calWp(30),
            }}
          >
            <CustomText
              text={"Closing Line Value"}
              color={theme.colors.half_black}
              size={25}
              fontWeight="600"
              fontFam={fonts.Inter_Medium}
            />
            <View
              style={{ ...appStyles.rowjustify, gap: sizeHelper.calWp(20) }}
            >
              <ClosingValueContainer />
              <ClosingValueContainer />
            </View>
          </View>
          <View style={{ ...appStyles.rowjustify, gap: sizeHelper.calWp(20) }}>
            <StreakConatiner />
            <StreakConatiner />
          </View>
        </ScrollView>
      </ScreenLayout>
    </>
  );
};
export default BetHistory;

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
    borderRadius: sizeHelper.calWp(20),
    borderWidth: sizeHelper.calWp(1),
    borderColor: theme.colors.gray700,
    gap: sizeHelper.calWp(17),
    padding: sizeHelper.calWp(20),
  },
  divider: {
    width: "100%",
    height: sizeHelper.calHp(0.5),
    backgroundColor: theme.colors.gray700,
  },
  bet_percentage: {
    height: sizeHelper.calHp(10),
    backgroundColor: "#D9D9D9",
    flex: 1,
    borderTopRightRadius: sizeHelper.calWp(20),
    borderBottomRightRadius: sizeHelper.calWp(20),
  },
  dots: {
    width: sizeHelper.calWp(12),
    height: sizeHelper.calWp(12),
    backgroundColor: "#0C5FBE",
    borderRadius: sizeHelper.calWp(10),
  },
});
